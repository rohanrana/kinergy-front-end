import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";

const CaseStatistics = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
             
            <div className="appointment-card">
              <h5 className="mb-3">
                <a href="#/medical-record-main-page" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Case Statistics
               
              </h5>
              <hr />
                <Row>
                    <Col lg={4} sm={4} xs={12}>
                        <h6>Visits since last evaluation</h6>
                        <p>2</p>
                    </Col>

                    <Col lg={4} sm={4} xs={12}>
                        <h6>Days since last evaluation</h6>
                        <p>15</p>
                    </Col>

                    <Col lg={4} sm={4} xs={12}>
                        <h6># of visits in case</h6>
                        <p>5</p>
                    </Col>

                    <Col lg={4} sm={4} xs={12}>
                        <h6># of days unresolved</h6>
                        <p>20</p>
                    </Col>

                    <Col lg={4} sm={4} xs={12}>
                        <h6>Days until MD referral needed</h6>
                        <p>0</p>
                    </Col>

                    <Col lg={4} sm={4} xs={12}>
                        <h6># of No Shows</h6>
                        <p>2</p>
                    </Col>

                    <Col lg={4} sm={4} xs={12}>
                        <h6># of Cancellations</h6>
                        <p>0</p>
                    </Col>
                </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CaseStatistics;
