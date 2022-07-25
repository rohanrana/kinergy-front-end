import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Service1 from "../../images/service1.jpg";
import BackArrow from "../../images/back-arrow.png";

import Clock from "../../images/clock.png";
import InfoIcon from "../../images/Info.png";
import User from "../../images/user.png";
import ArrowForward from "../../images/arrow-forward.png";
import Users from "../../images/users.png";
import AppointmentDetailsSection from "../../Components/common/AppointmentDetailsSection";
import BackButton from "../../Components/common/BackButton";
import { Link } from "react-router-dom";
import { appRoutesConst } from "../../App/navigation";

const AppointmentFor = () => {
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
                <h5 className="text-center">
                  Who are you booking this <br />
                  appointment for?
                </h5>
                <Link to={appRoutesConst.providers}>
                  <div className="appointment-for-row">
                    <div className="appointment-for-col-1">
                      <span>
                        <img src={User} alt={User} />
                      </span>
                    </div>
                    <div className="appointment-for-col-2">
                      <p>
                        Myself
                        <span className="float-right">
                          <img src={ArrowForward} alt={ArrowForward} />
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>

                <div class="seperator">
                  <b>Or</b>
                </div>

                <a href="/someone-else">
                  <div className="appointment-for-row">
                    <div className="appointment-for-col-1">
                      <span>
                        <img src={Users} alt={Users} />
                      </span>
                    </div>
                    <div className="appointment-for-col-2">
                      <p>
                        Someone Else
                        <span className="float-right">
                          <img src={ArrowForward} alt={ArrowForward} />
                        </span>
                      </p>
                    </div>
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

export default AppointmentFor;
