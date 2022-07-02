import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../PageLayout/SidebarNav/Sidebar";

const EditPersonalDetail = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          
          <Col lg={12} sm={12} xs={12}>
            <h5>Settings</h5>
            <div className="appointment-card form-type">
            <Row>
                <Col lg={12} sm={12} xs={12}>
                  <div className="setting-top mb-5">
                    <div className="setting-top-name-col">
                      <span>JR</span>
                    </div>
                    <div className="setting-top-full-name">
                      <h5 className="m-0">John Richardson</h5>
                      <p className="m-0">Role : Admin</p>
                    </div>
                    
                  </div>

                  <h6 className="mb-3">Personal Details</h6>
                </Col>
              </Row>
              <Form>
                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control value="Scott" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control value="Elizabeth" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nick name / Preferred name</Form.Label>
                      <Form.Control value="Scott" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control value="06/08/1999" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control value="Female" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>SSN</Form.Label>
                      <Form.Control value="SSN5164685154" />
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

export default EditPersonalDetail;
