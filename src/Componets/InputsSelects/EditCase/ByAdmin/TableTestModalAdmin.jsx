import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { editCasos, updateCases } from "../../../../Controller/llamados";
import { postWhatsapp } from "../../../../Store/Actions";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select"
import {stateCase, location, customStyles, customStyles1} from '../../AddCases/utilsFunctions';
import PropTypes from "prop-types";
import AddModals from "../../../Modals/AddModals";
import "../TableTestModal.css";

//Alert notifications
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const TableTestModalAdmin = (props) => {
    let peritos = useSelector((state) => state.peritos);
    let namePeritos1 = useSelector((state) => state.peritosByName);
    let namePeritos = namePeritos1.map((e) => {
    return { value: e, label: e }; 
  });
  let userAdmin //lo tomo del local storage y busco el nombre en peritos con un find lo traigo
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
  // console.log("caseData", caseData);

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
  //==========  =======
  let cases1 = Object.values(editFormInput);
  
  let body;
  if (
    cases1[0] !== "" &&
    cases1[1] !== "" &&
    cases1[2] !== "" &&
    cases1[3] !== "" &&
    cases1[4] !== "" &&
    cases1[5] !== "" &&
    cases1[6] !== "" &&
    cases1[7] !== "" &&
    cases1[8] !== "" &&
    cases1[10] !== ""
  ) {
    body = [
      `Número de Denuncia : ${cases1[1]}`,
      `Apellido y Nombre: ${cases1[3]}`,      
      `Numero de Contacto: ${cases1[8]}`,
      `Estado: ${cases1[9]}`,
      `Notas: ${cases1[11]}`,
      `Perito Asignado: ${cases1[10]}`,
    ];
  } else {
    body = ["Faltan completar Datos"];
  }

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
    
      let body = {
        token: "l7sc1htbsdfju8ty",
        to: `${peritoWhatsap.celular}`,
        body: `${peritoWhatsap.nombre} se ha modificado su caso ${editFormInput.Numero}`,
        priority: "10",
      };
      dispatch(postWhatsapp(body));
 
    //   setTimeout(() => {
    //     props.close();
    //   }, 4000); 

    //it closes the Modal after submit
    props.close()
     //actualiza el estado con el cambio
     props.actualizar()
      

    //this commando triggers the alert! 
    NotificationManager.success('Bien Hecho!', 'Campo actualizado!',3000); 


    } catch (error) {}
  }

  return (
    <>
      
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Edite la informacion de la pericia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {userAdmin!==caseData?.perito ? 
          <div>
            No puede modificar casos que no le fueron asignados
          </div>:


          <Form onSubmit={handleSubmit}>
            
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
            <AddModals
            body={body}
            agreeBotton={handleSubmit}
            nameBottom={"Confirmar"}
            title={"Si la información es correcta, guarde los cambios"}
            type={"submit"}
            titleBotton={"Guardar"}
            // style={style}
            />
          </Form>
          }
        </Modal.Body>
      </Modal>
      {/* alert after submit */}
      <NotificationContainer/> 
    </>
  );
};
export default TableTestModalAdmin;
