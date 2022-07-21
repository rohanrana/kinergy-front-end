import React from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Run from "../../images/service2.png";

export function ServiceCategoryDetailModal(props) {
  let { serviceCategory } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-5 text-center">
        <a className="close-modal-btn" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </a>
        <img src={Run} alt={Run} height="180" />
        <h4 className="mt-3">About</h4>
        <p>{serviceCategory.description}</p>
      </Modal.Body>
    </Modal>
  );
}
