import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  ButtonGroup,
  Button,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import Sign from "../../../image/sign.png";

const ViewNotes = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card">
              <ButtonToolbar
                className="justify-content-between mb-3"
                aria-label="Toolbar with Button groups"
              >
                <h5>
                  <a
                    href="#/medical-record-listing"
                    className="mr-2 theme-color"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </a>
                  View S.O.A.P Notes
                </h5>

                <ButtonGroup className="rounded">
                  <Button className="btn btn-theme-white">Select Action</Button>
                  <DropdownButton className="p-0 rounded-0" title="">
                    <Dropdown.Item eventKey="1">
                      Add Concussion File
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                      Add Dry Needling File
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Transfer Chart to
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="4">Add Documents</Dropdown.Item>
                    <Dropdown.Item eventKey="5">Add Exercise Log</Dropdown.Item>
                  </DropdownButton>
                </ButtonGroup>
              </ButtonToolbar>
              <p>
                File Created On : 31 Nov, 2021 | 10:30 AM PDT - LOBO TERILL(ID :
                651651655151)
              </p>
              <p>
                Last Updated On : 31 Nov, 2021 | 10:30 AM PDT - LOBO TERILL(ID :
                651651655151)
              </p>
              <hr />
              <Row>
                <Col lg="4" sm="6" xs="12">
                  <p>Date Of Intervention :</p>
                </Col>
                <Col lg="8" sm="6" xs="12">
                  <p>
                    <b>09-12-2021</b>
                  </p>
                </Col>
              </Row>

              <Row>
                <Col lg="4" sm="6" xs="12">
                  <p>Case Status: </p>
                </Col>
                <Col lg="8" sm="6" xs="12">
                  <p>
                    <b>Open - Under Treatment</b>
                  </p>
                </Col>
              </Row>

              <Row>
                <Col lg="4" sm="6" xs="12">
                  <p>Intervention Linked to :</p>
                </Col>
                <Col lg="8" sm="6" xs="12">
                  <p>
                    <b>Elbow (R) - 12-12-2021</b>
                  </p>
                </Col>
              </Row>

              <Row>
                <Col lg="4" sm="6" xs="12">
                  <p>Case Physician :</p>
                </Col>
                <Col lg="8" sm="6" xs="12">
                  <p>
                    <b>Terill Lobo</b>
                  </p>
                </Col>
              </Row>

              <hr />

              <Row>
                <Col lg={12}>
                  <h4>S.O.A.P Notes</h4>
                  <h6>Subjective (S)</h6>
                  <p>
                    Zachary reports that he is feeling much better since his
                    last treatment. He reports that he has been able to return
                    to playing golf with minimal issues. He reports that after
                    his playing, he is diligent with icing his elbow to make
                    sure that itdoes not flare up. Overall, he is very pleased
                    with how he is doing and looks forward to getting back to
                    playing golf regularly
                  </p>
                  <h6>Objective (O)</h6>
                  <p>
                    Observation : No swelling. No discoloration. Normal carrying
                    angle.
                  </p>

                  <h4>Range of Motion and strength</h4>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <h6 className="main-h">Body part : Shoulder</h6>

                  <Table responsive bordered>
                    <thead className="bg-white">
                      <tr>
                        <th></th>
                        <th colSpan="3">Left Side</th>
                        <th colSpan="3">Right Side</th>
                        <th colSpan="3">Central</th>
                        <th colSpan="4">Bi-Lateral</th>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <th>Movement</th>
                        <th>AROM</th>
                        <th>PROM</th>
                        <th>Strength</th>

                        <th>AROM</th>
                        <th>PROM</th>
                        <th>Strength</th>

                        <th>AROM</th>
                        <th>PROM</th>
                        <th>Strength</th>

                        <th>AROM</th>
                        <th>PROM</th>
                        <th>Strength</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Flexion</td>

                        <td>130</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>130</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>130</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>130</td>
                        <td>0</td>
                        <td>5/5</td>
                        <td>
                          <i className="fas fa-comment-alt"></i>
                        </td>
                      </tr>

                      <tr>
                        <td>Extension</td>

                        <td>0</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>0</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>0</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>0</td>
                        <td>0</td>
                        <td>5/5</td>
                        <td>
                          <i class="fas fa-comment-alt"></i>
                        </td>
                      </tr>

                      <tr>
                        <td>Supination</td>

                        <td>WNL</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>WNL</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>WNL</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>WNL</td>
                        <td>0</td>
                        <td>5/5</td>
                        <td>
                          <i className="fas fa-comment-alt"></i>
                        </td>
                      </tr>

                      <tr>
                        <td>Pronation</td>

                        <td>WNL</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>WNL</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>WNL</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>WNL</td>
                        <td>0</td>
                        <td>5/5</td>
                        <td>
                          <i className="fas fa-comment-alt"></i>
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <h6 className="main-h">Body part : Jaw</h6>

                  <Table responsive bordered>
                    <thead className="bg-white border-0">
                      <tr>
                        <th></th>
                        <th colSpan="3">Left Side</th>
                        <th colSpan="3">Right Side</th>
                        <th colSpan="3">Central</th>
                        <th colSpan="4">Bi-Lateral</th>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <th>Movement</th>
                        <th>AROM</th>
                        <th>PROM</th>
                        <th>Strength</th>

                        <th>AROM</th>
                        <th>PROM</th>
                        <th>Strength</th>

                        <th>AROM</th>
                        <th>PROM</th>
                        <th>Strength</th>

                        <th>AROM</th>
                        <th>PROM</th>
                        <th>Strength</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Protusion</td>

                        <td>0</td>
                        <td>0</td>
                        <td>0</td>

                        <td>0</td>
                        <td>0</td>
                        <td>0</td>

                        <td>130</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>130</td>
                        <td>0</td>
                        <td>5/5</td>
                        <td>
                          <i className="fas fa-comment-alt"></i>
                        </td>
                      </tr>

                      <tr>
                        <td>Retraction</td>

                        <td>0</td>
                        <td>0</td>
                        <td>0</td>

                        <td>0</td>
                        <td>0</td>
                        <td>0</td>

                        <td>0</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>0</td>
                        <td>0</td>
                        <td>5/5</td>
                        <td>
                          <i className="fas fa-comment-alt"></i>
                        </td>
                      </tr>

                      <tr>
                        <td>Elevation</td>

                        <td>0</td>
                        <td>0</td>
                        <td>0</td>

                        <td>0</td>
                        <td>0</td>
                        <td>0</td>

                        <td>WNL</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>WNL</td>
                        <td>0</td>
                        <td>5/5</td>
                        <td>
                          <i className="fas fa-comment-alt"></i>
                        </td>
                      </tr>

                      <tr>
                        <td>Lateral Deviation</td>

                        <td>WNL</td>
                        <td>WNL</td>
                        <td>5/5</td>

                        <td>WNL</td>
                        <td>WNL</td>
                        <td>5/5</td>

                        <td>WNL</td>
                        <td>0</td>
                        <td>5/5</td>

                        <td>WNL</td>
                        <td>0</td>
                        <td>5/5</td>
                        <td>
                          <i className="fas fa-comment-alt"></i>
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <h6 className="mt-3">Special Tests</h6>

                  <h6 className="main-h mt-3">Body part : Shoulder</h6>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th className="text-left">Test Name</th>
                        <th>Positive</th>
                        <th>Negative</th>
                        <th className="text-left">Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">Tinel's Test</td>
                        <td>
                          <input type="checkbox" checked />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td className="text-left">
                          +ve lateral epicondylitis test. -ve medial elbow
                          tinels sign{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="text-left">Valgus Stress Test</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" checked />
                        </td>
                        <td className="text-left">
                          +ve lateral epicondylitis test. -ve medial elbow
                          tinels sign{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="text-left">Varusus Stress Test</td>
                        <td>
                          <input type="checkbox" checked />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td className="text-left">
                          +ve lateral epicondylitis test. -ve medial elbow
                          tinels sign{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="text-left">
                          Lateral Epicondylitis Test
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" checked />
                        </td>
                        <td className="text-left">
                          +ve lateral epicondylitis test. -ve medial elbow
                          tinels sign{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="text-left">mental Epicondylitis Test</td>
                        <td>
                          <input type="checkbox" checked />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td className="text-left">
                          +ve lateral epicondylitis test. -ve medial elbow
                          tinels sign{" "}
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <p className="mt-3">Palpation : Lorem Ipsum</p>
                  <p>Treatment : Lorem Ipsum</p>
                  <p>Response to Treatment : Lorem Ipsum</p>

                  <h6>Assessment (A)</h6>
                  <Row>
                    <Col lg={4} sm={5} xs={12}>
                      <p>Medical Diagnosis / ICD 10 Codes :</p>
                    </Col>

                    <Col lg={8} sm={7} xs={12}>
                      <p>
                        <i className="fas fa-circle mr-2"></i>Intervertibral
                        disc disorders with radiculopathy, lumbar region
                        (ICT-10-M15.6)
                      </p>
                      <p>
                        <i className="fas fa-circle mr-2"></i>Intervertibral
                        disorders , lumbar region (ICT-10-M15.6)
                      </p>
                    </Col>
                  </Row>

                  <p>Index Of Suspicion : Not tested</p>
                  <p>Surgery Procedure Complete : Not tested</p>

                  <h6>Plan (P)</h6>
                  <p>Plan : Lorem Ipsum</p>
                  <p>MD Recommendations : Lorem Ipsum</p>
                  <p>Education : Lorem Ipsum</p>
                  <p>Treatment Goals : Decrease pain, Decrease Swelling</p>
                </Col>
              </Row>

              <Row>
                <Col lg={4} sm={5} xs={12} className="mx-auto">
                  <div className="border p-2 rounded bg-white text-center">
                    <img src={Sign} alt="signature" />
                  </div>
                  <p className="text-center">
                    Electronically Signed On : 31-12-2021 | 9:43 PM
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViewNotes;
