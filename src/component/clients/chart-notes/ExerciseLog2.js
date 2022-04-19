import React from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";

const ExerciseLog2 = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <h4 className="mt-3 text-white">
              Scott Elizabeth{" "}
              <span className="float-right">
                <small>
                  45465453{" "}
                  <span className="ml-2">
                    <i className="fas fa-circle mr-2"></i>Active
                  </span>
                </small>
              </span>
            </h4>
            <div className="appointment-card">
              <h5 className="mb-3">
                <a href="#/special-tests" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Exercise Log
              </h5>

              <hr />

              <Form>
                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="form-type">
                      <Form.Label>Intervention Linked To</Form.Label>
                      <Form.Control placeholder="Full Body - Core / Legs / Shoulders- 11-Aug-2020" />
                    </Form.Group>

                    <Form.Group className="mt-5">
                      <Form.Select>
                        <option>Provider</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                      <h5>Attachment</h5>
                      <p className="text-right"><a href="#/exercise-log">+ Add Exercise Log</a></p>
                      <p className="p-2 rounded bg-light"><i className="fas fa-file mr-2"></i>Ex1.pdf<span className="float-right"><i className="fas fa-times"></i></span></p>
                      <p className="p-2 rounded bg-light"><i className="fas fa-file mr-2"></i>Ex2.pdf<span className="float-right"><i className="fas fa-times"></i></span></p>
                      <p className="p-2 rounded bg-light"><i className="fas fa-file mr-2"></i>Ex2.pdf<span className="float-right"><i className="fas fa-times"></i></span></p>
                      <p className="p-2 rounded bg-light"><i className="fas fa-file mr-2"></i>Ex2.pdf<span className="float-right"><i className="fas fa-times"></i></span></p>
                  </Col>
                </Row>

                <Table responsive className="mt-5">
                  <thead className="bg-white">
                    <tr>
                      <th>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Exercise
                        </span>
                      </th>
                      <th>
                        <span className="rounded p-2 w-100 d-block bg-theme">
                          Exercise Name
                        </span>
                      </th>
                      <th>
                        <span className="rounded p-2 w-100 d-block bg-theme">
                          SET
                        </span>
                      </th>
                      <th>
                        <span className="rounded p-2 w-100 d-block bg-theme">
                          REP
                        </span>
                      </th>
                      <th>
                        <span className="rounded p-2 w-100 d-block bg-theme">
                          TIME
                        </span>
                      </th>
                      <th>
                        <span className="rounded p-2 w-100 d-block bg-theme">
                          RESISTANCE
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Warm Up
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          UBE 10mins
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          1 X 5
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Hold
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          5 sec
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          N/A
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Ex 1
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Elbow ISOM
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          1 X 5
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Hold
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          5 sec
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          N/A
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Ex 2
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Elbow ISOM
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          1 X 5
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Hold
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          5 sec
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          N/A
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Ex 3
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Elbow ISOM
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          1 X 5
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Hold
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          5 sec
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          N/A
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Ex 4
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Elbow ISOM
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          1 X 5
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Hold
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          5 sec
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          N/A
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Ex 5
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Elbow ISOM
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          1 X 5
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Hold
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          5 sec
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          N/A
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Ex 6
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Elbow ISOM
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          1 X 5
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          Hold
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          5 sec
                        </span>
                      </td>
                      <td>
                        <span className="rounded p-2 w-100 d-block bg-light">
                          N/A
                        </span>
                      </td>
                    </tr>

                   
                  </tbody>
                </Table>
                <p className="text-right"><a href="#/exercise-log">+ Add Exercise Log</a></p>

           
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

export default ExerciseLog2;
