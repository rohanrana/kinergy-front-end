import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";


const DepartmentMedical = () => {
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
              <h5>Medical</h5>
              <Row>
                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/icd-code-list">
                      <div className="department-general">
                          <p className="m-0">ICD 10 Code List</p>
                      </div>
                      </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/cpt-code-list">
                      <div className="department-general">
                          <p className="m-0">CPT Code List</p>
                      </div>
                      </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/treatment-note">
                      <div className="department-general">
                          <p className="m-0">Treatment Note Template</p>
                      </div>
                      </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/manage-body">
                      <div className="department-general">
                          <p className="m-0">Manage Body Regions</p>
                      </div>
                      </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <a href="#/treatment-goal">
                      <div className="department-general">
                          <p className="m-0">Treatment Goals</p>
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

export default DepartmentMedical;
