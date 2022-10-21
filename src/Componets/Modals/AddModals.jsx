import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

function AddModals({
  details,
  title,
  body, 
  agreeBotton,
  titleBotton,
  nameBottom,
  type,
  style,
}) {
  const [show, setShow] = useState(false);
  console.log('title',title)
  console.log('body',body)
  console.log('titleBotton',  titleBotton)
  console.log('titleBotton',  titleBotton)
  let bodyA;
  if (body) {
    bodyA = Object.values(body);
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const handleSubmit=functionBottonAgree()
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {nameBottom}
      </Button>
      <div></div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{
          border: "5px solid yellow",
          display: "flex !important",
          alignItems: "flex-end",
        }}
      >
        <div className="Holaaaa">
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ border: "3px solid pink" }}>
            {details && <div>{details}</div>}
            <div style={{ border: "3px solid red" }}>
              {body?.map((el) => {
                return <ol>{el}</ol>;
              })}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={(e) => {
                agreeBotton(e);
                handleClose(e);
              }}
              variant="secondary"
              type={type}
            >
              {titleBotton}
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

// render(<AddModals />);
export default AddModals;
AddModals.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  details: PropTypes.element,
  title: PropTypes.string.isRequired,
};

AddModals.defaultProps = {
  details: null,
};
