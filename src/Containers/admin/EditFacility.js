import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Sidebar from "../../PageLayout/SidebarNav/Sidebar";
import StaffMember from "../../image/staff.png";

const EditFacility = () => {
  return (
    <div className="clients">
  
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card">
              <div className="d-flex justify-content-end">
                <label className="mr-2">Status: Active</label>
                <Form.Check checked type="switch" id="custom-switch" />
              </div>

              <div className="facility-detail-top">
                <div className="staff-img-detail">
                  <img src={StaffMember} alt={StaffMember} />
                </div>
                <h5 className="m-0">Kinergy Sports Medicine And Performance</h5>
              </div>
              <h6 className="mb-3">Facility Detail</h6>
              <Form>
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Facility Name</Form.Label>
                      <Form.Control value="Kinergy Sports Medicine and Performance" />
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Facility Location</Form.Label>
                      <Form.Control value="Amsterdam" />
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Opening Hours</Form.Label>
                      <Form.Control value="09:00 AM To 07:00 PM" />
                    </Form.Group>
                  </Col>

                  <hr />

                  <h6 className="mb-3">Contact Information</h6>
                </Row>

                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Phone Type</Form.Label>
                      <Form.Select>
                        <option>Home</option>
                        <option value="1">Mobile</option>
                        <option value="2">Home</option>
                        <option value="3">Work</option>
                        <option value="4">Fax</option>
                        <option value="5">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control value="(123)-465-6544" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <h5 className="mb-0 mt-3">
                      <a href="#/" className="text-dark">
                        <i className="fas fa-plus-circle"></i>
                      </a>
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Email</Form.Label>
                      <Form.Control value="scott@gmail.com" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <hr />

                  <h6 className="mb-3">Address</h6>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Address</Form.Label>
                      <Form.Control value="#101,9623-18A Avenue" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>City</Form.Label>
                      <Form.Select>
                        <option>Nevada</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>State</Form.Label>
                      <Form.Select>
                        <option>Las Vegas</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control placeholder="89123" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <hr />
                  <h6 className="mb-3">Upload Profile Image</h6>

                  <Col lg={2} sm={3} xs={12}>
                    <div className="staff-img">
                      <img src={StaffMember} alt={StaffMember} />
                    </div>
                  </Col>
                  <Col lg={10} sm={9} xs={12}>
                    <div className="mt-5">
                      <Button className="btn btn-theme btn-sm">
                        Browse for file
                      </Button>
                    </div>
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

export default EditFacility;
