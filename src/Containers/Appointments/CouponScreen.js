/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { Container, Row, Col, Button } from "react-bootstrap";
import Call from "../../images/call.png";
import AppointmentDetailsSection from "../../Components/common/AppointmentDetailsSection";
import BackButton from "../../Components/common/BackButton";

export default function CouponScreen() {
  return (
    <div className="therapy-services">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="appointment-details-row">
              <AppointmentDetailsSection />
              <div className="appointment-detail-col-2">
                <p>
                  <BackButton />
                </p>
                <h5 className="text-center">Select Date & Time</h5>

                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <div className="d-flex mt-3">
                      <div className="d-flex-1-icon mr-2">
                        <img src={Call} alt={Call} />
                      </div>
                      <div className="d-flex-2-detail pl-2">
                        <p className="m-0">
                          <b>
                            If you are unable to find a date and time that is
                            feasible for you or need assistance in booking your
                            appointment, please call us at... (000)-000-0000
                          </b>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={4} xs={12}></Col>
                </Row>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center mt-3">
                      <Button
                        // disabled={
                        //   dateState === null || state.selectedTimeSlot === null
                        // }
                        className="btn btn-form btn-sm w-100"
                        // onClick={_handleAppointment}
                      >
                        <span>
                          Next <i class="far fa-arrow-alt-circle-right"></i>
                        </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
