import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Select from "react-select"
import { editCasos, updateCases } from "../../../../Controller/llamados";
import { useDispatch, useSelector } from "react-redux";
import {stateCase, location, customStyles, customStyles1} from '../../AddCases/utilsFunctions';
import PropTypes from "prop-types";
import { postWhatsapp } from "../../../../Store/Actions";
import "./TableTestModal.css";

//Alert notifications
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const TableTestModal = (props) => {
    let peritos = useSelector((state) => state.peritos);
    let namePeritos1 = useSelector((state) => state.peritosByName);
    let namePeritos = namePeritos1.map((e) => {
    return { value: e, label: e }; 
  });
    const caseData = props.caseData[0];
    const  [editFormInput, setEditFormInput] = useState({});
    const dispatch = useDispatch();
  useEffect(()=>{
        setEditFormInput({
            Vencimiento:caseData?.Vencimiento,
            Numero:caseData?.Numero,
            Compañia:caseData?.Compañia,
            Nombre:caseData?.Nombre,
            Patente:caseData?.Patente,
            Marca:caseData?.Marca,
            direccion:caseData?.direccion,
            localidad:caseData?.localidad,
            celular:caseData?.celular,
            estado:caseData?.estado,
            perito:caseData?.perito,
            notas:caseData?.notas
        })
  },[props])
  console.log("caseData", caseData);

  
  //========== HANDLE CHANGE =======
  function handleOnChange(e) {
      e.preventDefault();
      if (e.target.value !== undefined) {
          setEditFormInput({ ...editFormInput, [e.target.name]: e.target.value });
        }
        else{
            let  nameL = e.target.name
            setEditFormInput({...editFormInput,[e.target.name]:caseData[e.target.name]})
        }
    }
//========== HANDLE SELECT =======
    let handleSelect = (value, action) => {
      if (action.name === "estado") {
        setEditFormInput({
          ...editFormInput,
          estado: value.value,
        });
      }
  
      if (action.name === "localidad") {
        setEditFormInput({
          ...editFormInput,
          localidad: value.value,
        });
      }
      if (action.name === "peritos") {
        setEditFormInput({
          ...editFormInput,
          perito: value.value,
        });
      }
    };
  //========== HANDLE SUBMIT =======
  console.log('editForm', editFormInput)
  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      let edit = await updateCases(props.caseData[0].id, editFormInput);
      
  
      //  console.log('caseData[0].id',caseData[0].id)
      let peritoWhatsap = peritos.find(
        (el) => el.nombre === editFormInput.perito
      );
      
      

      //it closes the Modal after submit
      props.close()

      //this commando triggers the alert! 
      NotificationManager.success('Bien Hecho!', 'Campo actualizado!',3000);  
      props.actulizar()
      
      // let body = {
        //   token: "l7sc1htbsdfju8ty",
        //   to: `${peritoWhatsap.celular}`,
        //   body: `${peritoWhatsap.nombre} se ha modificado su caso ${editFormInput.Numero}`,
        //   priority: "10",
        // };
        // dispatch(postWhatsapp(body));
        //   setTimeout(() => {
          //     props.close();
          //   }, 4000); 
    } catch (error) {console.log(e)}
  }

  
  return (
    <>
      
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Edite la informacion del siniestro </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder={`Vencimiento: ${props.caseData[0]?.Vencimiento}`}
              name="Vencimiento"
              value={editFormInput.Vencimiento}
              onChange={handleOnChange}
            />
            <br />
            <Form.Control
              type="text"
              placeholder={`Denuncia: ${props.caseData[0]?.Numero}`}
              name="Numero"
              value={editFormInput.Numero}
              onChange={handleOnChange}
            />
            <br />
            <Form.Control
              type="text"
              placeholder={`Compañía: ${props.caseData[0]?.Compañia}`}
              name="Compañia"
              value={editFormInput.Compañia}
              onChange={handleOnChange}
            />
            <br />
            <Form.Control
              type="text"
              placeholder={`Nombre Completo: ${props.caseData[0]?.Nombre}`}
              name="Nombre"
              value={editFormInput.Nombre}
              onChange={handleOnChange}
            />
            <br />
            <Form.Control
              type="text"
              placeholder={`Patente: ${props.caseData[0]?.Patente}`}
              name="Patente"
              value={editFormInput.Patente}
              onChange={handleOnChange}
            />
            <br />
            <Form.Control
              type="text"
              placeholder={`Marca: ${props.caseData[0]?.Marca}`}
              name="Marca"
              value={editFormInput.Marca}
              onChange={handleOnChange}
            />
            <br />
            <Form.Control
              type="text"
              placeholder={`Dirección: ${props.caseData[0]?.direccion}`}
              name="direccion"
              value={editFormInput.direccion}
              onChange={handleOnChange}
            />
            <br />
            <Select
            onChange={handleSelect}
            name={"localidad"}
            options={location}
            placeholder="Seleccione una localidad"
            styles={customStyles1}
            defaultValue={{ label:caseData?.localidad, value:caseData?.localidad }}
          />
            <br />
            <Form.Control
              type="text"
              placeholder={`Teléfono: ${props.caseData[0]?.celular}`}
              name="celular"
              value={editFormInput.celular}
              onChange={handleOnChange}
            />
            <br />
            <Select
                onChange={handleSelect}
                name={"estado"}
                options={stateCase}
                placeholder="Estado"
                styles={customStyles}
                hideSelectedOptions={true}
                defaultValue={{ label:caseData?.estado, value:caseData?.estado }}
              />
            <br />
            <Select
            onChange={handleSelect}
            name={"peritos"}
            options={namePeritos}
            defaultValue={{ label:caseData?.perito, value:caseData?.perito }}
            // placeholder="Seleccione un perito"
            styles={customStyles1}
          />
            <br />
            <Form.Control
              type="text"
              placeholder={`Notas: ${props.caseData[0]?.notas}`}
              name="notas"
              value={editFormInput.notas}
              onChange={handleOnChange}
            />
            <br />

            <Button
              variant="secondary"
              className="closeBtn"
              onClick={props.close}
            >
              Cerrar
            </Button>
            <Button variant="success" className="submitBtn" type="submit">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* alert after submit */}
        <NotificationContainer/>  
      
    </>
  );
};
export default TableTestModal;
