import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Service1 from "../images/service1.jpg";
import InfoIcon from "../images/Info.png";
import BackArrow from "../images/back-arrow.png";
import Service2 from "../images/service2.png";
import Service3 from "../images/service3.png";
import Service4 from "../images/service4.png";
import Service5 from "../images/service5.png";
import Service6 from "../images/service6.png";
const TherapyServices = () => {
  return (
    <div className="therapy-services">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="appointment-details-row">
              <div className="appointment-detail-col-1">
                <h5>Appointment Details</h5>
                <div className="appointment-service-row">
                  <div className="appointment-service-col-1">
                    <img src={Service1} alt={Service1} />
                  </div>
                  <div className="appointment-service-col-2">
                    <p>Therapy Services</p>
                  </div>
                  <img src={InfoIcon} alt={InfoIcon} className="info-icons" />
                </div>
              </div>
              <div className="appointment-detail-col-2">
                <p>
                  <a href="/home">
                    <img src={BackArrow} alt={BackArrow} className="mr-2" />
                    Previous
                  </a>
                </p>
                <h5 className="text-center">Select a service</h5>
                <p className="text-center">
                  Please select any service from the below list to proceed
                  further
                </p>
                <a href="/lets-started">
                  <div className="appointment-service-row">
                    <div className="appointment-service-col-1">
                      <img src={Service2} alt={Service2} />
                    </div>
                    <div className="appointment-service-col-2">
                      <p>Athletic Therapy / Physiotherapy</p>
                    </div>
                    <img src={InfoIcon} alt={InfoIcon} className="info-icons" />
                  </div>
                </a>

                <a href="/lets-started">
                  <div className="appointment-service-row">
                    <div className="appointment-service-col-1">
                      <img src={Service3} alt={Service3} />
                    </div>
                    <div className="appointment-service-col-2">
                      <p>Vestibular Rehabilitation</p>
                    </div>
                    <img src={InfoIcon} alt={InfoIcon} className="info-icons" />
                  </div>
                </a>

                <a href="/lets-started">
                  <div className="appointment-service-row">
                    <div className="appointment-service-col-1">
                      <img src={Service4} alt={Service4} />
                    </div>
                    <div className="appointment-service-col-2">
                      <p>Video Biomechanical Analysis</p>
                    </div>
                    <img src={InfoIcon} alt={InfoIcon} className="info-icons" />
                  </div>
                </a>

                <a href="/lets-started">
                  <div className="appointment-service-row">
                    <div className="appointment-service-col-1">
                      <img src={Service5} alt={Service5} />
                    </div>
                    <div className="appointment-service-col-2">
                      <p>Orthotics and Bracing</p>
                    </div>
                    <img src={InfoIcon} alt={InfoIcon} className="info-icons" />
                  </div>
                </a>

                <a href="/lets-started">
                  <div className="appointment-service-row">
                    <div className="appointment-service-col-1">
                      <img src={Service6} alt={Service6} />
                    </div>
                    <div className="appointment-service-col-2">
                      <p>External Therapy</p>
                    </div>
                    <img src={InfoIcon} alt={InfoIcon} className="info-icons" />
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TherapyServices;
