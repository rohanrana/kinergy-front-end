import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "../../PageLayout/SidebarNav/Sidebar";
const settings = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card">
              <Row>
                <Col lg={12} sm={12} xs={12}>
                  <div className="setting-top">
                    <div className="setting-top-name-col">
                      <span>JR</span>
                    </div>
                    <div className="setting-top-full-name">
                      <h5 className="m-0">John Richardson</h5>
                      <p className="m-0">Role : Admin</p>
                    </div>
                    <div className="setting-top-button">
                      <a
                        href="#/edit-personal-detail"
                        className="btn btn-theme"
                      >
                        <i className="fas fa-pencil mr-2"></i>Edit Details
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>

              <h6 className="mt-5">Personal Details</h6>

              <Row>
                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Last Name</p>
                  <h6>Richardson</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">First Name</p>
                  <h6>john</h6>
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
            </div>

            <div className="appointment-card">
              <h6 className="mb-5">
                Contact Information{" "}
                <span className="float-right">
                  <a
                    href="#/edit-contact-information"
                    className="btn btn-theme"
                  >
                    <i className="fas fa-pencil mr-2"></i>Edit Details
                  </a>
                </span>
              </h6>

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

              <hr />

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

              <h6 className="mb-5">Emergency Contact Information</h6>
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

            <div className="appointment-card">
              <h6 className="mb-5">
                Update Password{" "}
                <span className="float-right">
                  <a href="#/update-password" className="btn btn-theme">
                    Update Password
                  </a>
                </span>
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <p className="m-0">Password</p>
              <h6>***********</h6>
            </div>

            <div className="appointment-card">
              <h6 className="mb-5">
                Other Preferences{" "}
                <span className="float-right">
                  <Button className="btn btn-theme">
                    <i className="fas fa-pencil mr-2"></i>Edit Details
                  </Button>
                </span>
              </h6>
              <p>Communication Preferences</p>

              <Row>
                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Automated Reminder</p>
                  <h6>SMS / Email</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Appointment Confirmation</p>
                  <h6>Email</h6>
                </Col>
              </Row>
              <hr />

              <h6 className="mb-5">
                Two-factor Authentication{" "}
                <span className="float-right">
                  <Button className="btn btn-theme">Enable</Button>
                </span>
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et <br /> dolore magna
                aliqua.{" "}
              </p>
              <hr />

              <Row>
                <Col lg={8} sm={8} xs={12}>
                  <h6>E-mail</h6>
                  <p>Verification codes are sent by email</p>
                </Col>
                <Col lg={4} sm={4} xs={12} className="text-right">
                  <Button className="btn btn-theme-white btn-setting-add">
                    Add Email
                  </Button>
                </Col>
              </Row>

              <hr />

              <Row>
                <Col lg={8} sm={8} xs={12}>
                  <h6>Voice or text message</h6>
                  <p>Verification codes are sent by text message</p>
                </Col>
                <Col lg={4} sm={4} xs={12} className="text-right">
                  <Button className="btn btn-theme-white btn-setting-add">
                    Add phone number
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default settings;
