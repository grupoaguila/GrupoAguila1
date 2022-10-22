import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './tabletest.css';
import { TbEdit } from "react-icons/tb";
import TableTestModal from "./TableTestModal";  




function TableResponsive() {

    //filter  
    const [filter, setFilter] = React.useState('');
    
    //cases from Redux (store)
    const cases = useSelector((state) => state.cases)
    
    //Modal Form data
    const [caseData, setCaseData] = React.useState([]);
    
    //modal state 
    const [showModal, setShowModal] = React.useState(false);
    //when Edit button is clicked
    function showModalEdit(id) {
        setCaseData(cases.length > 0 && cases.filter(el => el.id === id))
        setShowModal(true)
    }


    //Filter method
    let casesFiltered = [];
    if(!filter){
        casesFiltered = cases;
    }else{
        casesFiltered =  cases.filter((dato)=>
             dato.Nombre.toLowerCase().includes(filter.toLocaleLowerCase()) || dato.Numero.toLowerCase().includes(filter.toLocaleLowerCase()) || dato.perito.toLowerCase().includes(filter.toLocaleLowerCase()) || dato.localidad.toLowerCase().includes(filter.toLocaleLowerCase()) || dato.Compañia.toLowerCase().includes(filter.toLocaleLowerCase()) || dato.Patente.toLowerCase().includes(filter.toLocaleLowerCase())
        )
    }

  
    return (
        <>
         <input id="filter"
          name="filter"
          type="text"
          value={filter} //--> binding input with state.
          onChange={e => setFilter(e.target.value)}
        />



            {casesFiltered?.length === 0 ?
                <div>Loading...</div> :
                <Table>
                    <Thead>
                        <Tr>
                            <Th className="thEdit">Vencimiento</Th>
                            <Th className="thEdit">N° Denuncia</Th>
                            <Th className="thEdit">Compañía</Th>
                            <Th className="thEdit">Asegurado</Th>
                            <Th className="thEdit">Patente</Th>
                            <Th className="thEdit">Modelo</Th>
                            <Th className="thEdit">Dirección</Th>
                            <Th className="thEdit">Localidad</Th>
                            <Th className="thEdit">N° Contacto</Th>
                            <Th className="thEdit">Estado</Th>
                            <Th className="thEdit">Perito</Th>  
                            <Th className="thEdit">Notas Extras</Th>
                            <Th className="thEdit">Editar</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                         casesFiltered.map((el) => (  
                                // Patente is a notnull field meaning that an empty register won't be allowed.

                                el.Patente &&
                                <Tr>
                                    <Td className="tdEdit" key={el.id}>{el.Vencimiento}</Td>
                                    <Td className="tdEdit" key={el.id}>{el.Numero}</Td> 
                                    <Td className="tdEdit" key={el.id} >{el.Compañia}</Td>
                                    <Td className="tdEdit" key={el.id}>{el.Nombre}</Td>
                                    <Td className="tdEdit" key={el.id}>{el.Patente}</Td>
                                    <Td className="tdEdit" key={el.id}>{el.Marca}</Td>
                                    <Td className="tdEdit" key={el.id}>{el.direccion}</Td>
                                    <Td className="tdEdit" key={el.id}>{el.localidad}</Td>
                                    <Td className="tdEdit" key={el.id}>{el.celular}</Td>
                                    <Td className="tdEdit" key={el.id}>{!el.estado ? "Sin Completar" : el.estado}</Td>
                                    <Td className="tdEdit" key={el.id}>{el.perito}</Td>
                                    <Td className="tdEdit" key={el.id}>{!el.notas ? "Sin Completar" : el.notas}</Td>
                                    <Td className="tdEdit" key={el.id}><div className="editBtn" onClick={() => showModalEdit(el.id)}><TbEdit /></div></Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            }
            {/* Modal rendering */}
            <TableTestModal show={showModal} close={() => setShowModal(false)} caseData={caseData} />   
            
        </>
    )

}
export default TableResponsive;
