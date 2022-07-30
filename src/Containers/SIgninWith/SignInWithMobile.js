/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { OTPModal } from "./OTPModal";
import { useNavigate } from "react-router-dom";
import { appRoutesConst } from "../../App/navigation";
import BackButton from "../../Components/common/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { errorToast, successToast, verifyObject } from "../../utilities/utils";
import { isArray, isEmpty } from "lodash";
import validator from "validator";
import { loginWithEmail, loginWithMobile } from "../../Services/customer";
import Loader from "../../Components/Loader/Loader";
import AppointmentDetailsSection from "../../Components/common/AppointmentDetailsSection";
import { actionTypes } from "../../Reducers/localStore";

const SignInWithMobile = () => {
  const [state, setState] = useState({
    phone: "",
    email: "",
    loading: false,
    errors: {
      phone: null,
      email: null,
    },
    otp: null,
    isNewUser: false,
  });
  const [modalShow, setModalShow] = React.useState(false);
  const [loginModePhone, setLoginMode] = React.useState(true);
  const localStore = useSelector((state) => state.localStore);
  const token = verifyObject(localStore, "token", null);

  const serviceCategory = verifyObject(localStore, "serviceCategory", null);
  const dispatch = useDispatch();

  const navigateTo = useNavigate();

  useEffect(() => {
    if (!serviceCategory) {
      navigateTo(appRoutesConst.index);
      errorToast({
        content: "You are not allowed to access this pages",
      });
    } else if (!serviceCategory && token) {
      dispatch({
        type: actionTypes.SET_APPOINTMENT_PROVIDER,
        payload: null,
      });
      dispatch({
        type: actionTypes.SET_CLIENT_DETAILS,
        payload: null,
      });
      navigateTo(appRoutesConst.index);
    } else if (token) {
      navigateTo(appRoutesConst.appointmentTypes);
    }
  }, []);

  const validateAndSubmitPhone = async (e) => {
    e.preventDefault();
    let phoneError;
    if (isEmpty(state.phone)) {
      phoneError = "Please enter a phone number";
    } else if (!validator.isNumeric(state.phone)) {
      phoneError = "Please enter a valid phone number";
    } else if (!validator.isLength(state.phone, { min: 10, max: 10 })) {
      phoneError = "Phone no should be of 10 digit";
    } else {
      phoneError = null;
    }
    console.log("errors", phoneError);
    if (phoneError) {
      setState({ ...state, errors: { phone: phoneError } });
    } else {
      try {
        // let phone = JSON.parse(localStorage.getItem("otp-phone"));
        await setState({ ...state, loading: true });
        let response = await loginWithMobile({
          phone: state.phone,
        });
        console.log("response", response);
        if (response.data.response_message) {
          successToast({
            content: verifyObject(
              response,
              "data.response_message.message",
              "Success"
            ),
          });
          setModalShow(true);

          await setState({
            ...state,
            loading: false,
            otp: verifyObject(response, "data.response_message.otp", null),
            isNewUser: verifyObject(
              response,
              "data.response_message.newUser",
              false
            ),
          });
        }
      } catch (error) {
        if (error.data && error.data.errors && isArray(error.data.errors)) {
          setState({
            ...state,
            loading: false,
            serverErrors: error.data.errors,
          });
        }
      }
    }
  };
  const validateAndSubmitEmail = async (e) => {
    e.preventDefault();
    let { email } = state;
    let emailError;
    if (isEmpty(email)) {
      emailError = "Please enter an email address";
    } else if (!validator.isEmail(email)) {
      // if (email && email.length > 60) {
      //   emailError = "Email should be less than  of 60 characters only";
      // }
      emailError = "Please enter a valid email";
    } else if (email && email.length > 60) {
      emailError = "Email should be less than  of 60 characters only";
    } else {
      emailError = null;
    }
    console.log("errors", emailError);
    if (emailError) {
      setState({ ...state, errors: { email: emailError } });
    } else {
      try {
        // let phone = JSON.parse(localStorage.getItem("otp-phone"));
        await setState({ ...state, loading: true });
        let response = await loginWithEmail({
          email: state.email,
        });
        console.log("response", response);
        if (response.data.response_message) {
          successToast({
            content: verifyObject(
              response,
              "data.response_message.message",
              "Success"
            ),
          });
          setModalShow(true);

          console.log("response", response.data.response_message.otp);
          await setState({
            ...state,
            loading: false,
            otp: verifyObject(response, "data.response_message.otp", null),
            isNewUser: verifyObject(
              response,
              "data.response_message.newUser",
              false
            ),
          });
        }
      } catch (error) {
        if (error.data && error.data.errors && isArray(error.data.errors)) {
          setState({
            ...state,
            loading: false,
            serverErrors: error.data.errors,
          });
        }
      }
    }
  };

  const handleLoginMode = () => {
    setLoginMode(!loginModePhone);
    setState({
      ...state,
      phone: "",
      email: "",
      errors: {
        phone: null,
        email: null,
      },
    });
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      errors: {
        phone: null,
        email: null,
      },
    });
  };
  console.log("OTP", state.otp);
  return (
    <div className="therapy-services">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="appointment-details-row">
              <AppointmentDetailsSection />
              {loginModePhone && (
                <div className="appointment-detail-col-2">
                  <p>
                    <BackButton />
                  </p>
                  <h5 className="text-center">Let's get started</h5>
                  <p className="text-center">
                    We will send you a One Time Password (OTP) to your phone
                    number.
                  </p>
                  <Form className="mt-5">
                    <Form.Group>
                      <Form.Label>Enter Your Cell Phone Number*</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        name="phone"
                        value={state.phone}
                        placeholder="(000-000-0000)"
                      />
                      {state.errors && state.errors.phone && (
                        <span className="text-danger">
                          {state.errors.phone}
                        </span>
                      )}
                      <p className="text-right mt-2 mb-0 link-color-form">
                        <span onClick={handleLoginMode}>
                          <a className="cursor-pointer">Enter using email?</a>
                        </span>
                      </p>
                    </Form.Group>

                    <Button
                      className="btn btn-form w-100 mt-5"
                      onClick={validateAndSubmitPhone}
                    >
                      {state.loading ? (
                        <Loader isButton={true} />
                      ) : (
                        <span>
                          {" "}
                          Next <i class="far fa-arrow-alt-circle-right"></i>
                        </span>
                      )}
                    </Button>
                  </Form>
                </div>
              )}
              {!loginModePhone && (
                <div className="appointment-detail-col-2">
                  <p>
                    <BackButton />
                  </p>
                  <h5 className="text-center">Your Email Address</h5>

                  <Form className="mt-5">
                    <Form.Group>
                      <Form.Label>Enter Your Email Address</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        name="email"
                        value={state.email}
                        placeholder="xyz@company.com"
                      />
                      <p className="text-right mt-2 mb-0 link-color-form">
                        <span onClick={handleLoginMode}>
                          <a className="cursor-pointer">
                            Enter using Cell Phone Number?
                          </a>
                        </span>
                      </p>
                    </Form.Group>
                    {state.errors && state.errors.email && (
                      <span className="text-danger">{state.errors.email}</span>
                    )}

                    <Button
                      className="btn btn-form w-100 mt-5"
                      onClick={validateAndSubmitEmail}
                    >
                      {state.loading ? (
                        <Loader isButton={true} />
                      ) : (
                        <span>
                          {" "}
                          Next <i class="far fa-arrow-alt-circle-right"></i>
                        </span>
                      )}
                    </Button>
                  </Form>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <OTPModal
        phone={state.phone}
        email={state.email}
        show={modalShow}
        onHide={() => setModalShow(false)}
        loginModePhone={loginModePhone}
        otp={state.otp}
        isNewUser={state.isNewUser}
      />
    </div>
  );
};

export default SignInWithMobile;
