/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
// import ArrowRight from "../../images/arrow-right-circle.png";
import Mobileotp from "../../images/mobile-otp.png";
import OTPInput, { ResendOTP } from "otp-input-react";
import { isEmpty } from "lodash";
import {
  resendOTPMail,
  resendOTPMobile,
  verifyOTPViaEmail,
  verifyOTPViaMobile,
} from "../../Services/customer";
import Loader from "../../Components/Loader/Loader";
import {
  errorToast,
  getErrorObject,
  secondsToTime,
  successToast,
  verifyObject,
} from "../../utilities/utils";
import { appRoutesConst } from "../../App/navigation";
import { useNavigate } from "react-router";
import { sessionTypes } from "../../Reducers/session";
import { useDispatch } from "react-redux";

export function OTPModal(props) {
  const [OTP, setOTP] = useState("");
  const [ResentOTP, setResendOTP] = useState("");

  const [isLoading, setLoading] = useState(false);
  const [isResending, setResendLoading] = useState(false);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleOTPVerification = async () => {
    try {
      // let phone = JSON.parse(localStorage.getItem("otp-phone"));
      setLoading(true);
      let response = null;
      if (props.loginModePhone) {
        response = await verifyOTPViaMobile({
          phone: props.phone,
          otp: OTP,
        });
      } else {
        response = await verifyOTPViaEmail({
          email: props.email,
          otp: OTP,
        });
      }
      if (response.data.response_message) {
        successToast({
          content: verifyObject(response, "data.response_message", "Success"),
        });
        setLoading(false);
        if (props.isNewUser) {
          navigateTo(`/new-user-registration/${props.phone}`);
        } else {
          console.log("USER", verifyObject(response, "data.result", null));
          const user = verifyObject(response, "data.result", null);
          if (user) {
            dispatch({
              type: sessionTypes.LOGIN_SUCCESS,
              payload: { token: user.jwtToken, user: user },
            });
            navigateTo(`${appRoutesConst.appointmentFor}`);
          }
        }
      }
    } catch (error) {
      const { message } = getErrorObject(error);
      errorToast({ content: message });
      setLoading(false);
    }
  };
  const resendOTP = async () => {
    try {
      // let phone = JSON.parse(localStorage.getItem("otp-phone"));
      setResendLoading(true);
      let response = null;
      if (props.loginModePhone) {
        response = await resendOTPMobile({
          phone: props.phone,
        });
      } else {
        response = await resendOTPMail({
          email: props.email,
        });
      }
      if (response.data) {
        successToast({
          content: verifyObject(
            response,
            "data.response_message.message",
            "Success"
          ),
        });
        setResendOTP(verifyObject(response, "data.response_message.otp", null));
        setResendLoading(false);
      }
    } catch (error) {
      const { message } = getErrorObject(error);
      errorToast({ content: message });
      setResendLoading(false);
    }
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-5 text-center">
        <a className="close-modal-btn" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </a>
        <img src={Mobileotp} alt={Mobileotp} height="120" />
        <h6 className="mt-3">Enter your OTP</h6>
        <p>Please enter the OTP we have sent you on your cell phone / email</p>
        <Form>
          <Row>
            <div className="otp-input-container">
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                secure
                inputClassName="form-control otp-custom-input"
              />
            </div>
            <p className="otp-timeline">
              <ResendOTP
                maxTime={20}
                renderButton={(d) => {
                  if (d.remainingTime === 0) {
                    return (
                      <span className="float-right">
                        <a onClick={d.onClick} href="#">
                          {isResending ? "Resending..." : "Resend"}
                        </a>
                      </span>
                    );
                  } else {
                    return (
                      <span className="float-right">
                        {isResending ? "Resending..." : "Resend"}
                      </span>
                    );
                  }
                }}
                renderTime={(d) => {
                  let time = secondsToTime(d);
                  return (
                    <span className="float-right">
                      <a href="#/">
                        {time.m < 10 ? `0${time.m}` : time.m} :{" "}
                        {time.s < 10 ? `0${time.s}` : time.s}
                      </a>
                    </span>
                  );
                }}
                onResendClick={resendOTP}
              />
            </p>

            {/* <Col lg={2} sm={2} xs={2}>
              <Form.Group>
                <Form.Control placeholder="0" className="text-center" />
              </Form.Group>
            </Col>

            <Col lg={2} sm={2} xs={2}>
              <Form.Group>
                <Form.Control placeholder="0" className="text-center" />
              </Form.Group>
            </Col>

            <Col lg={2} sm={2} xs={2}>
              <Form.Group>
                <Form.Control placeholder="0" className="text-center" />
              </Form.Group>
            </Col>

            <Col lg={2} sm={2} xs={2}>
              <Form.Group>
                <Form.Control placeholder="0" className="text-center" />
              </Form.Group>
            </Col>

            <Col lg={2} sm={2} xs={2}>
              <Form.Group>
                <Form.Control placeholder="0" className="text-center" />
              </Form.Group>
            </Col>

            <Col lg={2} sm={2} xs={2}>
              <Form.Group>
                <Form.Control placeholder="0" className="text-center" />
              </Form.Group>
            </Col> */}
          </Row>

          {/* <p className="otp-timeline">
            01:60{" "}
            <span className="float-right">
              <a href="#/">Resend</a>
            </span>
          </p> */}
          {props.otp && <p>OTP : {ResentOTP ? ResentOTP : props.otp}</p>}
        </Form>
        <Row>
          <Col Col lg={12} sm={12} xs={12}>
            <div className="text-center mt-3">
              <Button
                disabled={isEmpty(OTP)}
                className="btn btn-form btn-sm pl-5 pr-5"
                onClick={handleOTPVerification}
              >
                {isLoading ? (
                  <Loader isButton={true} />
                ) : (
                  <span>
                    {" "}
                    Next <i class="far fa-arrow-alt-circle-right"></i>
                  </span>
                )}
              </Button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
