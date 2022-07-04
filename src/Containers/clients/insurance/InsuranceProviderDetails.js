import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";
import ClientLeftMenu from "../ClientLeftMenu";

const InsuranceProviderDetails = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <ClientLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card">
              <h5 className="mb-3">
                <Link to="/client/insurance-provider" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </Link>
                Insurance Details
                <span className="float-right">
                  <Link
                    to="/client/edit-insurance-detail"
                    className="btn btn-theme mt-0"
                  >
                    Edit
                  </Link>
                  <Button className="btn btn-theme-white mt-0 ml-2">
                    <i className="fas fa-trash"></i>
                  </Button>
                </span>
              </h5>
              <hr />
              <h6>Client Details</h6>
              <hr />
              <Row>
                <Col lg={3} sm={4} xs={12}>
                  <h6>Last Name</h6>
                  <p>Elizabeth</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>First Name</h6>
                  <p>Scott</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>Date of Birth</h6>
                  <p>15-12-2021</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>Gender</h6>
                  <p>Male</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>Phone Number</h6>
                  <p>(656)-456-4564</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>Email</h6>
                  <p>Scott@gmail.com</p>
                </Col>
              </Row>

              <h6>Insurance Provider Details</h6>
              <hr />
              <Row>
                <Col lg={3} sm={4} xs={12}>
                  <h6>Insurance Provider Name</h6>
                  <p>Anthem Blue Cross</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>Phone Number</h6>
                  <p>(656)-456-4564</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>Email</h6>
                  <p>AnthemBlueCross@gmail.com</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>Address</h6>
                  <p>#101,9623-18A Avenue Las Vegas, NV 89123 (547)-354-6514</p>
                </Col>
              </Row>
              <h6>Insurance Details</h6>
              <hr />
              <Row>
                <Col lg={3} sm={4} xs={12}>
                  <h6>Insurance Number</h6>
                  <p>Elizabeth</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>Claim Number</h6>
                  <p>Scott</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>Group ID</h6>
                  <p>15-12-2021</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>Order of benefits</h6>
                  <p>Primary</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>Effective From</h6>
                  <p>(656)-456-4564</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>Effective To</h6>
                  <p>Scott@gmail.com</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>COPAY Type</h6>
                  <p>Fixed</p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <h6>COPAY Amount</h6>
                  <p>$ 32.00</p>
                </Col>
              </Row>

              <hr />

              <h6>Notes</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InsuranceProviderDetails;
