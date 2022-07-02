import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../PageLayout/SidebarNav/Sidebar";

const DiscountDetail = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <p className="mt-3">
              Status: <b>Active</b>
              <span className="float-right">
                <a href="#/" className="btn btn-theme-white white-3 mr-2 mt-0">
                  <i className="fas fa-trash mr-2"></i>Delete
                </a>
                <a href="#/edit-coupon" className="btn btn-theme mt-0">
                  <i className="fas fa-pencil mr-2"></i>Edit Coupon
                </a>
              </span>
            </p>

            <div className="appointment-card">
              <Row>
                <Col lg="6" sm={6} xs={12}>
                  <h5 className="mb-0">Father's Day</h5>
                  <p>Usage limit per user: 02</p>
                </Col>
                <Col lg="6" sm={6} xs={12}>
                  <p className="text-right">
                    Coupon Code : <b>FATHERSDAY20</b>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Discount type</p>
                  <h6>Percentage</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Percentage</p>
                  <h6>20%</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">Start Date</p>
                  <h6>13-May-2022</h6>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <p className="m-0">End Date</p>
                  <h6>22-May-2022</h6>
                </Col>
              </Row>
              <Row>
                <Col lg={12} sm={12} xs={12}>
                  <h6 className="mt-3">Description</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Col>
              </Row>
            </div>

            <div className="appointment-card mb-3">
              <h6>Coupon Valid On:</h6>
              <h5>Therapy Services</h5>

              <Row>
                <Col lg={3} sm={4} xs={12}>
                  <div className="therapy-service-col">
                    <p className="m-0">
                      Athletic Therapy <br />
                      /Physiotherapy
                    </p>
                  </div>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <div className="therapy-service-col">
                    <p className="m-0">
                      Telemedicine/ <br />
                      Telerehab
                    </p>
                  </div>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <div className="therapy-service-col">
                    <p className="m-0">
                      Video Biochemical <br />
                      Analysis
                    </p>
                  </div>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <div className="therapy-service-col">
                    <p className="m-0">
                      Vestibular <br />
                      Rehablitation
                    </p>
                  </div>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <div className="therapy-service-col">
                    <p className="m-0">
                      Orthotics and <br />
                      Bracing
                    </p>
                  </div>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <div className="therapy-service-col">
                    <p className="m-0">
                      Enternal <br />
                      Therapy
                    </p>
                  </div>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <div className="therapy-service-col">
                    <p className="m-0">
                      Work Fitness <br />
                      Assessment
                    </p>
                  </div>
                </Col>
              </Row>

              <h5 className="mt-3">Massage Therapy</h5>
              <Row>
                <Col lg={3} sm={4} xs={12}>
                  <div className="therapy-service-col">
                    <p className="m-0">
                      Relaxation <br />
                      Massage
                    </p>
                  </div>
                </Col>
                <Col lg={3} sm={4} xs={12}>
                  <div className="therapy-service-col">
                    <p className="m-0">
                      Sports <br />
                      Massage
                    </p>
                  </div>
                </Col>
              </Row>

              <h5 className="mt-3">Performance Training</h5>
              <Row>
                <Col lg={3} sm={4} xs={12}>
                  <div className="therapy-service-col">
                    <p className="m-0">
                      Remote <br />
                      Training
                    </p>
                  </div>
                </Col>
                <Col lg={3} sm={4} xs={12}>
                  <div className="therapy-service-col">
                    <p className="m-0">
                      Personal <br />
                      Training
                    </p>
                  </div>
                </Col>
                <Col lg={3} sm={4} xs={12}>
                  <div className="therapy-service-col">
                    <p className="m-0">
                      Performance <br />
                      Training
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DiscountDetail;
