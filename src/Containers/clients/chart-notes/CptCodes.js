import React from "react";
import { Container, Row, Col, Form, Button, Table, Modal } from "react-bootstrap";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <a className="close-modal-btn" onClick={props.onHide}>
            <i className="fas fa-times"></i>
          </a>

          <h6>Rules of 8 Chart</h6>

          <Table responsive className="mt-3">
              <thead className="bg-light">
                  <tr>
                      <th>Time</th>
                      <th>Unit</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>08 - 22 Minutes</td>
                      <td>1</td>
                  </tr>

                  <tr>
                      <td>23 - 37 Minutes</td>
                      <td>2</td>
                  </tr>

                  <tr>
                      <td>38 - 52 Minutes</td>
                      <td>3</td>
                  </tr>

                  <tr>
                      <td>53 - 67 Minutes</td>
                      <td>4</td>
                  </tr>

                  <tr>
                      <td>68 - 82 Minutes</td>
                      <td>5</td>
                  </tr>

                  <tr>
                      <td>83 Minutes</td>
                      <td>6</td>
                  </tr>

              </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    );
  }

const CptCodes = () => {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
          <h4 className="mt-3 text-white">Scott Elizabeth <span className="float-right"><small>45465453 <span className="ml-2"><i className="fas fa-circle mr-2"></i>Active</span></small></span></h4>
            
            <div className="appointment-card">
              <h5 className="mb-3">
                <a href="#/add-treatment-intervention" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </a>
                CPT Codes
              </h5>
              <hr />
              <Form>
                <Form.Group className="form-type">
                    <Form.Label>Intervention Linked To</Form.Label>
                    <Form.Control placeholder="Full Body - Core / Legs / Shoulders- 11-Aug-2020" />
                </Form.Group>
                <Row className="mt-5">
                    <Col lg={6} sm={6} xs={12}>
                        <Form.Group>
                            <Form.Control placeholder="search" />
                        </Form.Group>
                    </Col>
                    <Col lg={6} sm={6} xs={12}>
                        <div className="text-right">
                            <Button className="btn btn-theme" onClick={() => setModalShow(true)}>View Rules of 8 chart</Button>
                        </div>
                    </Col>

                    <Col lg={12} sm={12} xs={12}>
                    <Table responsive className="mt-3">
                          <thead>
                            <tr>
                                <th className="text-left"></th>
                              <th className="text-left">
                                CPT Codes
                              </th>
                              <th className="text-left">Units Of Care</th>
                              <th className="text-left">Minutes</th>
                              <th className="text-left">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">97169 - Athletic Training evaluation, low complexity</td>
                              <td className="text-left">
                                <Form.Control />
                              </td>
                              <td className="text-left">
                              <Form.Control />
                              </td>

                              <td className="text-left">
                              <Form.Control />
                              </td>
                            </tr>

                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">97169 - Athletic Training evaluation, low complexity</td>
                              <td className="text-left">
                                <Form.Control />
                              </td>
                              <td className="text-left">
                              <Form.Control />
                              </td>

                              <td className="text-left">
                              <Form.Control />
                              </td>
                            </tr>

                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">97169 - Athletic Training evaluation, low complexity</td>
                              <td className="text-left">
                                <Form.Control />
                              </td>
                              <td className="text-left">
                              <Form.Control />
                              </td>

                              <td className="text-left">
                              <Form.Control />
                              </td>
                            </tr>

                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">97169 - Athletic Training evaluation, low complexity</td>
                              <td className="text-left">
                                <Form.Control />
                              </td>
                              <td className="text-left">
                              <Form.Control />
                              </td>

                              <td className="text-left">
                              <Form.Control />
                              </td>
                            </tr>

                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">97169 - Athletic Training evaluation, low complexity</td>
                              <td className="text-left">
                                <Form.Control />
                              </td>
                              <td className="text-left">
                              <Form.Control />
                              </td>

                              <td className="text-left">
                              <Form.Control />
                              </td>
                            </tr>

                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">97169 - Athletic Training evaluation, low complexity</td>
                              <td className="text-left">
                                <Form.Control />
                              </td>
                              <td className="text-left">
                              <Form.Control />
                              </td>

                              <td className="text-left">
                              <Form.Control />
                              </td>
                            </tr>

                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">97169 - Athletic Training evaluation, low complexity</td>
                              <td className="text-left">
                                <Form.Control />
                              </td>
                              <td className="text-left">
                              <Form.Control />
                              </td>

                              <td className="text-left">
                              <Form.Control />
                              </td>
                            </tr>

                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">97169 - Athletic Training evaluation, low complexity</td>
                              <td className="text-left">
                                <Form.Control />
                              </td>
                              <td className="text-left">
                              <Form.Control />
                              </td>

                              <td className="text-left">
                              <Form.Control />
                              </td>
                            </tr>
                            
                          </tbody>
                        </Table>
                    </Col>
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


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default CptCodes;
