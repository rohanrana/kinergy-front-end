import React from "react";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  DropdownButton,
  useAccordionButton,
  Dropdown,
  Accordion,
  Form,
} from "react-bootstrap";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";
import Sign from "../../../image/sign.png";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "#ffffff", color: "#000000", border: "unset" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
const AddTreatmentIntervention = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card">
              <h5 className="mb-3">
                <a
                  href="#/medical-record-main-page"
                  className="theme-color mr-2"
                >
                  <i className="fas fa-chevron-left"></i>
                </a>
                Add Treatment Intervention
                <span className="float-right">
                  <ButtonGroup className="rounded">
                    <Button className="btn btn-theme-white">
                      Select Action
                    </Button>
                    <DropdownButton className="p-0 rounded-0" title="">
                      <Dropdown.Item eventKey="1">
                        View Prior Notes
                      </Dropdown.Item>
                      <Dropdown.Item href="#/add-consussion-file" eventKey="2">
                        Add Concussion file
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="3">Transfer File</Dropdown.Item>
                      <Dropdown.Item href="#/importing-or-new" eventKey="4">
                        Import S.O.A.P Notes
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="5">
                        Add Dry Needling File
                      </Dropdown.Item>
                      <Dropdown.Item href="#/add-document" eventKey="6">Add Document</Dropdown.Item>
                    </DropdownButton>
                  </ButtonGroup>
                </span>
              </h5>
              <Row>
                <Col lg={4} sm={4} xs={12}>
                  <p>Intervention Linked to :</p>
                </Col>

                <Col lg={8} sm={8} xs={12}>
                  <p>
                    <b>Full Body - Core / Legs / Shoulders- 11-Aug-2020</b>
                  </p>
                </Col>
              </Row>

              <Row>
                <Col lg={4} sm={4} xs={12}>
                  <p>Date Of Intervention :</p>
                </Col>

                <Col lg={8} sm={8} xs={12}>
                  <p>
                    <b>09-12-2021</b>
                  </p>
                </Col>
              </Row>

              <Row>
                <Col lg={4} sm={4} xs={12}>
                  <p>Case Physician :</p>
                </Col>

                <Col lg={8} sm={8} xs={12}>
                  <p>
                    <b>Terill Lobo</b>
                  </p>
                </Col>
              </Row>

              <Row>
                <Col lg={4} sm={4} xs={12}>
                  <p>Restrictions And Limitations :</p>
                </Col>

                <Col lg={8} sm={8} xs={12}>
                  <p>
                    <b>None</b>
                  </p>
                </Col>
              </Row>

              <hr />
              <h5 className="mb-3">
                S.O.A.P Notes
                <span className="float-right">
                  <a href="#/exercise-log2" className="btn btn-theme mt-0">
                    Add Exercise Log
                  </a>
                </span>
              </h5>

              <Form>
                <Accordion defaultActiveKey="0" className="accordian-mt-40">
                  <p>
                    <b>Subjective (S)</b>
                    <span className="float-right">
                      <CustomToggle eventKey="0">
                        <b>+ Add</b>
                      </CustomToggle>
                    </span>
                  </p>
                  <Accordion.Collapse eventKey="0" className="mb-3">
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        rows="5"
                        placeholder="Please enter your notes here..."
                      />
                    </Form.Group>
                  </Accordion.Collapse>

                  <p>
                    <b>Objective (O)</b>
                    <span className="float-right">
                      <CustomToggle eventKey="1">
                        <b>+ Add</b>
                      </CustomToggle>
                    </span>
                  </p>
                  <Accordion.Collapse eventKey="1" className="mb-3">
                    <Accordion
                      defaultActiveKey="11"
                      className="accordian-mt-40"
                    >
                      <p>
                        Observation :
                        <span className="float-right">
                          <CustomToggle eventKey="11">+ Add</CustomToggle>
                        </span>
                      </p>
                      <Accordion.Collapse eventKey="11" className="mb-3">
                        <Form.Group>
                          <Form.Control placeholder="Observation" />
                        </Form.Group>
                      </Accordion.Collapse>

                      <p>
                        Range Of Motion and strength :
                        <span className="float-right">
                          <CustomToggle eventKey="12">+ Add</CustomToggle>
                        </span>
                      </p>
                      <Accordion.Collapse eventKey="12" className="mb-3">
                        <Form.Group>
                          <Form.Control placeholder="Range of Motion and Strenght" />
                        </Form.Group>
                      </Accordion.Collapse>

                      <p>
                        Special Test :
                        <span className="float-right">
                          <CustomToggle eventKey="13">+ Add</CustomToggle>
                        </span>
                      </p>
                      <Accordion.Collapse eventKey="13" className="mb-3">
                        <Form.Group>
                          <Form.Control placeholder="Special Test" />
                        </Form.Group>
                      </Accordion.Collapse>

                      <p>
                        Palpation
                        <span className="float-right">
                          <CustomToggle eventKey="14">+ Add</CustomToggle>
                        </span>
                      </p>
                      <Accordion.Collapse eventKey="14" className="mb-3">
                        <Form.Group>
                          <Form.Control placeholder="Palpation" />
                        </Form.Group>
                      </Accordion.Collapse>

                      <p>
                        Functional Tests
                        <span className="float-right">
                          <CustomToggle eventKey="15">+ Add</CustomToggle>
                        </span>
                      </p>
                      <Accordion.Collapse eventKey="15" className="mb-3">
                        <Form.Group>
                          <Form.Control placeholder="Functional Tests" />
                        </Form.Group>
                      </Accordion.Collapse>

                      <p>
                        Treatment
                        <span className="float-right">
                          <CustomToggle eventKey="16">+ Add</CustomToggle>
                        </span>
                      </p>
                      <Accordion.Collapse eventKey="16" className="mb-3">
                        <Form.Group>
                          <Form.Control placeholder="Treatment" />
                        </Form.Group>
                      </Accordion.Collapse>

                      <p>
                        Response to Treatment
                        <span className="float-right">
                          <CustomToggle eventKey="17">+ Add</CustomToggle>
                        </span>
                      </p>
                      <Accordion.Collapse eventKey="17" className="mb-3">
                        <Form.Group>
                          <Form.Control placeholder="Response to Treatment" />
                        </Form.Group>
                      </Accordion.Collapse>
                    </Accordion>
                  </Accordion.Collapse>

                  <p>
                    <b>Assessment (A)</b>
                    <span className="float-right">
                      <CustomToggle eventKey="2">
                        <b>+ Add</b>
                      </CustomToggle>
                    </span>
                  </p>
                  <Accordion.Collapse eventKey="2" className="mb-3">
                    <Accordion
                      defaultActiveKey="21"
                      className="accordian-mt-40"
                    >
                      <p>
                        Medical Diagnosis / ICD 10 Codes :
                        <span className="float-right">
                          <CustomToggle eventKey="21">+ Add</CustomToggle>
                        </span>
                      </p>
                      <Accordion.Collapse eventKey="21" className="mb-3">
                        <Form.Group>
                          <Form.Control placeholder="Meical Diagnosis / ICD 10 Codes" />
                        </Form.Group>
                      </Accordion.Collapse>

                      <p>
                        Index Of Suspicion :
                        <span className="float-right">
                          <CustomToggle eventKey="22">+ Add</CustomToggle>
                        </span>
                      </p>
                      <Accordion.Collapse eventKey="22" className="mb-3">
                        <Form.Group>
                          <Form.Control placeholder="Index of Suspicion" />
                        </Form.Group>
                      </Accordion.Collapse>

                      <p>
                        Surgery Procedure Complete :
                        <span className="float-right">
                          <CustomToggle eventKey="23">+ Add</CustomToggle>
                        </span>
                      </p>
                      <Accordion.Collapse eventKey="23" className="mb-3">
                        <Form.Group>
                          <Form.Control placeholder="Surgery Procedure Complete" />
                        </Form.Group>
                      </Accordion.Collapse>
                    </Accordion>
                  </Accordion.Collapse>

                  <p>
                    <b>Plan (P)</b>
                    <span className="float-right">
                      <CustomToggle eventKey="3">
                        <b>+ Add</b>
                      </CustomToggle>
                    </span>
                  </p>
                  <Accordion.Collapse eventKey="3" className="mb-3">
                    <Accordion
                      defaultActiveKey="31"
                      className="accordian-mt-40"
                    >
                      <p>
                        Plan :
                        <span className="float-right">
                          <CustomToggle eventKey="31">+ Add</CustomToggle>
                        </span>
                      </p>
                      <Accordion.Collapse eventKey="31" className="mb-3">
                        <Form.Group>
                          <Form.Control placeholder="Plan" />
                        </Form.Group>
                      </Accordion.Collapse>

                      <p>
                        MD Recommendations :
                        <span className="float-right">
                          <CustomToggle eventKey="32">+ Add</CustomToggle>
                        </span>
                      </p>
                      <Accordion.Collapse eventKey="32" className="mb-3">
                        <Form.Group>
                          <Form.Control placeholder="MD Recommendations" />
                        </Form.Group>
                      </Accordion.Collapse>

                      <p>
                        Education :
                        <span className="float-right">
                          <CustomToggle eventKey="33">+ Add</CustomToggle>
                        </span>
                      </p>
                      <Accordion.Collapse eventKey="33" className="mb-3">
                        <Form.Group>
                          <Form.Control placeholder="Education" />
                        </Form.Group>
                      </Accordion.Collapse>

                      <p>
                        Treatment Goals :
                        <span className="float-right">
                          <CustomToggle eventKey="34">+ Add</CustomToggle>
                        </span>
                      </p>
                      <Accordion.Collapse eventKey="34" className="mb-3">
                        <Form.Group>
                          <Form.Control placeholder="Treatment Goals" />
                        </Form.Group>
                      </Accordion.Collapse>
                    </Accordion>
                  </Accordion.Collapse>
                </Accordion>
              </Form>

              <Row>
                <Col lg={3} sm={5} xs={12}>
                  <div className="border p-2 rounded bg-white text-center">
                    <img src={Sign} alt="signature" />
                    <br />
                    <Button className="btn btn-theme">Sign</Button>
                  </div>
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddTreatmentIntervention;
