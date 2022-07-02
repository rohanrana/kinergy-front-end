import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../PageLayout/SidebarNav/Sidebar";

const UpdatePassword = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <h5>Settings</h5>
            <Form>
              <div className="appointment-card">
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <h6 className="mb-3">Update Password</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod <br /> tempor incididunt ut labore et
                      dolore magna aliqua.{" "}
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label className="mb-0">Current Password</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="mb-0">New Password</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="mb-0">Confirm Password</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <div className="rule-of-password">
                      <h6>Rules for passwords</h6>
                      <p>
                        To create a new password, you have to meet all the
                        following requirements:
                      </p>
                      <p className="m-0">. Minimum 8 character</p>
                      <p className="m-0">. At least one special character</p>
                      <p className="m-0">. At least one number</p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="appointment-card">
                <h6>Communication Preferences</h6>
                <Row>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Automated Reminder</Form.Label>
                      <Form.Select>
                        <option value="1" selected>
                          SMS / Email
                        </option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Appointment Cofirmation</Form.Label>
                      <Form.Select>
                        <option value="1" selected>
                          Email
                        </option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <h6 className="mt-3">Two-factor Authentication</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et <br /> dolore magna
                  aliqua.
                </p>
                <hr />

                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <h6>E-mail</h6>
                    <p>Verification codes are sent by email</p>
                  </Col>
                  <Col lg={4} sm={4} xs={12} className="text-right">
                    <Form.Group className="mb-0">
                      <Form.Control placeholder="Email Address" />
                    </Form.Group>
                  </Col>
                </Row>

                <hr />

                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <h6>Voice or text message</h6>
                    <p>Verification codes are sent by text message</p>
                  </Col>
                  <Col lg={4} sm={4} xs={12} className="text-right">
                    <Form.Group className="mb-0">
                      <Form.Control placeholder="Phone Number" />
                    </Form.Group>
                  </Col>
                </Row>
              </div>

              <Row>
                <Col Col lg={12} sm={12} xs={12}>
                  <div className="text-center form-action-btn mt-3 mb-5">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdatePassword;
