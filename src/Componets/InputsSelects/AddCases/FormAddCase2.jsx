import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import AddModals from "../../Modals/AddModals";
import Select from "react-select";
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {
  day,
  month,
  years,
  location,
  customStyles,
  customStyles1,
} from "./utilsFunctions";

function FormAddCase2({
  handleChange,
  handleSubmit,
  handleSelect,
  post,
  namePeritos,
  cases,
}) {
  
  let style = { display: "flex", alignItems: "flex-end" };
  return (
    <div>
      <Link to="/user">
      <Button variant="secondary" style={{display:"flex"}}>
        Volver
      </Button>
      </Link>
      <div style={{ paddingRight: "30%", paddingLeft: "25%", color:"white" }}>
        <h2 style={{color:"black"}}>AÑADIR CASOS</h2>
      </div>
      
      <Form
        style={{ paddingRight: "30%", paddingLeft: "25%", marginTop: "5%", }}
      >
        {/* Número de Denuncia */}
        <FloatingLabel
          controlId="floatingInput"
          label="Número de Denuncia"
          className="mb-3"
          required
        >
          <Form.Control
            type="text"
            value={post.Numero}
            onChange={handleChange}
            placeholder="name@example.com"
            name={"Numero"}
          />
        </FloatingLabel>
        {/* Compañía */}
        <FloatingLabel
          controlId="floatingInput"
          label="Compañía"
          className="mb-3"
          required
        >
          <Form.Control
            type="text"
            value={post.Compañia}
            onChange={handleChange}
            placeholder="name@example.com"
            name="Compañia"
          />
        </FloatingLabel>
        {/* Vencimiento */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label style={{backgroundColor:"rgb(225,225,225, 0.5"}}>Vencimiento</Form.Label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              
            }}
          >
            <Form.Label>Día: </Form.Label>
            <div style={{ width: "80px", textAlign: "left",  backgroundColor:"rgb(225,225,225, 0.5" }}>
              <Select
                onChange={handleSelect}
                name={"day"}
                options={day}
                placeholder="Día"
                styles={customStyles}
                hideSelectedOptions={true}
                
              />
            </div>
            <Form.Label>Mes: </Form.Label>
            <div style={{ width: "80px", textAlign: "left",  backgroundColor:"rgb(225,225,225, 0.5" }}>
              <Select
                onChange={handleSelect}
                name={"month"}
                options={month}
                placeholder="Mes"
                styles={customStyles}
               
              />
            </div>

            <Form.Label>Año: </Form.Label>
            <div style={{ width: "95px", textAlign: "left",  backgroundColor:"rgb(225,225,225, 0.5" }}>
              <Select
                onChange={handleSelect}
                name={"year"}
                options={years}
                placeholder="Año"
                styles={customStyles}
              />
              
            </div>
          </div>
        </Form.Group>
        <Form.Group>
          <FloatingLabel
            controlId="floatingInput"
            label="Marca/Modelo"
            className="mb-3"
            required
          >
            <Form.Control
              placeholder="name@example.com"
              value={post.Marca}
              onChange={handleChange}
              name="Marca"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Patente"
            className="mb-3"
            required
          >
            <Form.Control
              type="text"
              value={post.Patente}
              onChange={handleChange}
              placeholder="name@example.com"
              name="Patente"
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel
            controlId="floatingInput"
            label="Número de contacto"
            className="mb-3"
            required
          >
            <Form.Control
              type="text"
              value={post.celular}
              onChange={handleChange}
              placeholder="name@example.com"
              name="celular"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Apellido y Nombre"
            className="mb-3"
            required
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              value={post.Nombre}
              onChange={handleChange}
              name="Nombre"
              pattern="[a-zA-Z ]{2,30}"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Dirección"
            className="mb-3"
            required
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              name="direccion"
              value={post.direccion}
              onChange={handleChange}
            />
          </FloatingLabel>

          <Form.Label style={{ backgroundColor:"rgb(225,225,225, 0.5"}}>Localidad </Form.Label>
          <Select
            onChange={handleSelect}
            name={"localidad"}
            options={location}
            placeholder="Seleccione una Localidad"
            styles={customStyles1}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{ backgroundColor:"rgb(225,225,225, 0.5"}}>Perito: </Form.Label>
          <Select
            onChange={handleSelect}
            name={"peritos"}
            options={namePeritos}
            placeholder="Seleccione una perito"
            styles={customStyles1}
          />
        </Form.Group>
     
        <AddModals
          body={cases}
          agreeBotton={handleSubmit}
          nameBottom={"Confirmar"}
          title={"Si la información es correcta, guarde el caso"}
          type={"submit"}
          titleBotton={"Guardar"}
          style={style}
        />
      </Form>
     
    </div>
  );
}

export default FormAddCase2;
