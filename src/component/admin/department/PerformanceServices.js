import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";


const DepartmentPerformanceServices = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card">
              <h5>Performance Services</h5>
              <Row>
                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/performance-note">
                      <div className="department-general">
                          <p className="m-0">Performance Note Template</p>
                      </div>
                      </a>
                  </Col>
                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/workout-goals">
                      <div className="department-general">
                          <p className="m-0">Workout Goals</p>
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

export default DepartmentPerformanceServices;
