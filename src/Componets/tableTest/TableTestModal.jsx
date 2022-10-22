import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./TableTestModal.css";
import { editCasos, updateCases } from "../../Controller/llamados";
import AlertsPersonal from "../Alerts/AlertsPersonal";
import { postWhatsapp } from "../../Store/Actions";
import { useDispatch, useSelector } from "react-redux";

const TableTestModal = (props) => {
    let peritos = useSelector((state) => state.peritos);
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

  //form state
  const [alert, setAlert] = useState(false);
  function handleOnChange(e) {
      e.preventDefault();
      console.log('e.target.name', e.target.name)
      console.log('e.target.value', e.target.value)
      if (e.target.value !== undefined) {
          setEditFormInput({ ...editFormInput, [e.target.name]: e.target.value });
        }
        else{
            let  nameL = e.target.name
            setEditFormInput({...editFormInput,[e.target.name]:caseData[e.target.name]})
        }
    }
    console.log("editForm", editFormInput);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("este es el handle Submit", editFormInput);
    try {
      let edit = await updateCases(props.caseData[0].id, editFormInput);
      console.log("edit", edit);
      console.log("props.caseData[0].id", props.caseData[0].id);
      //  console.log('caseData[0].id',caseData[0].id)
      let peritoWhatsap = peritos.find(
        (el) => el.nombre === editFormInput.perito
      );
      console.log("peritoWhatsap", peritoWhatsap);
      let body = {
        token: "l7sc1htbsdfju8ty",
        to: `${peritoWhatsap.celular}`,
        body: `${peritoWhatsap.nombre} se ha modificado su caso ${editFormInput.Numero}`,
        priority: "10",
      };
      dispatch(postWhatsapp(body));
      setAlert(true);
    //   setTimeout(() => {
    //     props.close();
    //   }, 4000); 
    } catch (error) {}
  }

  return (
    <div>
      {alert && (
        <AlertsPersonal type="success" message="Su caso ha sido modificado" />
      )}
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
            <Form.Control
              type="text"
              placeholder={`Localidad: ${props.caseData[0]?.localidad}`}
              name="localidad"
              value={editFormInput.localidad}
              onChange={handleOnChange}
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
            <Form.Control
              type="text"
              placeholder={`Estado del Caso: ${props.caseData[0]?.estado}`}
              name="estado"
              value={editFormInput.estado}
              onChange={handleOnChange}
            />
            <br />
            <Form.Control
              type="text"
              placeholder={`Perito Asignado: ${props.caseData[0]?.perito} `}
              name="perito"
              value={editFormInput.perito}
              onChange={handleOnChange}
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
    </div>
  );
};
export default TableTestModal;
