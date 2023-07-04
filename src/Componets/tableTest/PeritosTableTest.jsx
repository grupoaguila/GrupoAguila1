import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./tabletest.css";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditModalPerito from "../InputsSelects/EditPerito/EditModalPerito";
import { getCasesAction, getPeritos, peritosByName } from "../../Store/Actions";
import DeletePerito from "../InputsSelects/EditPerito/DeletePerito";

function PeritosTableResponsive({ cases, columns, detail, title, rol }) {


  let dispatch= useDispatch()
  function Actualizacion1(){
  //  console.log('entré en Actualizacion');
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
  // console.log("columns1", columns1);
  // console.log("columns2", columns2);

  //Modal Form data
  const [caseData, setCaseData] = React.useState([]);

  //modal state
  const [showModal, setShowModal] = React.useState(false);
  const [showModalD, setShowModalD] = React.useState(false);
  //when Edit button is clicked
  function showModalEdit(id) {
    setCaseData(cases.length > 0 && cases.filter((el) => el.id === id));//son los peritos
    setShowModal(true);
  }
  function showModalDelete(id) {
    setCaseData(cases.length > 0 && cases.filter((el) => el.id === id));//son los peritos
    setShowModalD(true);
  }

  //Filter method
  let casesFiltered = [];
  if (!filter) {
    casesFiltered = cases;
  } else {
    casesFiltered = cases.filter(
      (dato) =>
        dato.nombre.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.email.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.celular.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.rol.toLowerCase().includes(filter.toLocaleLowerCase())         
    );
  }
  // console.log('casesFiltered', casesFiltered)
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
          <Table>
            <Thead>
              <Tr>
                {columns1.map((e) => {
                  return <Th className="thEdit">{e}</Th>;
                })}

                <Th className="thEdit">Editar</Th>
                <Th className="thEdit">Eliminar</Th>
              </Tr>
            </Thead>

            <Tbody>
              {casesFiltered.map(
                (el) =>
                  // Patente is a notnull field meaning that an empty register won't be allowed.

                  el.nombre&& (
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
                      <Td className="tdEdit" key={el.id}>
                        <div
                          className="editBtn"
                          onClick={() => showModalDelete(el.id)}
                        >
                          <RiDeleteBin6Line />
                        </div>
                      </Td>
                    </Tr>
                  )
              )}
            </Tbody>
          </Table>
        </>
      )}
      {/* Modal rendering */}
      <EditModalPerito 
      show={showModal}
      close={() => setShowModal(false)}
      caseData={caseData}
      detail={detail}
      actualizar={Actualizacion1}/>
      
      <DeletePerito 
      show={showModalD}
      close={() => setShowModalD(false)}
      caseData={caseData}
      detail={detail}
      actualizar={Actualizacion1}/>
    </>
  );
}
export default PeritosTableResponsive;


