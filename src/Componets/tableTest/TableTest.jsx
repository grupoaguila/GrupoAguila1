import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './tabletest.css';

function TableResponsive() {

    const cases = useSelector((state) => state.cases)
    
    return (
        <>
            {cases.length === 0 ?
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
                            cases.map((el) => (
                                <Tr>
                                    <Td className="tdEdit">{el.Vencimiento}</Td>
                                    <Td className="tdEdit">{el.Numero}</Td>
                                    <Td className="tdEdit">{el.Compañia}</Td>
                                    <Td className="tdEdit">{el.Nombre}</Td>
                                    <Td className="tdEdit">{el.Patente}</Td>
                                    <Td className="tdEdit">{el.Marca}</Td>
                                    <Td className="tdEdit">{el.direccion}</Td>
                                    <Td className="tdEdit">{el.localidad}</Td>
                                    <Td className="tdEdit">{el.celular}</Td>
                                    <Td className="tdEdit">{!el.estado ? "Sin Completar" : el.estado}</Td>
                                    <Td className="tdEdit">{el.perito}</Td>
                                    <Td className="tdEdit">{!el.notas ? "Sin Completar" : el.notas}</Td>
                                    <Td className="tdEdit"><button>Editar</button></Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            }
        </>
    )


}
export default TableResponsive;

