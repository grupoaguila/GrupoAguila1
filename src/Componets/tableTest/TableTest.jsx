import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './tabletest.css';
import { TbEdit } from "react-icons/tb";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function TableResponsive() {
    //modal state and functions
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //cases from Redux (store)
    const cases = useSelector((state) => state.cases)

    //Modal Form data
    const [caseData, setCaseData] = React.useState([]);

    //when Edit button is clicked
    function showModalEdit(id) {
        setCaseData(cases.length > 0 && cases.filter(el => el.id === id))
        handleShow()
    }

   






    return (
        <>
            {cases?.length === 0 ?
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
                                // Patente is a notnull field meaning that an empty register won't be allowed.

                                el.Patente &&
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
                                    <Td className="tdEdit"><div className="editBtn" onClick={() => showModalEdit(el.id)}><TbEdit /></div></Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            }

            {/*Modal  */}
            {
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edite la informacion del siniestro </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Control 
                            type="text" 
                            placeholder={`Vencimiento: ${caseData[0]?.Vencimiento}`}
                             />
                            <br />
                            <Form.Control 
                            type="text" 
                            placeholder={`Denuncia: ${caseData[0]?.Numero}`} />
                            <br />
                            <Form.Control 
                            type="text" 
                            placeholder={`Compañía: ${caseData[0]?.Compañia}`} />
                            <br />
                            <Form.Control 
                            type="text" 
                            placeholder={`Nombre Completo: ${caseData[0]?.Nombre}`} />
                            <br />
                            <Form.Control 
                            type="text" placeholder={`Patente: ${caseData[0]?.Patente}`} />
                            <br />
                            <Form.Control 
                            type="text" 
                            placeholder={`Marca: ${caseData[0]?.Marca}`} />
                            <br />
                            <Form.Control 
                            type="text" 
                            placeholder={`Dirección: ${caseData[0]?.direccion}`} />
                            <br />
                            <Form.Control 
                            type="text" 
                            placeholder={`Localidad: ${caseData[0]?.localidad}`} />
                            <br />
                            <Form.Control 
                            type="text" 
                            placeholder={`Teléfono: ${caseData[0]?.celular}`} />
                            <br />
                            <Form.Control 
                            type="text" 
                            placeholder={`Estado del Caso: ${caseData[0]?.estado}`} />
                            <br />
                            <Form.Control 
                            type="text" 
                            placeholder={`Perito Asignado: ${caseData[0]?.perito} `} />
                            <br />
                            <Form.Control 
                            type="text" 
                            placeholder={`Notas: ${caseData[0]?.notas}`} />
                            <br />


                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                            <Button variant="success" onClick={handleClose}>
                                Guardar
                            </Button>   
                        </Form>
                    </Modal.Body>

                </Modal>
            }
        </>
    )

}
export default TableResponsive;

