import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Tabs,
  Tab,
} from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";
import ClientLeftMenu from "./ClientLeftMenu";



const ClientDetails = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <ClientLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <Tabs
              defaultActiveKey="first"
              className=""
            >
              <Tab eventKey="first" title="Client Details">
              <div className="appointment-card">
              <h5 className="pb-2">
                Personal Details{" "}
                
                <span className="float-right">
                  <a
                    href="#/edit-details"
                    className="btn btn-theme m-0 btn-sm pl-2 pr-2"
                  >
                    Edit
                  </a>
                </span>
              </h5>

              <hr />

              <div className="client-details-row">
                <div className="client-details-col">
                  <h6>Last Name</h6>
                  <p>Elizabeth</p>
                </div>

                <div className="client-details-col">
                  <h6>First Name</h6>
                  <p>Scott</p>
                </div>

                <div className="client-details-col">
                  <h6>Date of Birth</h6>
                  <p>15-12-2021</p>
                </div>

                <div className="client-details-col">
                  <h6>Gender</h6>
                  <p>Male</p>
                </div>

                <div className="client-details-col">
                  <h6>Nick Name / Preerred Name</h6>
                  <p>Scotty</p>
                </div>

                <div className="client-details-col">
                  <h6>SSN</h6>
                  <p>KSL101,9623</p>
                </div>
              </div>

              <hr />
              <h5 className="mb-3">Contact Information</h5>
              <div className="client-details-row">
                <div className="client-details-col">
                  <h6>Phone 1</h6>
                  <p>702-544-2132</p>
                </div>
                <div className="client-details-col">
                  <h6>Phone 2</h6>
                  <p>702-544-2132</p>
                </div>
                <div className="client-details-col">
                  <h6>Email</h6>
                  <p>Scott@gmail.com</p>
                </div>

                <div className="client-details-col">
                  <h6>Address</h6>
                  <p>#101,9623-18A Avenue Las Vegas, NV 89123 (547)-354-6514</p>
                </div>
              </div>

              <hr />

              <h5 className="mb-3">Communication Preferences</h5>
              <div className="client-details-row">
                <div className="client-details-col">
                  <h6>Automated Reminder</h6>
                  <p>SMS / Email</p>
                </div>
                <div className="client-details-col">
                  <h6>Appointment Confirmation</h6>
                  <p>Email</p>
                </div>
              </div>

              <hr />

              <h5 className="mb-3">Work Information</h5>

              <div className="client-details-row">
                <div className="client-details-col">
                  <h6>Occupation</h6>
                  <p>Technical Engineer</p>
                </div>
                <div className="client-details-col">
                  <h6>Employment Status</h6>
                  <p>Permanent</p>
                </div>
              </div>
            </div>
              </Tab>
              <Tab eventKey="second" title="Emergency Contacts">
              <div className="appointment-card">
              <h5 className="pb-2">
              Emergency Contact Information
                
                <span className="float-right">
                  <a
                    href="#/edit-emergency-contact"
                    className="btn btn-theme m-0 btn-sm pl-2 pr-2"
                  >
                    Edit
                  </a>
                </span>
              </h5>

              <hr />

              <h6 class="main-h mb-3">Contact 1</h6>
              <Row>
                <Col lg={2}>
                  <h6 className="mb-1">Name</h6>
                  <p className="m-0">Steven Zack</p>
                </Col>

                <Col lg={2}>
                  <h6 className="mb-1">Relationship</h6>
                  <p className="m-0">Cousin</p>
                </Col>

                <Col lg={2}>
                  <h6 className="mb-1">Phone Type</h6>
                  <p className="m-0">(517)-234-6546</p>
                </Col>

                <Col lg={2}>
                  <h6 className="mb-1">Phone Number </h6>
                  <p className="m-0">(517)-234-6546</p>
                </Col>

                <Col lg={2}>
                  <h6 className="mb-1">Alt Phone Number</h6>
                  <p className="m-0">(517)-234-6546</p>
                </Col>

                <Col lg={2}>
                  <h6 className="mb-1">Language</h6>
                  <p className="m-0">English</p>
                </Col>
              </Row>

              <hr />

              <h6 class="main-h mb-3">Contact 2</h6>
              <Row>
                <Col lg={2}>
                  <h6 className="mb-1">Name</h6>
                  <p className="m-0">Ken Zackerry</p>
                </Col>

                <Col lg={2}>
                  <h6 className="mb-1">Relationship</h6>
                  <p className="m-0">Cousin</p>
                </Col>

                <Col lg={2}>
                  <h6 className="mb-1">Phone Type</h6>
                  <p className="m-0">(517)-234-6546</p>
                </Col>

                <Col lg={2}>
                  <h6 className="mb-1">Phone Number </h6>
                  <p className="m-0">(517)-234-6546</p>
                </Col>

                <Col lg={2}>
                  <h6 className="mb-1">Alt Phone Number</h6>
                  <p className="m-0">(517)-234-6546</p>
                </Col>

                <Col lg={2}>
                  <h6 className="mb-1">Language</h6>
                  <p className="m-0">English</p>
                </Col>
              </Row>
            
            </div>
              </Tab>
              <Tab eventKey="third" title="Medical History Questionaire">
                hello3
              </Tab>
            </Tabs>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ClientDetails;
