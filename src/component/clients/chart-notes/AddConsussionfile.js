import React from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";

const AddConsussionfile = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card">
              <h5 className="mb-3">
                <a
                  href="#/add-treatment-intervention"
                  className="theme-color mr-2"
                >
                  <i className="fas fa-chevron-left"></i>
                </a>
                Add Consussion file
                
              </h5>
              <hr />
              <p>Add the Following</p>

              <Row>
                  <Col lg={6} sm={6} xs={12}>
                      <p className="border-bottom pb-2">SCAT Concussion Assessment <span className="float-right"><i className="fas fa-chevron-right"></i></span></p>
                      <p className="border-bottom pb-2">Symptom Score Sheet <span className="float-right"><i className="fas fa-chevron-right"></i></span></p>
                      <p className="border-bottom pb-2">Neurological Screen <span className="float-right"><i className="fas fa-chevron-right"></i></span></p>
                  </Col>
              </Row>
            
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddConsussionfile;
