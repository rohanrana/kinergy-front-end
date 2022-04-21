import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";

const BookAppointment = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card">
              <h5 className="mb-3">
                <a href="#/view-notes" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Book Appointment
              </h5>
              <hr />
              <Form>

                <Row>
                  

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Search Client(name or phone)" />
                    </Form.Group>
                  </Col>


                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select>
                        <option>Select Department</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select>
                        <option>Select Doctor</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
               
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Appointment Date and time" />
                    </Form.Group>
                  </Col>

                </Row>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <Button className="btn btn-theme-white pl-2 pr-2 ml-0">
                        Back
                      </Button>

                      <Button className="btn btn-theme pl-2 pr-2 ml-2">
                        Save
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookAppointment;
