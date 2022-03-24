import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";
import ClientLeftMenu from "./ClientLeftMenu";

const EditDetails = () => {
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
              <h5 className="pb-2">
                <a href="/client-details" className="theme-color">
                  <i className="fas fa-chevron-left mr-2"></i>
                </a>
                Client Details
              </h5>
              <Form>
                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control value="Elizabeth" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control value="Scott" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>D.O.B</Form.Label>
                      <Form.Control value="06-08-1999" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control value="Male" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control value="scott@gmail.com" />
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
                      <Form.Label>D.O.B</Form.Label>
                      <Form.Control value="06-08-1999" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
                <h5>Address</h5>

                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Address Line</Form.Label>
                      <Form.Control value="#101,9623-18A Avenue" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Select defaultValue="1">
                        <option value="1">Nevada</option>
                        <option value="2">Option</option>
                        <option value="3">Option</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue="1">
                        <option value="1">Las Vegas</option>
                        <option value="2">Option</option>
                        <option value="3">Option</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control value="89123" />
                    </Form.Group>
                  </Col>
                </Row>

                <hr />
                <h5>Account</h5>
                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Membership Type</Form.Label>
                      <Form.Select defaultValue="1">
                        <option value="1">Premium</option>
                        <option value="2">Option</option>
                        <option value="3">Option</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Expires On</Form.Label>
                      <Form.Control value="06-02-2021" />
                    </Form.Group>
                  </Col>
                </Row>

                <hr />
                <h5>Communication Preferences</h5>
                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Automated Reminder</Form.Label>
                      <Form.Select defaultValue="1">
                        <option value="1">SMS / Email</option>
                        <option value="2">Option</option>
                        <option value="3">Option</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Appointment Confirmation</Form.Label>
                      <Form.Select defaultValue="1">
                        <option value="1">Email</option>
                        <option value="2">Option</option>
                        <option value="3">Option</option>
                      </Form.Select>
                    </Form.Group>
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

export default EditDetails;
