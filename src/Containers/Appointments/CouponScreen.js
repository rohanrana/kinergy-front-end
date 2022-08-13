/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Call from "../../images/call.png";
import AppointmentDetailsSection from "../../Components/common/AppointmentDetailsSection";
import BackButton from "../../Components/common/BackButton";
import { useSelector } from "react-redux";
import {
  currencies,
  errorToast,
  getErrorObject,
  verifyObject,
} from "../../utilities/utils";
import { appRoutesConst } from "../../App/navigation";
import { useNavigate } from "react-router";
import { applyCoupon } from "../../Services/appointments";

export default function CouponScreen() {
  const [state, setState] = useState({
    couponCode: "",
    loading: false,
    discountedAmounted: null,
    totalAmount: 0,
    tax: 10,
  });

  const navigate = useNavigate();
  const localStore = useSelector((state) => state.localStore);
  const amount = verifyObject(
    localStore,
    "appointmentBookingDetails.price",
    null
  );
  const service_id = verifyObject(localStore, "selectedService._id", null);
  const handleChange = (e) => {
    setState({
      ...state,
      couponCode: e.target.value,
    });
  };

  useEffect(() => {
    setState({ ...state, totalAmount: amount });
  }, []);

  const _applyCoupon = async () => {
    try {
      // let phone = JSON.parse(localStorage.getItem("otp-phone"));
      await setState({ ...state, loading: true });
      let response = await applyCoupon({
        couponCode: state.couponCode,
        serviceId: service_id,
      });
      console.log("response", response);
      let timeSlots = verifyObject(response, "data.result", []);
      // let serviceName = verifyObject(response, "data.result[0].title", []);
      // console.log("initialConsultation", priceDetails);
      await setState({
        ...state,
        totalAmount: amount - verifyObject(timeSlots, "couponValue", 0),
        discountedAmounted: verifyObject(timeSlots, "couponValue", 0),
        loading: false,
      });
    } catch (error) {
      const { message } = getErrorObject(error);
      errorToast({
        content: message,
      });
      setState({
        ...state,
        loading: false,
        // timeSlots: [],
      });
    }
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
                  <Row>
                    <Col lg={12} sm={12} xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Add a gift card or promotion code or voucher
                        </Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name={"couponCode"}
                          className="w-100"
                          value={state.couponCode}
                          placeholder="Enter Coupon Codes"
                        />
                        <br />
                        <button
                          disabled={state.couponCode === "" || state.loading}
                          className="btn btn-form btn-sm  btn btn-primary"
                          onClick={_applyCoupon}
                        >
                          {state.loading ? "Applying..." : "Apply"}
                        </button>
                      </Form.Group>
                    </Col>
                    <Col lg={4} sm={4} xs={12}></Col>
                  </Row>
                  <span>Checkout Summary</span>

                  <Row>
                    <Col>
                      <div className="price-lable-container">
                        <span>Amount</span>
                        <span>Tax</span>
                        {state.discountedAmounted && (
                          <span className="dark">Discount</span>
                        )}
                        <span className="dark">Total Amount</span>
                      </div>
                    </Col>
                    <Col>
                      <div className="price-lable-container">
                        <span>
                          {currencies.dollor.symbol}{" "}
                          {parseInt(amount, 10).toFixed(2)}
                        </span>
                        <span>
                          {currencies.dollor.symbol}{" "}
                          {parseInt(state.tax, 10).toFixed(2)}
                        </span>
                        {state.discountedAmounted && (
                          <span className="dark">
                            {"-"} {currencies.dollor.symbol}{" "}
                            {parseInt(state.discountedAmounted, 10).toFixed(2)}
                          </span>
                        )}
                        <span className="dark">
                          {currencies.dollor.symbol}{" "}
                          {parseInt(state.totalAmount + state.tax, 10).toFixed(
                            2
                          )}
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col Col lg={12} sm={12} xs={12}>
                      <div className="text-center mt-3">
                        <Button
                          // disabled={
                          //   dateState === null || state.selectedTimeSlot === null
                          // }
                          className="btn btn-form btn-sm w-100"
                          onClick={() => {
                            navigate(appRoutesConst.paymentMethods);
                          }}
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
    </div>
  );
}
