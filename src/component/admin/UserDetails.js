import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";
const UserDetails = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            
            <div className="text-right mt-3">
            <Button className="btn btn-theme-white white-3 mr-2">
              <i className="fas fa-trash mr-2"></i>Delete
            </Button>
              <a href="#/edit-users" className="btn btn-theme">
                <i className="fas fa-pencil mr-2"></i>Edit Details
              </a>
            </div>
            <div className="appointment-card">
              <Row>
                <Col lg={12} sm={12} xs={12}>
                  <div className="setting-top">
                    <div className="setting-top-name-col">
                      <span>CB</span>
                    </div>
                    <div className="setting-top-full-name">
                      <h5 className="m-0">Courtney Brittney</h5>
                      <p className="m-0">Receptionist | Level 3</p>
                    </div>
                    <div className="setting-top-button">
                      <p className="d-flex justify-content-end mb-0">
                        <b>Status : Active</b>
                        <Form.Check type="switch" id="custom-switch" checked />
                      </p>
                      <a href="#/edit-preferences" className="btn btn-theme-white white-3">
                        <i className="fas fa-pencil mr-2"></i>Edit Preferences
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>

              <h6 className="mt-5 mb-3">Personal Details</h6>

              <Row>
                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Last Name</p>
                  <h6>Elizabeth</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">First Name</p>
                  <h6>Scott</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Date of Birth</p>
                  <h6>15-Dec-2021</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Gender</p>
                  <h6>Male</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Nickname/Preferred Name</p>
                  <h6>Scotty</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">SSN</p>
                  <h6>**********</h6>
                </Col>
              </Row>

              <h6 className="mb-3 mt-3">Contact Information </h6>

              <h6>Phone 1</h6>
              <Row>
                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Phone type</p>
                  <h6>Home</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Phone number</p>
                  <h6>(517)-234-6546</h6>
                </Col>
              </Row>

              <hr />

              <h6>Phone 2</h6>
              <Row>
                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Phone type</p>
                  <h6>Home</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Phone number</p>
                  <h6>(517)-234-6546</h6>
                </Col>
              </Row>

              <Row>
                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Email(Primary Email)</p>
                  <h6>Scott@gmail.com</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Address</p>
                  <h6>#101,9623-18A Avenue Las Vegas, NV 89123</h6>
                </Col>
              </Row>

              <hr />

              <h6 className="mb-3">Emergency Contact Information</h6>
              <Row>
                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Full Name</p>
                  <h6>Steven Zack</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Relationship</p>
                  <h6>Cousin</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Language</p>
                  <h6>English</h6>
                </Col>
              </Row>

              <hr />

              <h6>Phone 1</h6>
              <Row>
                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Phone type</p>
                  <h6>Home</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Phone number</p>
                  <h6>(517)-234-6546</h6>
                </Col>
              </Row>

              <hr />

              <h6>Phone 2</h6>
              <Row>
                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Phone type</p>
                  <h6>Home</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Phone number</p>
                  <h6>(517)-234-6546</h6>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserDetails;
