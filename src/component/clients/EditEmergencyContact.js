import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";

const EditEmergencyContact = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={6} sm={6} xs={12}>
            <h4 className="m-0">Scott Elizabeth</h4>
          </Col>

          <Col lg={6} sm={6} xs={12}>
            <p className="text-right m-0">
              45465453{" "}
              <b>
                <i className="fas fa-circle mr-2 ml-2"></i>Active
              </b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card form-type mt-3">
              <h5 className="pb-2">
                <a href="/client-details" className="theme-color">
                  <i className="fas fa-chevron-left mr-2"></i>
                </a>
                Emergency Contact
              </h5>
              <Form>
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <p>
                      Emergency contact information - 1{" "}
                      <span className="float-right">
                        <u>
                          <a href="#/">
                            <b>Delete</b>
                          </a>
                        </u>
                      </span>
                    </p>
                  </Col>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Fullname</Form.Label>
                      <Form.Control value="Elizabeth" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Relationship</Form.Label>
                      <Form.Control value="Scott" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control value="(272)-343-4343" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Location</Form.Label>
                      <Form.Control value="Neavda" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
                <h5>
                  <u>
                    <a href="#/" className="theme-color">
                      + Add More
                    </a>
                  </u>
                </h5>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
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

export default EditEmergencyContact;
