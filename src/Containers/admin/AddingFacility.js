/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import StaffMember from "../../image/staff.png";

const AddingFacility = () => {


  let intialState = {
    facilityName: "",
    location: "",
    email: "",
    openHours: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
    status: "",
    phones: [],
    elemntArray: [{
      phone: "",
      phoneType: ""
    }]
  }
  const [state, setState] = useState(intialState)

  const addNewPhoneInfo = () => {
    setState({
      ...state, elemntArray: [...state.elemntArray, {
        phone: "",
        phoneType: ""
      }]
    })
  }

  const handleInputChange = (e, index) => {
    let { elemntArray } = state;
    const { name, value } = e.target;
    const list = [...elemntArray];

    list[index][name] = value;
    setState({ ...state, elemntArray: list });
  };
  return (
    <div className="clients">

      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <h5 className="pb-1 mt-3">Add New Facility</h5>
            <div className="appointment-card mt-0">
              <h6 className="mb-3">Facility Detail</h6>
              <Form>
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Facility Name" name="facilityName" value={state.facilityName} />
                      {state.errors &&
                        <span className="validate-danger">
                          {state.errors.facilityName}
                        </span>}
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Location" name="location" value={state.location} />
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Opening Hours" name="openHours" value={state.openHours} />
                    </Form.Group>
                  </Col>

                  <hr />

                  <h6 className="mb-3">Contact Information</h6>
                </Row>

                <Row>
                  {state.elemntArray.map((el, i) => {
                    return <Fragment>
                      <Col lg={4} sm={4} xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Select onChange={(e) => handleInputChange(e, i)} name="phoneType" value={el.phoneType}>
                            <option>Phone Type</option>
                            <option value="1">Mobile</option>
                            <option value="2">Home</option>
                            <option value="3">Work</option>
                            <option value="4">Fax</option>
                            <option value="5">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col lg={4} sm={4} xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Control onChange={(e) => handleInputChange(e, i)} name="phone" value={el.phone} placeholder="Phone Number" />
                        </Form.Group>
                      </Col>
                      {i === 0 && <Col lg={4} sm={4} xs={12}>
                        <h5 className="mb-0 mt-2">
                          <a onClick={addNewPhoneInfo} className="text-dark">
                            <i className="fas fa-plus-circle"></i>
                          </a>
                        </h5>
                      </Col>}
                    </Fragment>
                  })}




                </Row>
                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Email" name="email" value={state.email} />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <hr />

                  <h6 className="mb-3">Address</h6>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Address" name="address" value={state.address} />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select name="city" value={state.city} >
                        <option>City</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select name="state" value={state.state}>
                        <option>State</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Zip Code" name="pincode" value={state.pincode} />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <hr />
                  <h6 className="mb-3">Upload Profile Image</h6>

                  <Col lg={2} sm={3} xs={12}>
                    <div className="staff-img">
                      <img src={StaffMember} alt={StaffMember} />
                    </div>
                  </Col>
                  <Col lg={10} sm={9} xs={12}>
                    <div className="mt-5">
                      <Button className="btn btn-theme btn-sm">
                        Browse for file
                      </Button>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <Button className="btn btn-theme-white pl-2 pr-2">
                        Cancel
                      </Button>
                      <Button className="btn btn-theme pl-2 pr-2 ml-2">
                        Save
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddingFacility;
