import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";
import { api } from "../../../utils/api";

import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { facilityAdd } from "../../../store/facility/actions";
import Loader from "../../../cmmon_module/Loader";

import StaffLogin from "../../logins/StaffLogin";
import useToken from "../../useToken";

const AddingFacility = (props) => {
  const initialValues = {
    facilityName: "",
    state: "",
    city: "",
    pinCode: "",
    contact: "",
    fax: "",
    email: "",
  };

  const [stateList, setStateList] = useState(null);
  const [cityList, setCityList] = useState(null);

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", [name], "value", value);
    setFormValues({ ...formValues, [name]: value });

    console.log(formValues);
  };

  const formSubmitHandler = () => {
    props.facilityAdd(formValues);
  };

  
    console.log(props.facilityValidationErr);
    // if (props.facilityErr && props.facilityValidationErr.response_code === 422) {
    //   setFormErrors({});
    //   const errors = {};
    //   props.facilityErr.errors.map((x, index) => {
    //     if (x.title == "facilityName") {
    //       errors[x.title] = x.msg;
    //     } else if (x.title == "email") {
    //       errors[x.title] = x.msg;
    //     }
    //   });
    //   setFormErrors(errors);
    // }
  

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
                    <option value=""> State Not Found </option>
                  )
                ) : (
                  <option value=""> State Not Found </option>
                )
              ) : (
                <option value=""> State Not Found </option>
              );
              setStateList(data);
            } else {
              setStateList(<option value=""> State Not Found </option>);
            }
          });
      } catch (err) {
        setStateList(<option value=""> State Not Found </option>);
      }
    }
  }, [stateList]);

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
              <option value=""> City Not Found </option>
            )
          ) : (
            <option value=""> City Not Found </option>
          )
        ) : (
          <option value=""> City Not Found </option>
        );
        setCityList(data);
      } else {
        setCityList(<option value=""> City Not Found </option>);
      }
    });
  };

  //============ Check AUTH-TOKEN===================
  const { token, setToken } = useToken();
  if (!token) {
    return <StaffLogin />;
  }
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>{" "}
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card mt-3">
              <h5 className="pb-2"> Adding Facility </h5>{" "}
              <Form>
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        placeholder="Elizabeth"
                        name="facilityName"
                        onChange={handleChange}
                        value={formValues.facilityName}
                      />{" "}
                      {formErrors.facilityName !== "" ? (
                        <p className="error"> {formErrors.facilityName} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                  <h5 className="mt-3 mb-3"> Address Details </h5>{" "}
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select
                        name="state"
                        onChange={(e) => {
                          getCityByStateId(e.target.value);
                          handleChange(e);
                        }}
                      >
                        <option value=""> Select State </option> {stateList}{" "}
                      </Form.Select>{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select name="city" onChange={handleChange}>
                        <option value=""> Select City </option> {cityList}{" "}
                      </Form.Select>{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        placeholder="PinCode"
                        name="pinCode"
                        value={formValues.pinCode}
                        onChange={handleChange}
                      />{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                  <h5 className="mt-3 mb-3"> Contact Details </h5>{" "}
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        placeholder="Office Phone"
                        name="contact"
                        value={formValues.contact}
                        onChange={handleChange}
                      />{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        placeholder="Fax"
                        name="fax"
                        onChange={handleChange}
                        value={formValues.fax}
                      />{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={formValues.email}
                      />{" "}
                      {formErrors.email !== "" ? (
                        <p className="error"> {formErrors.email} </p>
                      ) : null}{" "}
                    </Form.Group>{" "}
                  </Col>{" "}
                </Row>{" "}
                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      {" "}
                      {/* <Button className="btn btn-theme-white pl-2 pr-2">
                                                        Cancel
                                                      </Button> */}{" "}
                      <Button
                        className="btn btn-theme pl-2 pr-2 ml-2"
                        onClick={formSubmitHandler}
                      >
                        Save{" "}
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

// export default AddingFacility;
const mapStateToProps = (state) => ({
  isLoading: state.loading.isLoading,
  facilityData: state.facility.facilityData,
  facilityErr: state.facility.facilityErr,
  facilityValidationErr:state.facility.facilityValidationErr,
  status: state.facility.status,
});

const mapDispatchToProps = (dispatch) => ({
  facilityAdd: (formValues) => dispatch(facilityAdd(formValues)),
  // clearStaffLogin : ()=>dispatch(clearStaffLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddingFacility));
