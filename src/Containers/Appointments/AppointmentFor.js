/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import User from "../../images/user.png";
import ArrowForward from "../../images/arrow-forward2.svg";
import Users from "../../images/users.png";
import AppointmentDetailsSection from "../../Components/common/AppointmentDetailsSection";
import BackButton from "../../Components/common/BackButton";
import { Link } from "react-router-dom";
import { appRoutesConst } from "../../App/navigation";
import { verifyObject } from "../../utilities/utils";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../Reducers/localStore";

const AppointmentFor = () => {
  const localStore = useSelector((state) => state.localStore);
  const user = verifyObject(localStore, "user", null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_CLIENT_DETAILS,
      payload: null,
    });
    dispatch({
      type: actionTypes.SET_APPOINTMENT_PROVIDER,
      payload: null,
    });
  }, []);

  const handleNavigation = () => {
    dispatch({
      type: actionTypes.SET_CLIENT_DETAILS,
      payload: user,
    });
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
                <h5 className="text-center">
                  Who are you booking this <br />
                  appointment for?
                </h5>
                <span onClick={handleNavigation}>
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
                </span>

                <div class="seperator">
                  <b>Or</b>
                </div>

                <Link to={appRoutesConst.someoneelse}>
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
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppointmentFor;
