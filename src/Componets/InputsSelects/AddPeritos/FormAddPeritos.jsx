import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import AddModals from "../../Modals/AddModals";
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'



function FormAddPeritos({
  handleChange,
  handleSubmit,
  post,
  perito,
  errors 
}) {
  let style = { display: "flex", alignItems: "flex-end" };
  return (
    <div>
      <Link to="/user">
      <Button variant="secondary" style={{display:"flex"}}>
        Volver
      </Button>
      </Link>
      <div style={{ paddingRight: "30%", paddingLeft: "25%" }}>
        <h2>AÑADIR PERITO</h2>
        
      </div>
      
      
      <Form
        style={{ paddingRight: "30%", paddingLeft: "25%", marginTop: "5%" }}
      >
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
          {errors.email && <p style={{color:'red', fontWeight:'bold'}}>{errors.email}</p>}
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
        {/* Vencimiento */}

        <Form.Group>
          <FloatingLabel
            controlId="floatingInput"
            label="Rol"
            className="mb-3"
            required
          >
            <Form.Control
              placeholder="name@example.com"
              value={post.rol}
              onChange={handleChange}
              name="rol"
            />
          </FloatingLabel>
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
