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
import "../TableTestModal.css";

//Alert notifications
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import AddModals from "../../../Modals/AddModals";

function DeleteCase(props) {
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
            notas:caseData?.notas,
            taller:caseData?.taller
        })
  },[props])
  /* console.log("caseData", caseData); */

  
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
    //======= VARIABLES ==================
  let cases = {
    Vencimiento: editFormInput.Vencimiento, 
    Numero: editFormInput.Numero, //num de denuncia
    Compañia: editFormInput.Compañia?.split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.toLowerCase().slice(1))
      .join(" "),
    Nombre: editFormInput.Nombre?.split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.toLowerCase().slice(1))
      .join(" "),
    Patente: editFormInput.Patente?.toLocaleUpperCase(),
    Marca: editFormInput.Marca?.split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.toLowerCase().slice(1))
      .join(" "),
    direccion: editFormInput.direccion?.split(" ")
    .map((el) => el.charAt(0).toUpperCase() + el.toLowerCase().slice(1))
    .join(" "), 
    localidad: editFormInput.localidad,
    celular: editFormInput.celular,
    estado: editFormInput.estado,
    perito: editFormInput.perito,
    notas: editFormInput.notas,
    taller: editFormInput.taller
  };
let cases1=Object.values(cases);
// console.log('cases1', cases1);
let body = [
  `Número de Denuncia : ${cases1[1]}`,
  `Compañia: ${cases1[2]}`,
  `Vencimiento: ${cases1[0]}`,
  `Marca: ${cases1[5]}`,
  `Patente: ${cases1[4]}`,
  `Numero de Contacto: ${cases1[8]}`,
  `Apellido y Nombre: ${cases1[3]}`,
  `Dirección: ${cases1[6]}`,
  `Localidad: ${cases1[7]}`,
  `Perito Asignado: ${cases1[10]}`,
  `Notas: ${cases1[11]}`,
  `Repuestos/Taller: ${cases1[12]}`,
   
];

  //========== HANDLE SUBMIT =======
  /* console.log('editForm', editFormInput) */
  async function handleSubmit(e) {
    e.preventDefault();
   
    cases['bandera']='true'
    try {
      let edit = await updateCases(props.caseData[0].id, cases);
       
      //  console.log('caseData[0].id',caseData[0].id)
      let peritoWhatsap = peritos.find(
        (el) => el.nombre === editFormInput.perito
      );
      
      

      //it closes the Modal after submit
      props.close()

      //this commando triggers the alert! 
      NotificationManager.success('Bien Hecho!', 'Campo eliminado!',3000);  
      //actualiza el estado con el cambio
      props.actualizar()
      
      let body = {
           token: "ppxsdnbulhx73mnv",
          to: `${peritoWhatsap.celular}`,
          body: `${peritoWhatsap.nombre} se ha eliminado su caso: 
          N° de denuncia: ${editFormInput.Numero}`,
          priority: "10",
        };
        dispatch(postWhatsapp(body));
         
              props.close();
           
    } catch (error) {console.log(e)}
  }

  
  return (
    <>
      
      <Modal show={props.show}>
        <Modal.Header closeButton onHide={props.close}>
          <Modal.Title>¿Esta seguro de eliminar el siguiente caso? </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={handleSubmit}>
        {`Denuncia N°: ${props.caseData[0]?.Numero}`}
        <br />
        {`Nombre Completo: ${props.caseData[0]?.Nombre}`}
        <br />
        {`Patente: ${props.caseData[0]?.Patente}`}
        <br />
        {`Marca: ${props.caseData[0]?.Marca}`}
        <br />
        {`Perito: ${props.caseData[0]?.perito}`}
        <br/>         

            <Button
              variant="secondary"
              className="closeBtn"
              onClick={props.close}
            >
              Cerrar
            </Button>

            <Button
              variant="primary"
              className="closeBtn"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Confirmar
            </Button>


            {/* <Button variant="success" className="submitBtn" type="submit">
              Guardar
            </Button> */}
            {/* <AddModals 
            body={body}
            agreeBotton={handleSubmit}
            nameBottom={"Confirmar"}
            title={"Si la información es correcta, guarde los cambios"}
            type={"submit"}
            titleBotton={"Guardar"}
            // style={style}
            /> */}
          </Form>
        </Modal.Body>
      </Modal>

      {/* alert after submit */}
        <NotificationContainer/>  
      
    </>
  );
}

export default DeleteCase