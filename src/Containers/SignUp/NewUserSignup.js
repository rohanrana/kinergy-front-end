/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams, withRouter, Link } from "react-router-dom";
import { isArray } from "lodash";
import Loader from "../../Components/Loader/Loader";
import Logo from "../../images/logo.png";
import { signUp } from "../../Services/session";
import { successToast, verifyObject } from "../../utilities/utils";
import { ValidateSignupInput } from "./ValidateRegisterForm";
import { appRoutesConst } from "../../App/navigation";
import { USER_TYPE_CUSTOMER } from "../../Constants/common";
import BackButton from "../../Components/common/BackButton";
import Service1 from "../../images/service1.jpg";
import ArrowRight from "../../images/arrow-right-circle.png";
import Clock from "../../images/clock.png";
import { useDispatch, useSelector } from "react-redux";
import { errorToast } from "../../utilities/utils";
import AppointmentDetailsSection from "../../Components/common/AppointmentDetailsSection";
import { DatePicker, Picklist, Option } from "react-rainbow-components";
import { registerNewCustomer } from "../../Services/customer";
import moment from "moment";
import { sessionTypes } from "../../Reducers/session";

const NewUserSignup = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    type: "",
    firstName: "",
    lastName: "",
    contact: "",
    loading: false,
    errors: null,
    serverErrors: [],
    signingUpResponse: null,
    dob: null,
    gender: null,
  });
  const localStore = useSelector((state) => state.localStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    console.log("OParams", params);
    setState({ ...state, contact: params.phone });
  }, []);
  // const serviceCategory = verifyObject(localStore, "serviceCategory", null);
  // const selectedService = verifyObject(localStore, "selectedService", null);
  // const appointmentDuration = verifyObject(
  //   localStore,
  //   "appointmentBookingDetails",
  //   null
  // );

  const handleChange = async (e) => {
    let errors = null;
    // let name = e.target.name
    // let value = e.target.value
    if (state.errors) {
      errors = Object.assign("", state.errors);
      delete errors[e.target.name];
    }
    await setState({
      ...state,
      [e.target.name]: e.target.value,
      errors: { ...state.errors, [e.target.name]: null },
    });
    // if (state[name] !== '') {
    //     let data = {
    //         [name]: value,
    //     }
    //     const errors = ValidateSignupInput(data)
    //     if (!errors.isValid) {
    //         await setState({ ...state, errors: errors.errors })
    //     }
    // }
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      contact: state.contact,
      dob: state.dob,
      gender: verifyObject(state, "gender.name", null),
    };
    const errors = ValidateSignupInput(data);

    if (!errors.isValid) {
      setState({ ...state, errors: errors.errors });
    } else {
      let payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.contact,
        dob: data.dob,
        gender: verifyObject(state, "gender.name", null),
      };

      try {
        // let phone = JSON.parse(localStorage.getItem("otp-phone"));
        await setState({ ...state, loading: true });
        let response = await registerNewCustomer(payload);
        let user = verifyObject(response, "data.result", null);
        console.log("respoinse", response);
        console.log("user", user);

        if (user) {
          dispatch({
            type: sessionTypes.LOGIN_SUCCESS,
            payload: { token: user.jwtToken, user: user },
          });
          navigate(`${appRoutesConst.appointmentFor}`);
        }

        await setState({ ...state, signingUpResponse: response });
      } catch (error) {
        if (error.data && error.data.errors && isArray(error.data.errors)) {
          console.log("errrr", error.data.errors);

          setState({
            ...state,
            loading: false,
            serverErrors: error.data.errors,
          });
        }
      }
    }
  };

  return (
    <div className="therapy-services">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="appointment-details-row">
              <AppointmentDetailsSection />
              <div className="new-user-signup-form">
                <p>
                  <BackButton />
                </p>
                <h5 className="text-center">New Profile Registration</h5>
                <p className="text-center">
                  Please enter your personal details below:
                </p>

                <Form>
                  <Row>
                    <Col lg={12} sm={12} xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name*</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name={"firstName"}
                          value={state.firstName}
                          placeholder="First Name"
                        />
                        {state.errors && (
                          <span className="text-danger">
                            {state.errors.firstName}
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                    <Col lg={12} sm={12} xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name*</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name={"lastName"}
                          value={state.lastName}
                          placeholder="Last Name"
                        />
                        {state.errors && (
                          <span className="text-danger">
                            {state.errors.lastName}
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                    <Col lg={12} sm={12} xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address*</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name={"email"}
                          value={state.email}
                          placeholder="Email Id"
                        />
                        {state.errors && (
                          <span className="text-danger">
                            {state.errors.email}
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                    <Col lg={12} sm={12} xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Cell Phone Number</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name={"contact"}
                          value={state.contact}
                          placeholder="Phone Number"
                        />
                        {state.errors && (
                          <span className="text-danger">
                            {state.errors.contact}
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                    <Col lg={12} sm={12} xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        {/* <Form.Control
                          onChange={handleChange}
                          name={"contact"}
                          value={state.contact}
                          placeholder="Phone Number"
                        /> */}
                        <DatePicker
                          formatStyle="medium"
                          placeholder="DD/MM/YYYY"
                          value={state.dob}
                          onChange={(value) => {
                            setState({
                              ...state,
                              dob: value,
                              errors: {
                                ...state.errors,
                                dob: null,
                              },
                            });
                          }}
                          minDate={new Date("01-01-2001")}
                        />
                        {state.errors && (
                          <span className="text-danger">
                            {state.errors.dob}
                          </span>
                        )}
                      </Form.Group>
                    </Col>

                    <Col lg={12} sm={12} xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Gender*</Form.Label>
                        <Picklist
                          onChange={(value) =>
                            setState({
                              ...state,
                              gender: value,
                              errors: {
                                ...state.errors,
                                gender: null,
                              },
                            })
                          }
                          value={state.gender}
                          placeholder="Select Gender"
                        >
                          <Option name="MALE" label="Male" />
                          <Option name="FEMALE" label="Female" />
                        </Picklist>
                        {state.errors && (
                          <span className="text-danger">
                            {state.errors.gender}
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <ul>
                    {state.serverErrors &&
                      state.serverErrors.map((error) => {
                        return (
                          <li
                            style={{
                              display: "list-item",
                            }}
                            className="text-danger"
                          >
                            * {error.msg}
                          </li>
                        );
                      })}
                  </ul>

                  <Link className="btn btn-form" to={appRoutesConst.appointmentFor}>Register</Link>

                  {/* <Button
                    onClick={_handleSubmit}
                    className="btn btn-form w-100 mt-5"
                  >
                    {state.loading ? (
                      <Loader isButton={true} variant={"light"} />
                    ) : (
                      "Register"
                    )}
                  </Button> */}
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewUserSignup;
