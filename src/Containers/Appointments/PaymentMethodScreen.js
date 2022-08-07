/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Call from "../../images/call.png";
import AppointmentDetailsSection from "../../Components/common/AppointmentDetailsSection";
import BackButton from "../../Components/common/BackButton";
import { useSelector } from "react-redux";
import { currencies, verifyObject } from "../../utilities/utils";
import VisaImg from "../../images/visa.png";
import PayPalImg from "../../images/paypal.png";
import { PolicyModal } from "./PolicyModal";

export default function PaymentMethodeScreen() {
  const [modalShow, setModalShow] = React.useState(false);

  const [state, setState] = useState({
    couponCode: "",
    paymentMethod: null,
  });
  const localStore = useSelector((state) => state.localStore);
  const amount = verifyObject(
    localStore,
    "appointmentBookingDetails.price",
    null
  );

  const _handleCheckbox = (e) => {
    if (e.target.checked) {
      setModalShow(true);
    }
  };

  const handleMethod = (method) => {
    setState({ ...state, paymentMethod: method });
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
                <span>Total Amount</span>
                <p>
                  <h6>
                    {currencies.dollor.symbol} {parseInt(amount, 10).toFixed(2)}
                  </h6>
                </p>

                <Form className="mt-5">
                  <span>Select Payment Method</span>
                  <span onClick={() => handleMethod("visa")}>
                    <div className={`appointment-for-row`}>
                      <div className="appointment-for-col-1">
                        <span
                          style={{ backgroundColor: "white" }}
                          className="someone-span"
                        >
                          <img src={VisaImg} alt={VisaImg} />
                        </span>
                      </div>
                      <div className="appointment-for-col-2">
                        <h6>Visa/ Mastercards</h6>

                        <p>
                          <span className="float-right">
                            <input
                              checked={state.paymentMethod === "visa"}
                              type="checkbox"
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                  </span>
                  <span onClick={() => handleMethod("paypal")}>
                    <div className={`appointment-for-row`}>
                      <div className="appointment-for-col-1">
                        <span
                          style={{ backgroundColor: "white" }}
                          className="someone-span"
                        >
                          <img src={PayPalImg} alt={PayPalImg} />
                        </span>
                      </div>
                      <div className="appointment-for-col-2">
                        <h6>PayPal</h6>

                        <p>
                          <span className="float-right">
                            <input
                              checked={state.paymentMethod === "paypal"}
                              type="checkbox"
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                  </span>
                  <span
                    style={{ display: "flex" }}
                    className="float-left mt-10"
                  >
                    <span>
                      <input onChange={_handleCheckbox} type="checkbox" />
                    </span>

                    <p className="ml-10">
                      Review the Attendance/ Cancellation Policy
                    </p>
                  </span>
                  {state.paymentMethod === "visa" && (
                    <Fragment>
                      <Row>
                        <Form>
                          <Col lg={12} sm={12} xs={12}>
                            <Form.Group className="mb-3">
                              <Form.Label>Card Number</Form.Label>
                              <Form.Control
                                onChange={{}}
                                name={"firstName"}
                                value={state.firstName}
                                placeholder="Card Number"
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
                              <Form.Label>Name on Credit Card</Form.Label>
                              <Form.Control
                                onChange={{}}
                                name={"firstName"}
                                value={state.firstName}
                                placeholder="Name on Credit Card"
                              />
                              {state.errors && (
                                <span className="text-danger">
                                  {state.errors.firstName}
                                </span>
                              )}
                            </Form.Group>
                          </Col>
                        </Form>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control
                              onChange={{}}
                              name={"firstName"}
                              value={state.firstName}
                              placeholder="Expiry Date"
                            />
                            {state.errors && (
                              <span className="text-danger">
                                {state.errors.firstName}
                              </span>
                            )}
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control
                              onChange={{}}
                              name={"firstName"}
                              value={state.firstName}
                              placeholder="CVV"
                            />
                            {state.errors && (
                              <span className="text-danger">
                                {state.errors.firstName}
                              </span>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                    </Fragment>
                  )}

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
                            Proceed{" "}
                            <i class="far fa-arrow-alt-circle-right"></i>
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <PolicyModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
