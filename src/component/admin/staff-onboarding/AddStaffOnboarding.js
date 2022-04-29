import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";

import { api } from "../../../utils/api";

import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import {
  staffAddOnboarding,
  clearStaffOnboarding,
} from "../../../store/staffOnboarding/actions";
import Loader from "../../../cmmon_module/Loader";
import StaffLogin from "../../logins/StaffLogin";
import useToken from "../../useToken";

const AddStaffOnboarding = (props) => {
 

  const initialValues = {
    firstName: "",
    lastName: "",
    nickName: "",
    dob: "",
    gender: "",
    ssn: "",
    phone1: "",
    phone2: "",
    email: "",
    addressLine: "",
    state: "",
    city: "",
    pinCode: "",
    autoReminder: "",
    appointConfirm: "",
    role: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [stateList, setStateList] = useState(null);
  const [cityList, setCityList] = useState(null);
  const [RoleList, setRoleList] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", [name], "value", value);
    setFormValues({ ...formValues, [name]: value });

    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);

      // {props.staffOnboardingData?props.staffOnboardingData.response_message?<p className="success">{props.staffOnboardingData.response_message}</p>:null:null}
      props.staffAddOnboarding(formValues);
      if (
        props.staffOnboardingData &&
        props.staffOnboardingData.response_code === 200
      ) {
        localStorage.setItem(
          "staffOnBoardingDataId",
          JSON.stringify(props.staffOnboardingData.result._id)
        );
        props.history.push("/staff-upload-document");
      }
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regexDob =
      /^([0-2^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.firstName) {
      errors.firstName = "First name  is required";
    }
    if (!values.dob) {
      errors.dob = "D.O.B  is required";
    } else if (!regexDob.test(values.dob)) {
      errors.dob = "D.O.B  is not valid";
    }
    if (!values.gender) {
      errors.gender = "Gender  is required";
    }
    if (!values.ssn) {
      errors.ssn = "SSN  is required";
    }
    if (!values.phone1) {
      errors.phone1 = "Phone1  is required";
    }
    if (!values.email) {
      errors.email = "Email  is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email Id is not valid";
    }
    if (!values.state) {
      errors.state = "State  is required";
    }
    if (!values.city) {
      errors.city = "City  is required";
    }
    if (!values.pinCode) {
      errors.pinCode = "PinCode  is required";
    }
    if (!values.autoReminder) {
      errors.autoReminder = "Automated Reminder  is required";
    }
    if (!values.appointConfirm) {
      errors.appointConfirm = "Appointment Confirmation  is required";
    }
    if (!values.role) {
      errors.role = "Role  is required";
    }
    return errors;
  };
  useEffect(() => {
    if (!stateList) {
      try {
        api
          .post("/Country/getStateByCountry", { _id: 231 })
          .then((response) => {
            if (response.data.response_code === 200) {
              const data = response ? (
                response.data.result ? (
                  response.data.result.length > 0 ? (
                    response.data.result.map((x, index) => {
                      return <option value={x._id}> {x.name} </option>;
                    })
                  ) : (
                    <option> No State Found </option>
                  )
                ) : (
                  <option> No State Found </option>
                )
              ) : (
                <option> No State Found </option>
              );
              setStateList(data);
            } else {
              setStateList(<option> No State Found </option>);
            }
          });
      } catch (err) {
        setStateList(<option> Select State </option>);
      }
    }
  }, [stateList]);
  useEffect(() => {
    if (!stateList) {
      try {
        const token = JSON.parse(localStorage.getItem("auth-token"));
        api.post("/role/getRole", { token: token }).then((response) => {
          if (response.data.response_code === 200) {
            const data = response ? (
              response.data.result ? (
                response.data.result.length > 0 ? (
                  response.data.result.map((x, index) => {
                    return <option value={x._id}> {x.roleName} </option>;
                  })
                ) : (
                  <option> No Role Found </option>
                )
              ) : (
                <option> No Role Found </option>
              )
            ) : (
              <option> No Role Found </option>
            );
            setRoleList(data);
          } else {
            setRoleList(<option> No Role Found </option>);
          }
        });
      } catch (err) {
        setRoleList(<option> No Role Found </option>);
      }
    }
  }, [RoleList]);

  const getCityByStateId = (stateId) => {
    api.post("/Country/getCityByState", { _id: stateId }).then((response) => {
      if (response.data.response_code === 200) {
        const data = response ? (
          response.data.result ? (
            response.data.result.length > 0 ? (
              response.data.result.map((x, index) => {
                return <option value={x._id}> {x.name} </option>;
              })
            ) : (
              <option> No City Found </option>
            )
          ) : (
            <option> No City Found </option>
          )
        ) : (
          <option> No City Found </option>
        );
        setCityList(data);
      } else {
        setCityList(<option> No City Found </option>);
      }
    });
  };

  const { token, setToken } = useToken();
  if (!token) {
    return <StaffLogin />;
  }
  
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>{" "}
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card form-type">
              <h5 className="mb-3">
                <a href="#/staff-onboarding" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"> </i>{" "}
                </a>
                Employee Onboarding{" "}
              </h5>{" "}
              {console.log(props.staffOnboardingErr)}{" "}
              {props.staffOnboardingErr ? (
                props.staffOnboardingErr.response_message ? (
                  <p className="error">
                    {" "}
                    {props.staffOnboardingErr.response_message}{" "}
                  </p>
                ) : null
              ) : null}{" "}
              {props.staffOnboardingData ? (
                props.staffOnboardingData.response_message ? (
                  <p className="success">
                    {" "}
                    {props.staffOnboardingData.response_message}{" "}
                  </p>
                ) : null
              ) : null}{" "}
              <hr />
              <Form>
                <h6> Personal Details </h6>{" "}
                <Row>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> First Name </Form.Label>{" "}
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formValues.firstName}
                        onChange={handleChange}
                      />{" "}
                      {formErrors.firstName !== "" ? (
                        <p className="error"> {formErrors.firstName} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> Last Name </Form.Label>{" "}
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formValues.lastName}
                        onChange={handleChange}
                      />{" "}
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> Nick name / Preferred name </Form.Label>{" "}
                      <Form.Control
                        type="text"
                        name="nickName"
                        value={formValues.nickName}
                        onChange={handleChange}
                      />{" "}
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> D.O.B </Form.Label>{" "}
                      <Form.Control
                        type="text"
                        name="dob"
                        placeholder="dd/mm/yyyy"
                        value={formValues.dob}
                        onChange={handleChange}
                      />{" "}
                      {formErrors.dob !== "" ? (
                        <p className="error"> {formErrors.dob} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> State </Form.Label>{" "}
                      <Form.Select
                        type="text"
                        name="gender"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        <option value=""> Select Gender </option>{" "}
                        <option value="MALE"> Male </option>{" "}
                        <option value="FEMALE"> Female </option>{" "}
                      </Form.Select>{" "}
                      {formErrors.gender !== "" ? (
                        <p className="error"> {formErrors.gender} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> SSN </Form.Label>{" "}
                      <Form.Control
                        type="text"
                        name="ssn"
                        value={formValues.ssn}
                        onChange={handleChange}
                      />{" "}
                      {formErrors.ssn !== "" ? (
                        <p className="error"> {formErrors.ssn} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                </Row>{" "}
                <hr />
                <h6> Contact Information </h6>
                <Row>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> Phone 1 </Form.Label>{" "}
                      <Form.Control
                        type="text"
                        name="phone1"
                        value={formValues.phone1}
                        onChange={handleChange}
                      />{" "}
                      {formErrors.phone1 !== "" ? (
                        <p className="error"> {formErrors.phone1} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> Phone 2 </Form.Label>{" "}
                      <Form.Control
                        type="text"
                        name="phone2"
                        value={formValues.phone2}
                        onChange={handleChange}
                      />{" "}
                      {formErrors.phone2 !== "" ? (
                        <p className="error"> {formErrors.phone2} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> Email </Form.Label>{" "}
                      <Form.Control
                        type="text"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                      />{" "}
                      {formErrors.email !== "" ? (
                        <p className="error"> {formErrors.email} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                </Row>
                <hr />
                <h6> Address </h6>{" "}
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> Address Line </Form.Label>{" "}
                      <Form.Control
                        type="text"
                        name="addressLine"
                        value={formValues.addressLine}
                        onChange={handleChange}
                      />{" "}
                      {formErrors.addressLine !== "" ? (
                        <p className="error"> {formErrors.addressLine} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> State </Form.Label>{" "}
                      <Form.Select
                        type="text"
                        name="state"
                        onChange={(e) => {
                          getCityByStateId(e.target.value);
                          handleChange(e);
                        }}
                      >
                        <option value=""> Select State </option> {stateList}{" "}
                      </Form.Select>{" "}
                      {formErrors.state !== "" ? (
                        <p className="error"> {formErrors.state} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> City </Form.Label>{" "}
                      <Form.Select name="city" onChange={handleChange}>
                        <option value=""> Select City </option> {cityList}{" "}
                      </Form.Select>{" "}
                      {formErrors.city !== "" ? (
                        <p className="error"> {formErrors.city} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={4} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> PinCode </Form.Label>{" "}
                      <Form.Control
                        type="text"
                        name="pinCode"
                        value={formValues.pinCode}
                        onChange={handleChange}
                      />{" "}
                      {formErrors.pinCode !== "" ? (
                        <p className="error"> {formErrors.pinCode} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                </Row>
                <hr />
                <h6> Communication Preferences </h6>{" "}
                <Row>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> Automated Reminder </Form.Label>{" "}
                      <Form.Select
                        type="text"
                        name="autoReminder"
                        onChange={handleChange}
                      >
                        <option value=""> Select Reminder </option>{" "}
                        <option> SMS / Email </option>{" "}
                      </Form.Select>{" "}
                      {formErrors.autoReminder !== "" ? (
                        <p className="error"> {formErrors.autoReminder} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> Appointment Confirmation </Form.Label>{" "}
                      <Form.Select
                        type="text"
                        name="appointConfirm"
                        onChange={handleChange}
                      >
                        <option value="">
                          Select Appointment Confirmation{" "}
                        </option>{" "}
                        <option> Email </option>{" "}
                      </Form.Select>{" "}
                      {formErrors.email !== "" ? (
                        <p className="error"> {formErrors.appointConfirm} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                </Row>
                <hr />
                <h6> Work Information </h6>
                <Row>
                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label> Role </Form.Label>{" "}
                      <Form.Select name="role" onChange={handleChange}>
                        {" "}
                        {/* <option>Massage Therapist</option> */}{" "}
                        <option> Select Role </option> {RoleList}{" "}
                      </Form.Select>{" "}
                      {formErrors.role !== "" ? (
                        <p className="error"> {formErrors.role} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                </Row>
                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <Button
                        className="btn btn-theme pl-2 pr-2 ml-0"
                        onClick={handleSubmit}
                      >
                        Next{" "}
                      </Button>{" "}
                    </div>{" "}
                  </Col>{" "}
                </Row>{" "}
              </Form>{" "}
            </div>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
    </div>
  );
};

// export default AddStaffOnboarding;
const mapStateToProps = (state) => ({
  isLoading: state.loading.isLoading,
  staffOnboardingData: state.staffOnboarding.staffOnboardingData,
  staffOnboardingErr: state.staffOnboarding.staffOnboardingErr,
  status: state.staffOnboarding.status,
});

const mapDispatchToProps = (dispatch) => ({
  staffAddOnboarding: (formValues) => dispatch(staffAddOnboarding(formValues)),
  // clearStaffLogin : ()=>dispatch(clearStaffLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddStaffOnboarding));
