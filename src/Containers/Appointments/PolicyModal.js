/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col, Modal } from "react-bootstrap";
import Run from "../../images/about2.svg";
import { baseURL } from "../../Services";
import PolicyImg from "../../images/policy.png";

export function PolicyModal(props) {
  //   let { serviceCategory } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <a className="close-modal-btn" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </a>
        <div className="policy-desc-container">
          <Row>
            <Col className="text-center">
              <div>
                <img src={PolicyImg} alt={PolicyImg} />
                <h3>Attendance/Cancellation Policy</h3>
              </div>
              <p>
                Kinergy Sports Medicine and Performance strives to provide all
                our clients with the highest quality of service at all times. We
                aim to provide you with appointments that are accommodating to
                your schedule, and we expect you to be on time for your
                scheduled appointments.
              </p>
            </Col>
            <Col>
              <p>
                If you are more than thirty (30) minutes late for an appointment
                without advanced notification, the appointment will be
                cancelled, and the full appointment fee will be charged
              </p>
              <p>
                To make sure we do not run behind on our schedule, in the event
                you arrive late for an appointment, you will not be granted
                additional appointment time for the time you have missed.
                Additionally, the full appointment fee will be charged.
              </p>
              <p>
                A scheduled appointment MUST BE CANCELLED AT LEAST TWENTY-FOUR
                (24) HOURS IN ADVANCE, or the full appointment fee will be
                charged.
              </p>
              <p>
                If you cancel an appointment less than twenty-four (24) hours in
                advance or do not show for an appointment, a full appointment
                fee will be charged.
              </p>
              <p>
                Failure to be on time or to show up for an appointment without
                providing advanced notification will result in the full
                appointment fee being charged for that appointment. Furthermore,
                three (3) consecutive absences without advanced notification
                will result in the cancellation of all your remaining scheduled
                appointments. All cancellations and absences will be documented
                in your client record. If appropriate, we will report all
                absences to your physician and insurance company or third party
              </p>
            </Col>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
}
