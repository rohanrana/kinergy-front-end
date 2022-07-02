import React from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";

const importingorNew = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card">
              <h5 className="mb-3">
                <a
                  href="#/add-treatment-intervention"
                  className="theme-color mr-2"
                >
                  <i className="fas fa-chevron-left"></i>
                </a>
                Improting or view?
              </h5>

              <hr />

              <Form>
                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="form-type">
                      <Form.Label>Intervention Linked To</Form.Label>
                      <Form.Control placeholder="Full Body - Core / Legs / Shoulders- 11-Aug-2020" />
                    </Form.Group>
                  </Col>
                </Row>

                <Table responsive className="mt-5">
                  <thead>
                    <tr>
                      <th className="text-left">Date</th>
                      <th className="text-left" colSpan="2">
                        Provider
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-left">02-02-2022</td>
                      <td className="text-left">Terill Lobo</td>
                      <td className="text-left">
                        <a href="#/view-notes3">View Details</a>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-left">02-02-2022</td>
                      <td className="text-left">Terill Lobo</td>
                      <td className="text-left">
                        <a href="#/view-notes3">View Details</a>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-left">02-02-2022</td>
                      <td className="text-left">Terill Lobo</td>
                      <td className="text-left">
                        <a href="#/view-notes3">View Details</a>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-left">02-02-2022</td>
                      <td className="text-left">Terill Lobo</td>
                      <td className="text-left">
                        <a href="#/view-notes3">View Details</a>
                      </td>
                    </tr>
                  </tbody>
                </Table>

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

export default importingorNew;
