import React from "react";
import { Container, Row, Col, Form, Tabs, Tab } from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";
import ClientLeftMenu from "./ClientLeftMenu";
import { Link } from 'react-router-dom';

const ClientDetails = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <ClientLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <Tabs defaultActiveKey="first" className="">
              <Tab eventKey="first" title="Client Details">
                <div className="appointment-card">
                  <h5 className="pb-2">
                    Personal Details{" "}
                    <span className="float-right">
                      <Link
                        to="/edit-details"
                        className="btn btn-theme m-0 btn-sm pl-2 pr-2"
                      >
                        Edit
                      </Link>
                    </span>
                  </h5>

                  <hr />

                  <div className="client-details-row">
                    <div className="client-details-col">
                      <h6>Last Name</h6>
                      <p>Elizabeth</p>
                    </div>

                    <div className="client-details-col">
                      <h6>First Name</h6>
                      <p>Scott</p>
                    </div>

                    <div className="client-details-col">
                      <h6>Date of Birth</h6>
                      <p>15-12-2021</p>
                    </div>

                    <div className="client-details-col">
                      <h6>Gender</h6>
                      <p>Male</p>
                    </div>

                    <div className="client-details-col">
                      <h6>Nick Name / Preerred Name</h6>
                      <p>Scotty</p>
                    </div>

                    <div className="client-details-col">
                      <h6>SSN</h6>
                      <p>KSL101,9623</p>
                    </div>
                  </div>

                  <hr />
                  <h5 className="mb-3">Contact Information</h5>
                  <div className="client-details-row">
                    <div className="client-details-col">
                      <h6>Phone 1</h6>
                      <p>702-544-2132</p>
                    </div>
                    <div className="client-details-col">
                      <h6>Phone 2</h6>
                      <p>702-544-2132</p>
                    </div>
                    <div className="client-details-col">
                      <h6>Email</h6>
                      <p>Scott@gmail.com</p>
                    </div>

                    <div className="client-details-col">
                      <h6>Address</h6>
                      <p>
                        #101,9623-18A Avenue Las Vegas, NV 89123 (547)-354-6514
                      </p>
                    </div>
                  </div>

                  <hr />

                  <h5 className="mb-3">Communication Preferences</h5>
                  <div className="client-details-row">
                    <div className="client-details-col">
                      <h6>Automated Reminder</h6>
                      <p>SMS / Email</p>
                    </div>
                    <div className="client-details-col">
                      <h6>Appointment Confirmation</h6>
                      <p>Email</p>
                    </div>
                  </div>

                  <hr />

                  <h5 className="mb-3">Work Information</h5>

                  <div className="client-details-row">
                    <div className="client-details-col">
                      <h6>Occupation</h6>
                      <p>Technical Engineer</p>
                    </div>
                    <div className="client-details-col">
                      <h6>Employment Status</h6>
                      <p>Permanent</p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="second" title="Emergency Contacts">
                <div className="appointment-card">
                  <h5 className="pb-2">
                    Emergency Contact Information
                    <span className="float-right">
                      <a
                        href="#/edit-emergency-contact"
                        className="btn btn-theme m-0 btn-sm pl-2 pr-2"
                      >
                        Edit
                      </a>
                    </span>
                  </h5>

                  <hr />

                  <h6 class="main-h mb-3">Contact 1</h6>
                  <Row>
                    <Col lg={2}>
                      <h6 className="mb-1">Name</h6>
                      <p className="m-0">Steven Zack</p>
                    </Col>

                    <Col lg={2}>
                      <h6 className="mb-1">Relationship</h6>
                      <p className="m-0">Cousin</p>
                    </Col>

                    <Col lg={2}>
                      <h6 className="mb-1">Phone Type</h6>
                      <p className="m-0">(517)-234-6546</p>
                    </Col>

                    <Col lg={2}>
                      <h6 className="mb-1">Phone Number </h6>
                      <p className="m-0">(517)-234-6546</p>
                    </Col>

                    <Col lg={2}>
                      <h6 className="mb-1">Alt Phone Number</h6>
                      <p className="m-0">(517)-234-6546</p>
                    </Col>

                    <Col lg={2}>
                      <h6 className="mb-1">Language</h6>
                      <p className="m-0">English</p>
                    </Col>
                  </Row>

                  <hr />

                  <h6 class="main-h mb-3">Contact 2</h6>
                  <Row>
                    <Col lg={2}>
                      <h6 className="mb-1">Name</h6>
                      <p className="m-0">Ken Zackerry</p>
                    </Col>

                    <Col lg={2}>
                      <h6 className="mb-1">Relationship</h6>
                      <p className="m-0">Cousin</p>
                    </Col>

                    <Col lg={2}>
                      <h6 className="mb-1">Phone Type</h6>
                      <p className="m-0">(517)-234-6546</p>
                    </Col>

                    <Col lg={2}>
                      <h6 className="mb-1">Phone Number </h6>
                      <p className="m-0">(517)-234-6546</p>
                    </Col>

                    <Col lg={2}>
                      <h6 className="mb-1">Alt Phone Number</h6>
                      <p className="m-0">(517)-234-6546</p>
                    </Col>

                    <Col lg={2}>
                      <h6 className="mb-1">Language</h6>
                      <p className="m-0">English</p>
                    </Col>
                  </Row>
                </div>
              </Tab>
              <Tab eventKey="third" title="Medical History Questionaire">
                <div className="appointment-card">
                  <h5 className="pb-2">
                    Social Habits
                    <span className="float-right">
                      <a
                        href="#/social-habits"
                        className="btn btn-theme m-0 btn-sm pl-2 pr-2"
                      >
                        Edit
                      </a>
                    </span>
                  </h5>

                  <hr />

                  <p>
                    Smoke / Chew Tobacco?{" "}
                    <span className="bg-light float-right rounded pl-2 pr-2">
                      8pac / day
                    </span>
                  </p>
                  <p>
                    Drink Alcohol?{" "}
                    <span className="bg-light float-right rounded pl-2 pr-2">
                      8drinks / day
                    </span>
                  </p>
                </div>

                <div className="appointment-card">
                  <h5 className="pb-2">
                    Medical Provider Information
                    <span className="float-right">
                      <a
                        href="#/"
                        className="btn btn-theme m-0 btn-sm pl-2 pr-2"
                      >
                        Edit
                      </a>
                    </span>
                  </h5>

                  <hr />
                  <Row>
                    <Col lg={3} sm={6} xs={12}>
                      <h6>Family Doctor Name</h6>
                      <p>Elizabeth Rosy</p>
                    </Col>

                    <Col lg={3} sm={6} xs={12}>
                      <h6>Primary Phone</h6>
                      <p>(272)-343-4343</p>
                    </Col>

                    <Col lg={3} sm={6} xs={12}>
                      <h6>Referring Doctor</h6>
                      <p>Rodey Elizabeth</p>
                    </Col>

                    <Col lg={3} sm={6} xs={12}>
                      <h6>Primary Phone</h6>
                      <p>(272)-343-4343</p>
                    </Col>
                  </Row>
                </div>

                <div className="appointment-card">
                  <h5 className="pb-2">
                    Medical Information
                    <span className="float-right">
                      <a
                        href="#/medical-information"
                        className="btn btn-theme m-0 btn-sm pl-2 pr-2"
                      >
                        Edit
                      </a>
                    </span>
                  </h5>

                  <hr />
                  <Form>
                    <Row>
                      <Col lg={6} sm={6} xs={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check
                            type="checkbox"
                            label="Shortness of Breath"
                            className="text-dark"
                            checked
                            disabled
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={6} sm={6} xs={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check
                            type="checkbox"
                            label="Lung Disease"
                            className="text-dark"
                            checked
                            disabled
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={6} sm={6} xs={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check
                            type="checkbox"
                            label="Blackouts or Fainting (Full/Partial Loss of Consciousness)"
                            className="text-dark"
                            checked
                            disabled
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={6} sm={6} xs={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check
                            type="checkbox"
                            label="Kidney Disease"
                            className="text-dark"
                            checked
                            disabled
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </div>

                <div className="appointment-card">
                  <h5 className="pb-2">
                    Females Only
                    <span className="float-right">
                      <a
                        href="#/females-only"
                        className="btn btn-theme m-0 btn-sm pl-2 pr-2"
                      >
                        Edit
                      </a>
                    </span>
                  </h5>

                  <hr />

                  <p>
                    Pregnant or attempting to get pregnant?{" "}
                    <span className="float-right">Yes</span>
                  </p>
                  <p>
                    Nursing? <span className="float-right">Yes</span>
                  </p>
                </div>

                <div className="appointment-card">
                  <h5 className="pb-2">
                    Surgical History
                    <span className="float-right">
                      <a
                        href="#/surgical-history"
                        className="btn btn-theme m-0 btn-sm pl-2 pr-2"
                      >
                        Edit
                      </a>
                    </span>
                  </h5>

                  <hr />
                  <Form>
                    <Row>
                      <Col lg={4} sm={6} xs={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check
                            type="checkbox"
                            label="Appendix Surgery"
                            className="text-dark"
                            checked
                            disabled
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={4} sm={6} xs={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check
                            type="checkbox"
                            label="Brain Surgery"
                            className="text-dark"
                            checked
                            disabled
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={4} sm={6} xs={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check
                            type="checkbox"
                            label="Hernia Repair"
                            className="text-dark"
                            checked
                            disabled
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={4} sm={6} xs={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check
                            type="checkbox"
                            label="Colon Surgery"
                            className="text-dark"
                            checked
                            disabled
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={4} sm={6} xs={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check
                            type="checkbox"
                            label="Valve Replacement"
                            className="text-dark"
                            checked
                            disabled
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={4} sm={6} xs={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check
                            type="checkbox"
                            label="Hysterectomy"
                            className="text-dark"
                            checked
                            disabled
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </div>

                <div className="appointment-card">
                  <h5 className="pb-2">
                    Musculoskeletal History
                    <span className="float-right">
                      <a
                        href="#/musculoskeletal-history"
                        className="btn btn-theme m-0 btn-sm pl-2 pr-2"
                      >
                        Edit
                      </a>
                    </span>
                  </h5>

                  <hr />

                  <p>
                    Injured your head? (Concussion){" "}
                    <span className="float-right">Yes</span>
                  </p>
                  <p>
                    Injured your face? <span className="float-right">Yes</span>
                  </p>
                  <p>
                    Injured your neck? <span className="float-right">Yes</span>
                  </p>
                  <p>
                    Injured your shoulder?{" "}
                    <span className="float-right">Yes</span>
                  </p>
                  <p>
                    Injured an upper arm?{" "}
                    <span className="float-right">Yes</span>
                  </p>
                  <p>
                    Injured an elbow? <span className="float-right">Yes</span>
                  </p>
                  <p>
                    Injured a forearm? <span className="float-right">Yes</span>
                  </p>
                  <p>
                    Injured a wrist? <span className="float-right">Yes</span>
                  </p>
                  <p>
                    Injured a hand? <span className="float-right">Yes</span>
                  </p>
                  <p>
                    Injured a finger? <span className="float-right">Yes</span>
                  </p>
                  <p>
                    Injured your abdomen?{" "}
                    <span className="float-right">Yes</span>
                  </p>
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ClientDetails;
