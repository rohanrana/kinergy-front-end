import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Service1 from "../../images/service1.jpg";
import InfoIcon from "../../images/arrow-2.svg";
import Service2 from "../../images/service2.png";
import BackButton from "../../Components/common/BackButton";
import "./AppointmentsTypes.css";
import { Link } from "react-router-dom";
import { appRoutesConst } from "../../App/navigation";
export default function AppointmentTypes() {
  return (
    <div className="therapy-services">
      <Container>
        <Row>
          <Col lg={12}>
            
              <div className="select-service">
                <BackButton />
                <h5 className="text-center">What would you like to do ?</h5>
                <p className="text-center">
                  Please select one of the options below
                </p>
                <Row>
                  <Col lg={6} sm={6} xs={12} className=" mx-auto">
                  <Link to={appRoutesConst.newAppointmentBooking}>
                  <div className="appointment-service-row appointmet-book-row">
                    
                    <div className="appointment-service-col-2">
                      <p> {"Booking a new appointment"}</p>
                    </div>
                    <img src={InfoIcon} alt={InfoIcon} className="info-icons" />
                  </div>
                </Link>
                <Link to={appRoutesConst.followUpAppointmentBooking}>
                  <div className="appointment-service-row appointmet-book-row">
                   
                    <div className="appointment-service-col-2">
                      <p> {"Booking a follow up appointment"}</p>
                    </div>
                    <img src={InfoIcon} alt={InfoIcon} className="info-icons" />
                  </div>
                </Link>
                  </Col>
                </Row>
              </div>
        
          </Col>
        </Row>
      </Container>
    </div>
  );
}
