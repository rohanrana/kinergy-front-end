import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { Container, Row, Col } from "react-bootstrap";
import Call from "../../images/call.png";
import ArrowRight from "../../images/arrow-right-circle.png";
import AppointmentDetailsSection from "../../Components/common/AppointmentDetailsSection";
import BackButton from "../../Components/common/BackButton";

const BookAppointment = () => {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
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
                    <Calendar value={dateState} onChange={changeDate} />

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
                  <Col lg={4} sm={4} xs={12}>
                    <div className="current-date-details">
                      <h6 className="current-date-text">
                        <b>{moment(dateState).format("MMMM Do YYYY")}</b>
                      </h6>

                      <ul className="time-buttons">
                        <li>
                          <a href="#/">09:00 AM - 10:00 AM</a>
                        </li>
                        <li>
                          <a href="#/">10:15 AM - 11:15 AM</a>
                        </li>
                        <li>
                          <a href="#/" className="active">
                            11:30 AM - 12:30 PM
                          </a>
                        </li>
                        <li>
                          <a href="#/">12:45 PM - 01:45 PM</a>
                        </li>
                        <li>
                          <a href="#/">02:00 PM - 03:00 PM</a>
                        </li>
                        <li>
                          <a href="#/">03:15 PM - 04:15 PM</a>
                        </li>
                        <li>
                          <a href="#/">04:30 PM - 05:30 PM</a>
                        </li>
                        <li>
                          <a href="#/">05:45 PM - 06:45 PM</a>
                        </li>
                        <li>
                          <a href="#/">07:00 PM - 08:00 PM</a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center mt-3">
                      <a
                        href="#/"
                        className="btn btn-form btn-sm w-100 pl-5 pr-5"
                      >
                        Submit <img src={ArrowRight} alt={ArrowRight} />
                      </a>
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
};

export default BookAppointment;
