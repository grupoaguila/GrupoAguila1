import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import AddModals from "../../Modals/AddModals";
import Select from "react-select";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  day,
  month,
  years,
  location,
  customStyles,
  customStyles1,
} from "./utilsFunctions";

import "./AddCases.css";
import { useRef } from "react";

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
      <div className="ButtonBack">
        <Link to="/user">
          <Button variant="secondary">Volver</Button>
        </Link>
      </div>

      <div className="addCasosH2">
        <h2>AÑADIR CASOS</h2>
      </div>

      <Form className="mainFormContainer">
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

        <div className="vencimientoContainer">
          {/* Vencimiento */}
          <Form.Group controlId="exampleForm.ControlInput1">
            <div className="vencimientoLabel">
              <Form.Label>Vencimiento</Form.Label>
            </div>
            <div className="fechaCompletaContainer">
              <Select
                onChange={handleSelect}                
                name={"day"}
                options={day}
                placeholder="Día"
                hideSelectedOptions={true}
                className="selectAddCases"
              />

              <Select
                onChange={handleSelect}
                name={"month"}
                options={month}
                placeholder="Mes"
                className="selectAddCases"
              />

              <Select
                onChange={handleSelect}
                name={"year"}
                options={years}
                placeholder="Año"
                className="selectAddCases"
              />
            </div>
          </Form.Group>
        </div>

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

          <div className="localidadLabel">
            <Form.Label>Localidad </Form.Label>
          </div>
          <Select
            onChange={handleSelect}
            name={"localidad"}
            options={location}
            placeholder="Seleccione una Localidad"
            styles={customStyles1}
          />
        </Form.Group>
        <Form.Group>
          <div className="peritoLabel">
            <Form.Label>Perito: </Form.Label>
          </div>
          <Select
            className="lastChildForm"
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
