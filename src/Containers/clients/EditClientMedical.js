import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../PageLayout/SidebarNav/Sidebar";
import ClientLeftMenu from "./ClientLeftMenu";

const EditClientMedical = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <ClientLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card form-type">
              <h5 className="pb-2">Client Medical Information</h5>
              <Form>
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Allergies</Form.Label>
                      <Form.Control as="textarea" rows={3} value="Potato" />
                    </Form.Group>
                  </Col>

                  <hr />

                  <h5>Medications or Suppliments</h5>

                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Medications or suppliments</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        value="Inhailer - Asthama"
                      />
                    </Form.Group>
                  </Col>

                  <hr />

                  <h5>General Medical History</h5>

                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Personal Medical History</Form.Label>
                      <Form.Control as="textarea" rows={2} value="Asthama" />
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Prior Major Issues</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        value="R. ankle sprain (2019)"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} xs={12}>
                    <p>
                      Prior Major Illness
                      <span className="float-right">
                        <u>
                          <a href="#/" className="theme-color">
                            <b>+Add</b>
                          </a>
                        </u>
                      </span>
                    </p>
                    <p>
                      Head Injury History
                      <span className="float-right">
                        <u>
                          <a href="#/" className="theme-color">
                            <b>+Add</b>
                          </a>
                        </u>
                      </span>
                    </p>
                    <p>
                      Fracture History
                      <span className="float-right">
                        <u>
                          <a href="#/" className="theme-color">
                            <b>+Add</b>
                          </a>
                        </u>
                      </span>
                    </p>
                    <p>
                      Surgery History
                      <span className="float-right">
                        <u>
                          <a href="#/" className="theme-color">
                            <b>+Add</b>
                          </a>
                        </u>
                      </span>
                    </p>
                    <p>
                      Personal Habits
                      <span className="float-right">
                        <u>
                          <a href="#/" className="theme-color">
                            <b>+Add</b>
                          </a>
                        </u>
                      </span>
                    </p>
                    <p>
                      Female
                      <span className="float-right">
                        <u>
                          <a href="#/" className="theme-color">
                            <b>+Add</b>
                          </a>
                        </u>
                      </span>
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <Button className="btn btn-theme-white pl-2 pr-2">
                        Cancel
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

export default EditClientMedical;
