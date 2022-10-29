import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { TbEdit } from "react-icons/tb";
import TableTestModal from "../InputsSelects/EditCase/BySuperAdmin/TableTestModal";
import TableTestModalAdmin from "../InputsSelects/EditCase/ByAdmin/TableTestModalAdmin";
import TableTestModalPerito from "../InputsSelects/EditCase/ByPerito/TableTestModalPerito";
import { getCasesAction, getPeritos, peritosByName } from "../../Store/Actions";
import "./tabletest.css";

function TableResponsive({ cases, columns, detail, title, rol }) {
  
  let dispatch= useDispatch()

  //this function dispatches getPeritos(), getCases and PeritosByname
  function Actualizacion(){
    // console.log('entré en Actualizacion');
      dispatch(getPeritos())
      dispatch(getCasesAction())
      setTimeout(()=>{ 
        dispatch(peritosByName())
      },2500)
    

  }
  //filter
  const [filter, setFilter] = React.useState("");

  //cases from Redux (store)
  // const cases = useSelector((state) => state.cases)
  const columns1 = columns.map((el) => {
    return el.text;
  });
  const columns2 = columns.map((el) => {
    return el.dataField;
  });
  //   console.log("columns1", columns1);

  //Modal Form data
  const [caseData, setCaseData] = React.useState([]);

  //modal state
  const [showModal, setShowModal] = React.useState(false);
  //when Edit button is clicked
  function showModalEdit(id) {
    setCaseData(cases.length > 0 && cases.filter((el) => el.id === id));
    setShowModal(true);
  }

  //Filter method
  let casesFiltered = [];
  if (!filter) {
    casesFiltered = cases;
  } else {
    casesFiltered = cases.filter(
      (dato) =>
        dato.Nombre.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.Numero.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.perito.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.localidad.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.Compañia.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.Patente.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }

  return (
    <>
      <input
        id="filter"
        className="filterInput"
        name="filter"
        type="text"
        placeholder="Filtra tu búsqueda..."
        value={filter} //--> binding input with state.
        onChange={(e) => setFilter(e.target.value)}
      />

      {casesFiltered?.length === 0 ? (
        <div className="noRegistersFound">No se encontraron registros...</div>
      ) : (
        <>
        {/* Tabler Title */}
          <h3 className="tableTitle">{title}</h3>

          {/* Table */}
          <div className="table-wrapper">

          <Table>
            <Thead>
              <Tr>
                {columns1.map((e) => {
                  return <Th className="thEdit">{e}</Th>;
                })}

                <Th className="thEdit">Editar</Th>
              </Tr>
            </Thead>

            <Tbody>
              {casesFiltered.map(
                (el) =>
                // Patente is a notnull field meaning that an empty register won't be allowed.
                
                el.Patente && (
                  <Tr>
                      {columns2.map((c) => {
                        let y = el[c];
                        return (
                          <Td className="tdEdit" key={el.id}>
                            {y ? y : "Sin Completar"}
                          </Td>
                        );
                      })}

                      <Td className="tdEdit" key={el.id}>
                        <div
                          className="editBtn"
                          onClick={() => showModalEdit(el.id)}
                          >
                          <TbEdit />
                        </div>
                      </Td>
                    </Tr>
                  )
              )}
            </Tbody>
          </Table>
      </div>
        </>
      )}
      {/* Modal rendering */}
      {
        rol==='superAdmin' &&
        <TableTestModal
        show={showModal}
        close={() => setShowModal(false)}
        caseData={caseData}
        detail={detail}
        actualizar={Actualizacion}
        />
      }
      {
        rol==='Admin' &&
      <TableTestModalAdmin
      show={showModal}
      close={() => setShowModal(false)}
      caseData={caseData}
      detail={detail}
      actualizar={Actualizacion}
      />
    }
      {
        rol==='Perito' &&
        <TableTestModalPerito
        show={showModal}
        close={() => setShowModal(false)}
        caseData={caseData}
        detail={detail}
        actualizar={Actualizacion}
        />
      }
    </>
  );
}
export default TableResponsive;


