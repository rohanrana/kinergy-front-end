import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Tabs,
  Tab,
  Form,
  Button,
} from "react-bootstrap";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";

const AddIcd = () => {
  const [key, setKey] = useState("allcid");
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <h5 className="mt-3 text-white">
              Scott Elizabeth{" "}
              <span className="float-right">
                <small>
                  45465453<span className="ml-2">Active</span>
                </small>
              </span>
            </h5>
            <div className="appointment-card mt-3">
              <h5>
                <a href="#/range-of-motion" className="mr-2 theme-color">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Add ICD-10 Code
              </h5>
              <hr />

              <Form>
                <Row>
                  <Col lg={12}>
                    <Form.Group className="form-type">
                      <Form.Label>Intervention Linked To</Form.Label>
                      <Form.Control placeholder="Full Body - Core / Legs / Shoulders-11-Aug-2020" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={5} xs={12}>
                    <Form.Group className="mt-5">
                      <Form.Control placeholder="Search" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <Tabs
                      id="controlled-tab-example"
                      activeKey={key}
                      onSelect={(k) => setKey(k)}
                      className="mt-3 therapy-progress-tabs"
                    >
                      <Tab eventKey="allcid" title="All ICD - 10 Codes">
                        <Table responsive className="mt-3">
                          <thead>
                            <tr>
                              <th className="text-left" colSpan="2">
                                ICD - 10 Codes
                              </th>
                              <th className="text-left" colSpan="2">
                                Description
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">M54.4</td>
                              <td className="text-left">
                                Lumbago with Sciatica
                              </td>
                              <td className="text-left">
                                <i className="fas fa-star"></i>
                              </td>
                            </tr>

                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">M54.4</td>
                              <td className="text-left">
                                Lumbago with Sciatica, unspecified side
                              </td>
                              <td className="text-left">
                                <i className="fas fa-star"></i>
                              </td>
                            </tr>

                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">M54.4</td>
                              <td className="text-left">
                                Lumbago with Sciatica, right side
                              </td>
                              <td className="text-left">
                                <i className="fas fa-star"></i>
                              </td>
                            </tr>

                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">M54.4</td>
                              <td className="text-left">
                                Lumbago with Sciatica, left side
                              </td>
                              <td className="text-left">
                                <i className="fas fa-star"></i>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Tab>
                      <Tab eventKey="favourite" title="Favourite">
                        <Table responsive className="mt-3">
                          <thead>
                            <tr>
                              <th className="text-left" colSpan="2">
                                ICD - 10 Codes
                              </th>
                              <th className="text-left" colSpan="2">
                                Description
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">M54.4</td>
                              <td className="text-left">
                                Lumbago with Sciatica
                              </td>
                              <td className="text-left">
                                <i className="fas fa-star"></i>
                              </td>
                            </tr>

                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">M54.4</td>
                              <td className="text-left">
                                Lumbago with Sciatica, unspecified side
                              </td>
                              <td className="text-left">
                                <i className="fas fa-star"></i>
                              </td>
                            </tr>

                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">M54.4</td>
                              <td className="text-left">
                                Lumbago with Sciatica, right side
                              </td>
                              <td className="text-left">
                                <i className="fas fa-star"></i>
                              </td>
                            </tr>

                            <tr>
                              <td className="text-left">
                                <input type="checkbox" />
                              </td>
                              <td className="text-left">M54.4</td>
                              <td className="text-left">
                                Lumbago with Sciatica, left side
                              </td>
                              <td className="text-left">
                                <i className="fas fa-star"></i>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Tab>
                    </Tabs>
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

export default AddIcd;
