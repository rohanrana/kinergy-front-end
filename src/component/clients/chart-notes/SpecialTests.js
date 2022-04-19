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
        <div className="text-center form-action-btn mt-3">
                    <Button className="btn btn-theme-white pl-2 pr-2 ml-0">
                      Cancel
                    </Button>

                    <Button className="btn btn-theme pl-2 pr-2 ml-2">
                      Save
                    </Button>
                  </div>
      </Form>
    </Popover.Body>
  </Popover>
);

const SpecialTests = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <h5 className="mt-3 text-white">Scott Elizabeth <span className="float-right"><small>45465453<span className="ml-2">Active</span></small></span></h5>
            <div className="appointment-card mt-3">
              <h5>
                <a href="#/range-of-motion" className="mr-2 theme-color">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Special Tests
              </h5>
              <hr />

              <Row>
                <Col lg={12}>
                <h6 className="main-h mt-3">Body part : Shoulder</h6>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th className="text-left">Test Name</th>
                        <th>Positive</th>
                        <th>Negative</th>
                        <th className="text-left" colSpan="2">Comments</th>
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



                  <h6 className="main-h mt-3">Body part : Shoulder</h6>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th className="text-left">Test Name</th>
                        <th>Positive</th>
                        <th>Negative</th>
                        <th>Comments</th>
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
                        <td className="text-left">Valgus Stress Test</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" checked />
                        </td>
                        
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
                        <td className="text-left">Varusus Stress Test</td>
                        <td>
                          <input type="checkbox" checked />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        
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
                        <td className="text-left">
                          Lateral Epicondylitis Test
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" checked />
                        </td>
                     
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
                        <td className="text-left">mental Epicondylitis Test</td>
                        <td>
                          <input type="checkbox" checked />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        
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

export default SpecialTests;
