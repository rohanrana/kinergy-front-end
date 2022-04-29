import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";
import AdminLeftMenu from "./AdminLeftMenu";
import Sign from "../../image/sign.png";
import StaffMember from "../../image/staff.png";

import StaffLogin from "../logins/StaffLogin";
import useToken from "../useToken";

const AddStaff = () => {
  //============ Check AUTH-TOKEN===================
  const { token, setToken } = useToken();
  if (!token) {
    return <StaffLogin />;
  }
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card mt-3 mb-5">
              <Row>
                <Col lg={3} sm={4} xs={12}>
                  <div className="staff-img">
                    <img src={StaffMember} alt={StaffMember} />
                  </div>
                  <div className="text-center mt-3">
                    <Button className="btn btn-theme btn-sm">
                      Browse for file
                    </Button>
                  </div>
                </Col>
                <Col lg={9} sm={8} xs={12}>
                  <Form>
                    <Row>
                      <Col lg={6} sm={6} xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Control placeholder="First Name" />
                        </Form.Group>
                      </Col>

                      <Col lg={6} sm={6} xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Control placeholder="Last Name" />
                        </Form.Group>
                      </Col>

                      <Col lg={6} sm={6} xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Control placeholder="Email ID" />
                        </Form.Group>
                      </Col>

                      <Col lg={6} sm={6} xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Control placeholder="Phone" />
                        </Form.Group>
                      </Col>

                      <Col lg="12">
                        {["checkbox"].map((type) => (
                          <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                              checked
                              type={type}
                              id={`default-${type}`}
                              label={"Generate User ID/Password"}
                            />
                          </div>
                        ))}
                      </Col>

                      <Col lg={12} sm={12} xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Control placeholder="Job Title" />
                        </Form.Group>
                      </Col>

                      <Col lg={12} sm={12} xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Control placeholder="Department" />
                        </Form.Group>
                      </Col>

                      <Col lg={12} sm={12} xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Control placeholder="Role" />
                        </Form.Group>
                      </Col>

                      <Col lg={12} sm={12} xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            as="textarea"
                            rows="3"
                            placeholder="Notes"
                          />
                        </Form.Group>
                      </Col>

                      <Col lg="12">
                        {["checkbox"].map((type) => (
                          <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                              checked
                              type={type}
                              id={`default-${type}`}
                              label={
                                "Provides services and appears on booking page"
                              }
                            />
                          </div>
                        ))}
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={3} sm={4} xs={12} className="ml-auto">
                        <div className="signature-add text-center">
                          <img src={Sign} alt="signature" />
                        </div>
                        <Button className="btn btn-theme btn-sm ml-0 w-100 mt-3">
                          Add Signature
                        </Button>
                      </Col>
                    </Row>

                    <Row>
                      <Col Col lg={12} sm={12} xs={12}>
                        <div className="text-center form-action-btn mt-5">
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
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddStaff;
