import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import ClientLeftMenu from "../ClientLeftMenu";

const EditInsuranceDetail = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <ClientLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card form-type">
              <h5 className="mb-3">
                <a
                  href="#/insurance-provider-details"
                  className="theme-color mr-2"
                >
                  <i className="fas fa-chevron-left"></i>
                </a>
                Add Insurance
              </h5>
              <hr />
              <Form>
                <h6>Client Details</h6>
                <hr />
                <Row>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" value="Scott" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" value="Elizabeth" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control type="text" value="06/08/1999" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control type="text" value="Scott" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control type="text" value="Scott" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Mail Id</Form.Label>
                      <Form.Control type="text" value="Scott" />
                    </Form.Group>
                  </Col>
                </Row>

                <h6>Insurance Provider Details</h6>
                <hr />
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="mt-0"
                        type="text"
                        placeholder="Insurance Provider Name"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="mt-0"
                        type="text"
                        placeholder="Contact Number"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="mt-0"
                        type="text"
                        placeholder="Mail Id"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="mt-0"
                        type="text"
                        placeholder="Address"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select className="mt-0">
                        <option>State</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select className="mt-0">
                        <option>Country</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="mt-0"
                        type="text"
                        placeholder="Pin Code"
                      />
                    </Form.Group>
                  </Col>

                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <Button className="btn btn-theme-white pl-2 pr-2">
                        Cancel
                      </Button>
                      <Button className="btn btn-theme pl-2 pr-2 ml-2">
                        Save & Next
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

export default EditInsuranceDetail;
