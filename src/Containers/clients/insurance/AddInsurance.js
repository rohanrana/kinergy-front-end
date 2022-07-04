import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";

const AddInsurance = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <h4 className="text-white mt-5">
              Scott Elizabeth
              <span className="float-right">
                <small>
                  <span className="mr-2">45465453</span>
                  <span className="ml-2">Active</span>
                </small>
              </span>
            </h4>
            <div className="appointment-card form-type mt-1">
              <h5 className="mb-3">
                <Link to="/client/insurance-provider" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </Link>
                Add Insurance
              </h5>
              <hr />
              <Form>
                <h6>Insurance Details</h6>
                <hr />

                <Row>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="mt-0"
                        type="text"
                        placeholder="Insurance Number"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="mt-0"
                        type="text"
                        placeholder="Claim Number"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="mt-0"
                        type="text"
                        placeholder="Group ID"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select className="mt-0">
                        <option>Order Of benefits</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="mt-0"
                        type="text"
                        placeholder="Effective From"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="mt-0"
                        type="text"
                        placeholder="Effective Till"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select className="mt-0">
                        <option>Company Type</option>
                        <option>Fixed</option>
                        <option>Percent</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="mt-0"
                        type="text"
                        placeholder="Company Amount"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select className="mt-0">
                        <option>Relation to insured</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        className="mt-0"
                        placeholder="Notes"
                      />
                    </Form.Group>
                  </Col>

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

export default AddInsurance;
