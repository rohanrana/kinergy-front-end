import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../PageLayout/SidebarNav/Sidebar";
import AdminLeftMenu from "./AdminLeftMenu";
import StaffMember from "../../image/staff.png";
const FacilityDetail = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={3} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={9} sm={8} xs={12}>
            <p className="text-right mt-3">
              <a href="#/edit-facility" className="btn btn-theme">
                <i className="fas fa-pencil mr-2"></i>Edit Details
              </a>
            </p>

            <div className="facility-detail-top">
              <p className="text-right absolute">
                <i className="fas fa-circle"></i> Active
              </p>
                <div className="staff-img-detail">
                  <img src={StaffMember} alt={StaffMember} />
                </div>
                <h5 className="m-0">Kinergy Sports Medicine And Performance</h5>
              </div>
            <div className="appointment-card mt-0">
              <h6 className="mb-3">Facility Information</h6>

              <Row>
                <Col lg={6} sm={6} xs={12}>
                  <p className="m-0">Facility Name</p>
                  <p>Kinergy Sports Medicine and Performance</p>
                </Col>
                <Col lg={6} sm={6} xs={12}>
                  <p className="m-0">Opening Hours</p>
                  <p>09:00 AM To 07:00 PM</p>
                </Col>
                <Col lg={6} sm={6} xs={12}>
                  <p className="m-0">Faclity Location</p>
                  <p>Amsterdam</p>
                </Col>
              </Row>
              <hr />

              <Row>
                <Col lg={12}>
                  <h6 className="mb-3">Contact Information</h6>
                </Col>
                <Col lg={6} sm={6} xs={12}>
                  <p className="m-0">Phone Type</p>
                  <p>Cellphone</p>
                </Col>
                <Col lg={6} sm={6} xs={12}>
                  <p className="m-0">Phone Number</p>
                  <p>(517)-234-6546</p>
                </Col>
                <Col lg={6} sm={6} xs={12}>
                  <p className="m-0">Phone Type</p>
                  <p>Fax</p>
                </Col>
                <Col lg={6} sm={6} xs={12}>
                  <p className="m-0">Phone Number</p>
                  <p>(517)-234-6546</p>
                </Col>
                <Col lg={6} sm={6} xs={12}>
                  <p className="m-0">Email</p>
                  <p>Scott@gmail.com</p>
                </Col>
                <Col lg={6} sm={6} xs={12}>
                  <p className="m-0">Address</p>
                  <p>#101,9623-18A Avenue Las Vegas, NV 89123 (547)-354-6514</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FacilityDetail;
