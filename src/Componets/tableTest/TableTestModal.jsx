
import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


 const TableTestModal = (props) => {

 console.log('props que llegan al modal',props)
    return (


        <Modal show={props.show} onHide={props.close}>
            <Modal.Header closeButton>
                <Modal.Title>Edite la informacion del siniestro </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        type="text"
                        placeholder={`Vencimiento: ${props.caseData[0]?.Vencimiento}`}
                    />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Denuncia: ${props.caseData[0]?.Numero}`} />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Compañía: ${props.caseData[0]?.Compañia}`} />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Nombre Completo: ${props.caseData[0]?.Nombre}`} />
                    <br />
                    <Form.Control
                        type="text" placeholder={`Patente: ${props.caseData[0]?.Patente}`} />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Marca: ${props.caseData[0]?.Marca}`} />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Dirección: ${props.caseData[0]?.direccion}`} />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Localidad: ${props.caseData[0]?.localidad}`} />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Teléfono: ${props.caseData[0]?.celular}`} />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Estado del Caso: ${props.caseData[0]?.estado}`} />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Perito Asignado: ${props.caseData[0]?.perito} `} />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Notas: ${props.caseData[0]?.notas}`} />
                    <br />


                    <Button variant="secondary" onClick={props.close}>
                        Cerrar
                    </Button>
                    <Button variant="success" onClick={()=> (alert('aca va el submit'))}>
                        Guardar
                    </Button>
                </Form>
                
            </Modal.Body>

        </Modal>


    )
}
export default TableTestModal;