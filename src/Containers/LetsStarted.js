/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import Service1 from "../images/service1.jpg";
import BackArrow from "../images/back-arrow.png";
import ArrowRight from "../images/arrow-right-circle.png";
import Clock from "../images/clock.png";
import Mobileotp from "../images/mobile-otp.png";


function MyVerticallyCenteredModal(props) {
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
                </Col>

                <Col lg={2} sm={2} xs={2}>
                    <Form.Group>
                        <Form.Control placeholder="0" className="text-center" />
                    </Form.Group>
                </Col>
            </Row>

            <p className="otp-timeline">01:60 <span className="float-right"><a href="#/">Resend</a></span></p>
            </Form>
          <Row>
            <Col Col lg={12} sm={12} xs={12}>
              <div className="text-center mt-3">
              <Button className="btn btn-form btn-sm pl-5 pr-5">Next <img src={ArrowRight} alt={ArrowRight} /></Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }


const LetsStarted = () => {

    const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="therapy-services">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="appointment-details-row">
              <div className="appointment-detail-col-1">
                <h5>Appointment Details <span className="appointmrnt-time"><img src={Clock} alt={Clock} /> 30 min</span></h5>
                <div className="appointment-service-row appointment-service-row22">
                  <div className="appointment-service-col-1">
                    <img src={Service1} alt={Service1} />
                  </div>
                  <div className="appointment-service-col-22 pl-2">
                    <p>Therapy Services</p>
                    <h6>Athletic Therapy / Physiotherapy</h6>
                    <p>
                      Lorem impus dolar sit amet, consectetur adipiscing edit,
                      sed do eiusmod tempor incidisunt ut lobor et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="appointment-detail-col-2">
                <p>
                  <a href="/therapy-services">
                    <img src={BackArrow} alt={BackArrow} className="mr-2" />
                    Previous
                  </a>
                </p>
                <h5 className="text-center">Let's get started</h5>
                <p className="text-center">
                  We will send you a One Time Password (OTP) to your phone
                  number.
                </p>
                <Form className="mt-5">
                  <Form.Group>
                    <Form.Label>Enter Your Cell Phone Number*</Form.Label>
                    <Form.Control placeholder="(000-000-0000)" />
                    <p className="text-right mt-2 mb-0 link-color-form"><a href="/using-email">Enter using email?</a></p>
                  </Form.Group>

                  <Button className="btn btn-form w-100 mt-5" onClick={() => setModalShow(true)}>Next <img src={ArrowRight} alt={ArrowRight} /></Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default LetsStarted;
