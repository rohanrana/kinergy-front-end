import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Popover,
  OverlayTrigger,
  Form,
  Button,
} from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Comments</Popover.Header>
    <Popover.Body>
      <Form>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows="5"
            placeholder="Add your comments here.."
          />
        </Form.Group>
      </Form>
    </Popover.Body>
  </Popover>
);

const RangeofMotionandStrenght = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <h5 className="mt-3 text-white">Scott Elizabeth</h5>
            <div className="appointment-card mt-3">
              <h5>
                <a href="#/medical-record-listing" className="mr-2 theme-color">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Range of Motion and Strength
              </h5>
              <hr />

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
                          <OverlayTrigger
                            trigger="click"
                            placement="left"
                            overlay={popover}
                          >
                            <i className="fas fa-comment-alt pointer"></i>
                          </OverlayTrigger>
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
                          <OverlayTrigger
                            trigger="click"
                            placement="left"
                            overlay={popover}
                          >
                            <i className="fas fa-comment-alt pointer"></i>
                          </OverlayTrigger>
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
                          <OverlayTrigger
                            trigger="click"
                            placement="left"
                            overlay={popover}
                          >
                            <i className="fas fa-comment-alt pointer"></i>
                          </OverlayTrigger>
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
                          <OverlayTrigger
                            trigger="click"
                            placement="left"
                            overlay={popover}
                          >
                            <i className="fas fa-comment-alt pointer"></i>
                          </OverlayTrigger>
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <h6 className="main-h mt-3">Body part : Jaw</h6>

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
                          <OverlayTrigger
                            trigger="click"
                            placement="left"
                            overlay={popover}
                          >
                            <i className="fas fa-comment-alt pointer"></i>
                          </OverlayTrigger>
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
                          <OverlayTrigger
                            trigger="click"
                            placement="left"
                            overlay={popover}
                          >
                            <i className="fas fa-comment-alt pointer"></i>
                          </OverlayTrigger>
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
                          <OverlayTrigger
                            trigger="click"
                            placement="left"
                            overlay={popover}
                          >
                            <i className="fas fa-comment-alt pointer"></i>
                          </OverlayTrigger>
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
                          <OverlayTrigger
                            trigger="click"
                            placement="left"
                            overlay={popover}
                          >
                            <i className="fas fa-comment-alt pointer"></i>
                          </OverlayTrigger>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
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

export default RangeofMotionandStrenght;
