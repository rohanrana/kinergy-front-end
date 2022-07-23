import React, { useState } from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import ArrowRight from "../../images/arrow-right-circle.png";
import Mobileotp from "../../images/mobile-otp.png";
import OTPInput, { ResendOTP } from "otp-input-react";
import { isEmpty } from "lodash";
import { verifyOTPViaEmail, verifyOTPViaMobile } from "../../Services/customer";
import Loader from "../../Components/Loader/Loader";
import {
  getErrorObject,
  successToast,
  verifyObject,
} from "../../utilities/utils";
import { appRoutesConst } from "../../App/navigation";
import { useNavigate } from "react-router";

export function OTPModal(props) {
  const [OTP, setOTP] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigateTo = useNavigate();
  console.log("OTP", OTP);

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
      console.log("response", response);
      if (response.data.response_message) {
        successToast({
          content: verifyObject(response, "data.response_message", "Success"),
        });
        setLoading(false);
        if (props.isNewUser) {
          navigateTo(appRoutesConst.newUserSignUp);
        } else {
          navigateTo(appRoutesConst.appointmentFor);
        }
      }
    } catch (error) {
      const { message } = getErrorObject(error);
      errorToast({ content: message });
      setLoading(false);
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
                OTPLength={4}
                otpType="number"
                disabled={false}
                secure
                inputClassName="form-control otp-custom-input"
              />
            </div>
            {/* <ResendOTP
              maxTime={60}
              renderButton={() => {
                return (
                  <span className="float-right">
                    <a href="#/">Resend</a>
                  </span>
                );
              }}
              renderTime={(d) => {
                console.log("d", d);
                return (
                  <span className="float-right">
                    <a href="#/">{d}</a>
                  </span>
                );
              }}
              onResendClick={() => console.log("Resend clicked")}
            /> */}
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

          <p className="otp-timeline">
            01:60{" "}
            <span className="float-right">
              <a href="#/">Resend</a>
            </span>
          </p>
          {props.otp && <p>OTP : {props.otp}</p>}
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
                    Next <img src={ArrowRight} alt={ArrowRight} />
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
