import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";
import AdminLeftMenu from "./AdminLeftMenu";

const AddingFacility = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card mt-3">
              <h5 className="pb-2">Adding Facility</h5>
              <Form>
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Elizabeth" />
                    </Form.Group>
                  </Col>

                  <h5 className="mt-3 mb-3">Address Details</h5>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select>
                        <option>City</option>
                        <option value="1">Nevada</option>
                        <option value="2">Option</option>
                        <option value="3">Option</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select>
                        <option>State</option>
                        <option value="1">Las Vegas</option>
                        <option value="2">Option</option>
                        <option value="3">Option</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Pincode" />
                    </Form.Group>
                  </Col>
                  <h5 className="mt-3 mb-3">Contact Details</h5>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Office Phone" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Fax" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Email" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <Button className="btn btn-theme-white pl-2 pr-2">
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

export default AddingFacility;
