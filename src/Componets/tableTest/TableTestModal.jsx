
import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './TableTestModal.css';

 const TableTestModal = (props) => {


//form state
const [editFormInput, setEditFormInput] = React.useState({
    Vencimiento:"",
    Numero:"",
    Compañia:"",
    Nombre:"",
    Patente:"",
    Marca:"",
    direccion:"",
    localidad:"",
    celular:"",
    estado:"",
    perito:"",
    notas:""
});

    function handleOnChange(e){
        e.preventDefault();
        setEditFormInput({...editFormInput,[e.target.name]:e.target.value});
        
    }
    
    function handleSubmit(e){
        e.preventDefault();
        console.log('este es el handle Submit',editFormInput)
        //hacer lógica del SUBMIT aca. 
    }


    return (


        <Modal show={props.show} onHide={props.close}>
            <Modal.Header closeButton>
                <Modal.Title>Edite la informacion del siniestro </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Control
                        type="text"
                        placeholder={`Vencimiento: ${props.caseData[0]?.Vencimiento}`}
                        name = "Vencimiento"
                        value={editFormInput.Vencimiento}
                        onChange={handleOnChange}
                    />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Denuncia: ${props.caseData[0]?.Numero}`}
                        name = "Numero"
                        value={editFormInput.Numero}
                        onChange={handleOnChange}
                        />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Compañía: ${props.caseData[0]?.Compañia}`} 
                        name = "Compañia"
                        value={editFormInput.Compañia}
                        onChange={handleOnChange}
                        />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Nombre Completo: ${props.caseData[0]?.Nombre}`} 
                        name = "Nombre"
                        value={editFormInput.Nombre}
                        onChange={handleOnChange}
                        />
                    <br />
                    <Form.Control
                        type="text" 
                        placeholder={`Patente: ${props.caseData[0]?.Patente}`} 
                        name = "Patente"
                        value={editFormInput.Patente}
                        onChange={handleOnChange}
                        />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Marca: ${props.caseData[0]?.Marca}`} 
                        name = "Marca"
                        value={editFormInput.Marca}
                        onChange={handleOnChange}
                        />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Dirección: ${props.caseData[0]?.direccion}`} 
                        name = "direccion"
                        value={editFormInput.direccion}
                        onChange={handleOnChange}
                        
                        />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Localidad: ${props.caseData[0]?.localidad}`} 
                        name = "localidad"
                        value={editFormInput.localidad}
                        onChange={handleOnChange}
                        />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Teléfono: ${props.caseData[0]?.celular}`} 
                        name = "celular"
                        value={editFormInput.celular}
                        onChange={handleOnChange}
                        />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Estado del Caso: ${props.caseData[0]?.estado}`} 
                        name = "estado"
                        value={editFormInput.estado}
                        onChange={handleOnChange}
                        />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Perito Asignado: ${props.caseData[0]?.perito} `} 
                        name = "perito"
                        value={editFormInput.perito}
                        onChange={handleOnChange}
                        />
                    <br />
                    <Form.Control
                        type="text"
                        placeholder={`Notas: ${props.caseData[0]?.notas}`} 
                        name = "notas"
                        value={editFormInput.notas}
                        onChange={handleOnChange}
                        />
                    <br />


                    <Button variant="secondary" className="closeBtn" onClick={props.close}>
                        Cerrar
                    </Button>
                    <Button variant="success"  className="submitBtn" type="submit">
                        Guardar
                    </Button>
                </Form>
                
            </Modal.Body>

        </Modal>


    )
}
export default TableTestModal;