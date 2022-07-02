import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";

const AddSurgeryRecord = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card">
              <h5 className="mb-3">
                <Link to="/medical-record-listing" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </Link>
                Add Surgery Record
              </h5>
              <hr />
              <Form>
                <Row>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Date Of Surgery" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select>
                        <option>Reported By</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Name Of The Surgeon" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows="3"
                        placeholder="Breif Details"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <p className="bg-light p-2">
                      <i className="fas fa-file mr-2"></i>lefthand.pdf{" "}
                      <span className="float-right">
                        <i className="fas fa-times"></i>
                      </span>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <p>
                      <a href="#/add-surgery-document" className="theme-color">
                        + Add Document
                      </a>
                    </p>
                  </Col>
                </Row>

                <Row>
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
    </div>
  );
};

export default AddSurgeryRecord;
