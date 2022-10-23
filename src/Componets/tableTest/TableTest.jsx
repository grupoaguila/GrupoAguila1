import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./tabletest.css";
import { TbEdit } from "react-icons/tb";
import TableTestModal from "../InputsSelects/EditCase/BySuperAdmin/TableTestModal";

function TableResponsive({ cases, columns, detail, title }) {
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
        dato.Compañia.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }

  return (
    <>
      <input
        id="filter"
        name="filter"
        type="text"
        value={filter} //--> binding input with state.
        onChange={(e) => setFilter(e.target.value)}
      />

      {casesFiltered?.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          {title}

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
      )}
      {/* Modal rendering */}
      <TableTestModal
        show={showModal}
        close={() => setShowModal(false)}
        caseData={caseData}
        detail={detail}
      />
    </>
  );
}
export default TableResponsive;


