/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Container, Row, Col } from "react-bootstrap";
import AppointmentDetailsSection from "../../Components/common/AppointmentDetailsSection";
import BackButton from "../../Components/common/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { currencies, verifyObject } from "../../utilities/utils";
import VisaImg from "../../images/visa.png";
import { PolicyModal } from "./PolicyModal";
import { actionTypes } from "../../Reducers/localStore";
import { BookingConfirmationModal } from "./BookingConfirmatiomModal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./StripeGateway/CheckoutForm";
import PayPalGateway from "./PayPal/PayPalGateway";
import { STRIP_TOKEN } from "../../Constants/common";

const stripePromise = loadStripe(`${STRIP_TOKEN}`);

export default function PaymentMethodeScreen() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  const [state, setState] = useState({
    couponCode: "",
    paymentMethod: null,
    cardName: "",
    cardNumber: "",
    cardExpiration: "",
    cardSecurityCode: "",
  });
  const localStore = useSelector((state) => state.localStore);
  const dispatch = useDispatch();
  const amount = verifyObject(
    localStore,
    "appointmentBookingDetails.price",
    null
  );

  const isSeenPolicy = verifyObject(localStore, "isSeenPolicy", false);

  const _handleCheckbox = (e) => {
    e.preventDefault();

    if (e.target.checked) {
      setModalShow(true);
      dispatch({
        type: actionTypes.ON_SEEN_POLICY,
        payload: true,
      });
    }
  };

  // const handleChange = async (e, name) => {
  //   e.preventDefault();

  //   let errors = null;

  //   if (state.errors) {
  //     errors = Object.assign("", state.errors);
  //     delete errors[name ? name : e.target.name];
  //   }
  //   await setState({
  //     ...state,
  //     [name ? name : e.target.name]: e.target.value,
  //     errors: { ...state.errors, [name ? name : e.target.name]: null },
  //   });
  // };

  // const _handleSubmit = async (e) => {
  //   let data = {
  //     cardName: state.cardName,
  //     cardNumber: state.cardNumber,
  //     cardExpiration: state.cardExpiration,
  //     cardSecurityCode: state.cardSecurityCode,
  //   };
  //   const errors = ValidateCreditCardInput(data);

  //   if (!errors.isValid) {
  //     setState({ ...state, errors: errors.errors });
  //   } else {
  //     // let payload = {
  //     //   cardName: state.cardName,
  //     //   cardNumber: state.cardNumber,
  //     //   cardExpiration: state.cardExpiration,
  //     //   cardSecurityCode: state.cardSecurityCode,
  //     // };
  //     //   try {
  //     //     // let phone = JSON.parse(localStorage.getItem("otp-phone"));
  //     //     await setState({ ...state, loading: true });
  //     //     let response = await registerNewCustomer(payload);
  //     //     let user = verifyObject(response, "data.result", null);
  //     //     console.log("respoinse", response);
  //     //     console.log("user", user);
  //     //     if (user) {
  //     //       dispatch({
  //     //         type: sessionTypes.LOGIN_SUCCESS,
  //     //         payload: { token: user.jwtToken, user: user },
  //     //       });
  //     //       navigate(`${appRoutesConst.appointmentFor}`);
  //     //     }
  //     //     await setState({ ...state, signingUpResponse: response });
  //     //   } catch (error) {
  //     //     if (error.data && error.data.errors && isArray(error.data.errors)) {
  //     //       console.log("errrr", error.data.errors);
  //     //       setState({
  //     //         ...state,
  //     //         loading: false,
  //     //         serverErrors: error.data.errors,
  //     //       });
  //     //     }
  //     //   }
  //   }
  // };

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

                <div className="mt-5">
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
                        <div className="payment-item">
                          <h6>Visa/ Mastercards</h6>

                          <span>
                            <input
                              checked={state.paymentMethod === "visa"}
                              type="checkbox"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </span>
                  {/* <span onClick={() => handleMethod("paypal")}>
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
                        <div className="payment-item">
                          <h6>PayPal</h6>
                          <span>
                            <input
                              checked={state.paymentMethod === "paypal"}
                              type="checkbox"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </span> */}
                  <PayPalGateway
                    handlePaymentMethod={() => {
                      setState({ ...state, paymentMethod: null });
                    }}
                    amount={amount}
                  />

                  {/* {state.paymentMethod === "paypal" && (
                    <PayPalGateway amount={amount} />
                  )} */}

                  {state.paymentMethod === "visa" && (
                    <div>
                      <Elements stripe={stripePromise}>
                        <CheckoutForm
                          isSeenPolicy={isSeenPolicy}
                          _handleCheckbox={_handleCheckbox}
                          confirmBooking={() => setModalShow2(true)}
                        />
                      </Elements>
                    </div>
                  )}

                  {/* {state.paymentMethod === "visa" && (
                    <Fragment>
                      <Row>
                        <Col lg={12} sm={12} xs={12}>
                          <Form.Group className="mb-3">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control
                              onChange={handleChange}
                              name={"cardNumber"}
                              value={state.cardNumber}
                              placeholder="Card Number"
                            />
                         
                          </Form.Group>
                        </Col>
                        <Col lg={12} sm={12} xs={12}>
                          <Form.Group className="mb-3">
                            <Form.Label>Name on Credit Card</Form.Label>
                            <Form.Control
                              onChange={handleChange}
                              name={"cardName"}
                              value={state.cardName}
                              placeholder="Name on Credit Card"
                            />
                            {state.errors && (
                              <span className="text-danger">
                                {state.errors.cardName}
                              </span>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Expiry Date</Form.Label>

                            <InputMask
                              mask="99/99"
                              onChange={(e) =>
                                handleChange(e, "cardExpiration")
                              }
                              name={"cardExpiration"}
                              value={state.cardExpiration}
                            >
                              {(inputProps) => (
                                <Form.Control placeholder="Expiry Date" />
                              )}
                            </InputMask>

                            {state.errors && (
                              <span className="text-danger">
                                {state.errors.cardExpiration}
                              </span>
                            )}
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control
                              onChange={handleChange}
                              name={"cardSecurityCode"}
                              value={state.cardSecurityCode}
                              placeholder="CVV"
                            />
                            {state.errors && (
                              <span className="text-danger">
                                {state.errors.cardSecurityCode}
                              </span>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                    </Fragment>
                  )} */}
                  {/* <span
                    style={{ display: "flex" }}
                    className="float-left mt-10"
                  >
                    {isSeenPolicy ? (
                      <span>
                        <img src={LockImg} alt={LockImg} />
                      </span>
                    ) : (
                      <span>
                        <input onChange={_handleCheckbox} type="checkbox" />
                      </span>
                    )}

                    <p className="ml-10">
                      Review the Attendance/ Cancellation Policy
                    </p>
                  </span>
                  <Row>
                    <Col Col lg={12} sm={12} xs={12}>
                      <div className="text-center mt-3">
                        <Button
                          disabled={!isSeenPolicy}
                          className="btn btn-form btn-sm w-100"
                          onClick={() => {
                            _handleSubmit();
                          }}
                        >
                          <span>
                            Proceed{" "}
                            <i class="far fa-arrow-alt-circle-right"></i>
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row> */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <PolicyModal show={modalShow} onHide={() => setModalShow(false)} />
      <BookingConfirmationModal
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
    </div>
  );
}
