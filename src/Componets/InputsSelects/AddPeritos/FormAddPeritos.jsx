import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import AddModals from "../../Modals/AddModals";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { rol, customStyles } from "../AddCases/utilsFunctions";
import Select from "react-select";
import './AddPeritos.css'
function FormAddPeritos({
  handleChange,
  handleSubmit,
  handleSelect,
  post,
  perito,
  errors,
}) {




  let style = { display: "flex", alignItems: "flex-end" };
  return (
    <div>

     <div className="ButtonBack">
        <Link to="/user">
          <Button variant="secondary">Volver</Button>
        </Link>
      </div>

      <div className="addPeritoH2">
        <h2>AÑADIR PERITO</h2>
      </div>

      <Form className="mainFormContainer">
        {/* Apellido y Nombre */}
        <FloatingLabel
          controlId="floatingInput"
          label="Apellido y Nombre"
          className="mb-3"
          //   required
        >
          <Form.Control
            onChange={handleChange}
            type="text"
            value={post.nombre}
            placeholder="name@example.com"
            name={"nombre"}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email"
          className="mb-3"
          required
        >
          <Form.Control
            onChange={handleChange}
            type="email"
            name="email"
            pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
            value={post.email}
            placeholder="name@example.com"
          />
          {errors.email && (
            <p style={{ color: "red", fontWeight: "bold" }}>{errors.email}</p>
          )}
        </FloatingLabel>
        {/* Compañía */}
        <FloatingLabel
          controlId="floatingInput"
          label="celular"
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
  

        <Form.Group>
            <div className="rolLabel">
              <Form.Label>Rol: </Form.Label>
            </div>

          <Select
            className="lastChildForm"
            onChange={handleSelect}
            name={"rol"}
            options={rol}
            placeholder="Seleccione un rol"
            styles={customStyles}
          />
          
        </Form.Group>

        <AddModals
          body={perito}
          agreeBotton={handleSubmit}
          nameBottom={"Confirmar"}
          title={"Verifique si la información del perito es correcta"}
          type={"submit"}
          titleBotton={"Guardar"}
          style={style}
        />
      </Form>
    </div>
  );
}

export default FormAddPeritos;
