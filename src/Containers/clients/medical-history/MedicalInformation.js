import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";

const MedicalInformation = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card social-habits">
              <h5 className="pb-2">
                <a href="#/client-details" className="theme-color">
                  <i className="fas fa-chevron-left mr-2"></i>
                </a>
                Medical Information
              </h5>
              <p className="m-0">Have you ever had or do you currently have:</p>
              <hr />
              <Form>
                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Control placeholder="Search" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Asthma or Wheezing with exercise?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Pneumothorax (Collapsed Lung)?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Shortness of Breath?"
                        className="text-dark"
                        checked
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Lung Disease?"
                        className="text-dark"
                        checked
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Blackouts or Fainting? (Full/Partial Loss of Consciousness)"
                        className="text-dark"
                        checked
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Kidney Disease?"
                        className="text-dark"
                        checked
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Epilepsy, Seizures, or Convulsions?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Nerve / Muscle Disease?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Muscular Dystrophy?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Rheumatoid Arthritis?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Arthritis?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Osteoporosis or other bone disorder?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Multiple Sclerosis?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Thyroid Disease (Hyper- or Hypothyroidism)"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Ulcers?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Gout?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Gout?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Cancer, tumor growth?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Cyst?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Clotting Disorders (Blood clot, Deep Vein 
                            Thrombosis (DVT))?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Meningitis?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Migraines or recurrent Headaches?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Fibromyalgia?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Infection?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Stroke or TIA (Transient Ischemic Attack)?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Heart Attack or Angina?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Heart Disease?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Irregular Heart Beat?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Heart Murmur?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Heart Surgery?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Blood Vessel Surgery?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Chest Pain or pressure?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Pacemaker?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="High Blood Pressure?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Low Blood Pressure?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="High Cholesterol?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Bleeding o rother blood disorder?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Blood Transfusion?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Hepatitis?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="HIV / AIDS?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Sickle Cell Disease?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Diabetes?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Heat Stroke / Exhaustion?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Unexpected Weight Change?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Poor Eyesight?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Hearing Loss?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Unusual fatigue at rest / with light activity?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Depression?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Hernia?"
                        className="text-dark"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Any other illnesses or conditions not listed above?"
                        className="text-dark"
                        checked
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Control
                        as="textarea"
                        rows="3"
                        placeholder="Enter you comments here"
                      />
                    </Form.Group>
                  </Col>
                </Row>

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

export default MedicalInformation;
