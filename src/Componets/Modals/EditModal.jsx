import React from "react";
import { Modal, Stack, Form, Button } from "react-bootstrap";

function EditModal({
  isModalEditar,
  setIsModalEditar,
  actualizarEstadoCaso,
  casoEditar,
  setCasoEditar,
  usuario,
}) {
  function editarCasoModal() {
    //obtener infor del formulario
    const Compañia = document.getElementById("Compañia").value;
    const Marca = document.getElementById("Marca").value;
    const Nombre = document.getElementById("Nombre").value;
    const Numero = document.getElementById("Numero").value;
    const Patente = document.getElementById("Patente").value;
    const Vencimiento = document.getElementById("Vencimiento").value;
    const celular = document.getElementById("celular").value;
    const direccion = document.getElementById("direccion").value;
    const estado = document.getElementById("estado").value;
    const localidad = document.getElementById("localidad").value;
    const notas = document.getElementById("notas").value;
    const perito = document.getElementById("perito").value;
    // enviar informacion a firebase
    const infoProducto = {
      Compañia,
      Marca,
      Nombre,
      Numero,
      Patente,
      Vencimiento,
      celular,
      direccion,
      estado,
      localidad,
      notas,
      perito,
    };
    casoEditar(infoProducto, usuario.email);
    // cerrar modal
    setCasoEditar(null);
    actualizarEstadoCaso();
    setIsModalEditar(false);
  }

  const [casoEstado, setCasoEstado] = React.useState({
    ...casoEditar,
  });

  return (
    <Modal
      show={isModalEditar}
      onHide={() => {
        setIsModalEditar(false);
        setCasoEditar(null);
      }}
    >
      <Modal.Header>
        <Modal.Title>Editar Caso</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Control
              id="Compañia"
              placeholder="Compañia"
              type="text"
              className="mb-1"
              value={casoEstado?.Compañia}
              onChange={(e) =>
                setCasoEstado({
                  ...casoEstado,
                  Compañia: e.target.value,
                })
              }
            /> 
            <Form.Control
              id="Marca"
              placeholder="Marca"
              type="text"
              className="mb-1"
              value={casoEstado?.Marca}
              onChange={(e) =>
                setCasoEstado({
                  ...casoEstado,
                  Marca: e.target.value,
                })
              }
            />
            <Form.Control
              id="Nombre"
              placeholder="Nombre"
              type="text"
              className="mb-1"
              value={casoEstado?.Nombre}
              onChange={(e) =>
                setCasoEstado({
                  ...casoEstado,
                  Nombre: e.target.value,
                })
              }
            />
            <Form.Control
              id="Numero"
              placeholder="Numero"
              type="number"
              className="mb-1"
              value={casoEstado?.Numero}
              onChange={(e) =>
                setCasoEstado({
                  ...casoEstado,
                  Numero: e.target.value,
                })
              }
            />
            <Form.Control
              id="Patente"
              placeholder="Patente"
              type="text"
              className="mb-1"
              value={casoEstado?.Patente}
              onChange={(e) =>
                setCasoEstado({
                  ...casoEstado,
                  Patente: e.target.value,
                })
              }
            />
            <Form.Control
              id="Vencimiento"
              placeholder="Vencimiento"
              type="text"
              className="mb-1"
              value={casoEstado?.Vencimiento}
              onChange={(e) =>
                setCasoEstado({
                  ...casoEstado,
                  Vencimiento: e.target.value,
                })
              }
            />
            <Form.Control
              id="celular"
              placeholder="celular"
              type="text"
              className="mb-1"
              value={casoEstado?.celular}
              onChange={(e) =>
                setCasoEstado({
                  ...casoEstado,
                  celular: e.target.value,
                })
              }
            />
            <Form.Control
              id="direccion"
              placeholder="direccion"
              type="text"
              className="mb-1"
              value={casoEstado?.direccion}
              onChange={(e) =>
                setCasoEstado({
                  ...casoEstado,
                  direccion: e.target.value,
                })
              }
            />
            <Form.Control
              id="estado"
              placeholder="estado"
              type="text"
              className="mb-1"
              value={casoEstado?.estado}
              onChange={(e) =>
                setCasoEstado({
                  ...casoEstado,
                  estado: e.target.value,
                })
              }
            />
            <Form.Control
              id="localidad"
              placeholder="localidad"
              type="text"
              className="mb-1"
              value={casoEstado?.localidad}
              onChange={(e) =>
                setCasoEstado({
                  ...casoEstado,
                  localidad: e.target.value,
                })
              }
            />
            <Form.Control
              id="notas"
              placeholder="notas"
              type="text"
              className="mb-1"
              value={casoEstado?.notas}
              onChange={(e) =>
                setCasoEstado({
                  ...casoEstado,
                  notas: e.target.value,
                })
              }
            />
            <Form.Control
              id="perito"
              placeholder="perito"
              type="text"
              className="mb-1"
              value={casoEstado?.perito}
              onChange={(e) =>
                setCasoEstado({
                  ...casoEstado,
                  perito: e.target.value,
                })
              }
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setIsModalEditar(false);
            setCasoEditar(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarCasoModal}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
