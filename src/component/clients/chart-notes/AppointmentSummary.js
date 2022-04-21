import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";

const AppointmentSummary = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card">
              <h5 className="mb-3">
                <a href="#/view-notes" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Appointment Summary
              </h5>
              <hr />
              <Form>
                
                <Row>
                    <Col lg={12} sm={12} xs={12}>
                    <h6>Appointment Details</h6>
                    <p><i class="far fa-calendar mr-2"></i>08 December, 2021</p>
                    <p><i className="fas fa-clock mr-2"></i>12:00 PM</p>
                    </Col>
                </Row>

                <hr />

                <h6>Practitioner</h6>

                <div className="booking-detail">
                    <div className="booking-detail-col1">
                        <h4 className="text-center">TL</h4>
                    </div>
                    <div className="booking-detail-col2 pl-2">
                        <h6 className="m-0">Terrill Lobo</h6>
                        <p className="m-0">Atheletic Therapist / Trainer</p>
                        <p className="m-0">5 Years</p>
                    </div>
                </div>

                <hr />

                <h6>Personal Details</h6>

                <div className="booking-detail">
                    <div className="booking-detail-col1">
                        <h4 className="text-center">SE</h4>
                    </div>
                    <div className="booking-detail-col2 pl-2">
                        <h6 className="m-0">Scott Elizabeth</h6>
                        <p className="m-0">(556)-897-0987</p>
                    </div>
                </div>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <Button className="btn btn-theme-white pl-2 pr-2 ml-0">
                        Back
                      </Button>

                      <Button className="btn btn-theme pl-2 pr-2 ml-2">
                        Save
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppointmentSummary;
