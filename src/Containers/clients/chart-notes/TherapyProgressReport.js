import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Tabs, Tab } from "react-bootstrap";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";

const TherapyProgressReport = () => {
  const [key, setKey] = useState("Synopsis");
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
              <h4 className="mt-3 text-white">Scott Elizabeth <span className="float-right"><small>45465453 <span className="ml-2"><i className="fas fa-circle mr-2"></i>Active</span></small></span></h4>
            <div className="appointment-card">
              <h5 className="mb-3">
                <a href="#/medical-record-listing" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Therapy Progress Report
              </h5>
              <hr />
              <Form>
                <Row>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Patient*" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Injury Date" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Surgery Date" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Physician Name" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Therapist Name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} sm={12} xs={12} className="form-type">
                    <Form.Group className="mb-3">
                      <Form.Label>Diagnosis Linked To</Form.Label>
                      <Form.Select>
                        <option>
                          Full Body - Core / Legs / Shoulders- 11-Aug-2020
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 therapy-progress-tabs"
                  >
                    <Tab eventKey="Synopsis" title="Synopsis">
                      <Form.Group className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="5"
                          placeholder="Synopsis"
                        />
                      </Form.Group>
                    </Tab>
                    <Tab eventKey="Impression" title="Impression">
                      <Form.Group className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="5"
                          placeholder="Synopsis"
                        />
                      </Form.Group>
                    </Tab>
                    <Tab eventKey="Plan" title="Plan">
                      <Form.Group className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="5"
                          placeholder="Synopsis"
                        />
                      </Form.Group>
                    </Tab>
                  </Tabs>
                </Row>

                <Row className="mb-3">
                  <Col lg="2">
                    <Button className="btn btn-theme w-100">ROM</Button>
                  </Col>
                  <Col lg="2">
                    <Form.Group className="bg-light rounded p-2 table-check-form">
                      <Form.Check type="checkbox" label="WNL" checked />
                    </Form.Group>
                  </Col>
                  <Col lg="2">
                    <Form.Group className="bg-light rounded p-2 table-check-form">
                      <Form.Check type="checkbox" label="Abnormal" checked />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Control
                      className="table-check-form-control"
                      placeholder="Add your Comments"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg="2">
                    <Button className="btn btn-theme w-100">Palpation</Button>
                  </Col>
                  <Col lg="2">
                    <Form.Group className="bg-light rounded p-2 table-check-form">
                      <Form.Check type="checkbox" label="WNL" />
                    </Form.Group>
                  </Col>
                  <Col lg="2">
                    <Form.Group className="bg-light rounded p-2 table-check-form">
                      <Form.Check type="checkbox" label="Tenderness" />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Control
                      className="table-check-form-control"
                      placeholder="Add your Comments"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg="2">
                    <Button className="btn btn-theme w-100">Joint Mobility</Button>
                  </Col>
                  <Col lg="2">
                    <Form.Group className="bg-light rounded p-2 table-check-form">
                      <Form.Check type="checkbox" label="WNL" />
                    </Form.Group>
                  </Col>
                  <Col lg="2">
                    <Form.Group className="bg-light rounded p-2 table-check-form">
                      <Form.Check type="checkbox" label="Abnormal" />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Control
                      className="table-check-form-control"
                      placeholder="Add your Comments"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg="2">
                    <Button className="btn btn-theme w-100">Strength</Button>
                  </Col>
                  <Col lg="2">
                    <Form.Group className="bg-light rounded p-2 table-check-form">
                      <Form.Check type="checkbox" label="WNL" />
                    </Form.Group>
                  </Col>
                  <Col lg="2">
                    <Form.Group className="bg-light rounded p-2 table-check-form">
                      <Form.Check type="checkbox" label="Deficient" />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Control
                      className="table-check-form-control"
                      placeholder="Add your Comments"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg="2">
                    <Button className="btn btn-theme w-100">Swelling</Button>
                  </Col>
                  <Col lg="2">
                    <Form.Group className="bg-light rounded p-2 table-check-form">
                      <Form.Check type="checkbox" label="No" />
                    </Form.Group>
                  </Col>
                  <Col lg="2">
                    <Form.Group className="bg-light rounded p-2 table-check-form">
                      <Form.Check type="checkbox" label="Yes" />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Control
                      className="table-check-form-control"
                      placeholder="Add your Comments"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg="2">
                    <Button className="btn btn-theme w-100">Function</Button>
                  </Col>
                  <Col lg="2">
                    <Form.Group className="bg-light rounded p-2 table-check-form">
                      <Form.Check type="checkbox" label="WNL" />
                    </Form.Group>
                  </Col>
                  <Col lg="2">
                    <Form.Group className="bg-light rounded p-2 table-check-form">
                      <Form.Check type="checkbox" label="Abnormal" />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Control
                      className="table-check-form-control"
                      placeholder="Add your Comments"
                    />
                  </Col>
                </Row>


                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <Button className="btn btn-theme-white pl-2 pr-2 ml-0">
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

export default TherapyProgressReport;
