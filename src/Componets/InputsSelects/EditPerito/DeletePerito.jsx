import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Select from "react-select"
import { useDispatch, useSelector } from "react-redux";
import {rol, customStyles, customStyles1} from '../AddCases/utilsFunctions'
import PropTypes from "prop-types";
import { postWhatsapp } from "../../../Store/Actions"; 
import { deletePerito, updatePeritos } from "../../../Controller/llamados";
import "../EditCase/TableTestModal.css"

//Alert notifications
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';



function DeletePerito(props) {
  let peritos = useSelector((state) => state.peritos);
  let namePeritos1 = useSelector((state) => state.peritosByName);
  // let namePeritos = namePeritos1.map((e) => {
  // return { value: e, label: e }; 
// });
  const caseData = props.caseData[0];

 
  const  [editFormInput, setEditFormInput] = useState({});
  const dispatch = useDispatch();
useEffect(()=>{
      setEditFormInput({
          nombre:caseData?.nombre,
          email:caseData?.email,
          celular:caseData?.celular,
          rol:caseData?.rol,
      })
},[props])



//========== HANDLE CHANGE =======
// function handleOnChange(e) {
//     e.preventDefault();
//     if (e.target.value !== 'undefined') {
//         setEditFormInput({ ...editFormInput, [e.target.name]: e.target.value });
//         console.log('******************el estadoo****',editFormInput)
//       }
//       else{
//           let  nameL = e.target.name
//           setEditFormInput({...editFormInput,[e.target.name]:caseData[e.target.name]})
//       }
//   }
//========== HANDLE SELECT =======
  // let handleSelect = (value, action) => {
   
  //   if (action.name === "rol") {
  //     setEditFormInput({
  //       ...editFormInput,
  //       rol: value.value,
  //     });
  //   }
    

  // };
  // let newPerito = {
  //   nombre: editFormInput.nombre?.split(' ')
  //     .map((el) => el.charAt(0).toUpperCase() + el.toLowerCase().slice(1))
  //     .join(" "),
  //   celular: editFormInput.celular,
  //   email: editFormInput.email,
  //   rol: editFormInput.rol,
  // };
 

  //========== HANDLE SUBMIT =======
  /* console.log('editForm', editFormInput) */
  async function handleSubmit(e) {
    e.preventDefault();
    console.log('idPerito',props.caseData[0].id )
    
    try {
     
      let edit = await deletePerito(props.caseData[0].id);
      
    
    //  console.log('caseData[0].id',caseData[0].id)
    let peritoWhatsap = peritos.find(
      (el) => el.nombre === editFormInput.perito
      );
      
      // setTimeout(()=>{ props.actualizar()}, 2500)
     
      
      
      //it closes the Modal after submit
      props.close()
      
      //this commando triggers the alert! 
      NotificationManager.success('Bien Hecho!', 'Perito eliminado!',3000);  
      //actualiza el estado con el cambio
      props.actualizar()
      
      // let body = {
      //   token: "ppxsdnbulhx73mnv",
      //   to: `${peritoWhatsap.celular}`,
      //   body: `${peritoWhatsap.nombre} sus datos han sido modificados ${editFormInput.Numero}`,
      //   priority: "10",
      // };
      // dispatch(postWhatsapp(body));
      
      
  } catch (error) {console.log('error de catch',e)}
}


return (
  <>
    
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header closeButton>
        <Modal.Title>¿Seguro de eliminar el siguiente perito?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
         {`Apellido y Nombre: ${props.caseData[0]?.nombre}`}
           
          <br />
          {`Email: ${props.caseData[0]?.email}`}
           
          <br />
          {`N° de contacto: ${props.caseData[0]?.celular}`}
          
          <br />
          
           <Button
            variant="secondary"
            className="closeBtn mt-2" 
            onClick={props.close}
          >
            Cerrar
          </Button>
          <Button variant="success" className="submitBtn mt-2" type="submit">
            Eliminar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>

    {/* alert after submit */}
      <NotificationContainer/>  
    
  </>
);
}

export default DeletePerito