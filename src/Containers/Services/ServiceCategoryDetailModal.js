import React from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Run from "../../images/about2.svg";

export function ServiceCategoryDetailModal(props) {
  let { serviceCategory } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <a className="close-modal-btn" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </a>
        <div className="therapy-modal-top"></div>
        <div className="there-modal-bottom">
        <img src={Run} alt={Run} height="120" className="rounded" />
        <h4 className="mt-3">Therapy Services</h4>
        <p>{serviceCategory.description}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
