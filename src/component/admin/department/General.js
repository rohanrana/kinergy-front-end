import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";


const DepartmentGeneral = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card mt-3">
              <h5>General</h5>
              <Row>
                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/">
                      <div className="department-general">
                          <p className="m-0">Create Portal Forms</p>
                      </div>
                      </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/">
                      <div className="department-general">
                          <p className="m-0">Online Bookings</p>
                      </div>
                      </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/">
                      <div className="department-general">
                          <p className="m-0">Referral Souce List</p>
                      </div>
                      </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/">
                      <div className="department-general">
                          <p className="m-0">Create Templates</p>
                      </div>
                      </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/">
                      <div className="department-general">
                          <p className="m-0">Appointment Manager</p>
                      </div>
                      </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/">
                      <div className="department-general">
                          <p className="m-0">Create Templates</p>
                      </div>
                      </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/">
                      <div className="department-general">
                          <p className="m-0">Document Dropdown List</p>
                      </div>
                      </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/">
                      <div className="department-general">
                          <p className="m-0">Record Statistics List</p>
                      </div>
                      </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/">
                      <div className="department-general">
                          <p className="m-0">Program Default List</p>
                      </div>
                      </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/">
                      <div className="department-general">
                          <p className="m-0">View Note Logs</p>
                      </div>
                      </a>
                  </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DepartmentGeneral;
