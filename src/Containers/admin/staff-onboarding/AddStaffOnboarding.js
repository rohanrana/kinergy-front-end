import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";

const AddStaffOnboarding = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
        <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            
            <div className="appointment-card form-type">
              <h5 className="mb-3">
                <a href="#/staff-onboarding" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Employee Onboarding
              </h5>
              <hr />
              <Form>
             
                <h6>Personal Details</h6>
                <Row>
                <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Frist Name</Form.Label>
                        <Form.Control value="Scott" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control value="Elizabeth" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nick name / Preferred name</Form.Label>
                        <Form.Control value="Scott" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>D.O.B</Form.Label>
                        <Form.Control value="06/08/1999" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control value="Female" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>SSN</Form.Label>
                        <Form.Control value="SSN5164685154" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr />

                <h6>Contact Information</h6>

                <Row>
                <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone 1</Form.Label>
                        <Form.Control value="(123)-465-6544" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone 2</Form.Label>
                        <Form.Control value="(123)-465-6544" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value="scott@gmail.com" />
                    </Form.Group>
                  </Col>
                </Row>

                <hr />

                <h6>Address</h6>
                <Row>

                <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Address Line </Form.Label>
                        <Form.Control value="#101,9623-18A Avenue" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Select>
                            <option>Nevada</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                        <Form.Select >
                            <option>Las Vegas</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control value="89123" />
                    </Form.Group>
                  </Col>
                </Row>

                <hr />
                <h6>Communication Preferences</h6>
                <Row>
                <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Automated Reminder</Form.Label>
                        <Form.Select>
                            <option>SMS / Email</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                    <Form.Label>Appointment Confirmation</Form.Label>
                        <Form.Select >
                            <option>Email</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <hr />

                <h6>Work Information</h6>

                <Row>
                <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Role</Form.Label>
                        <Form.Select>
                            <option>Massage Therapist</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <a href="#/staff-upload-document" className="btn btn-theme pl-2 pr-2 ml-0">
                        Next
                      </a>
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

export default AddStaffOnboarding;
