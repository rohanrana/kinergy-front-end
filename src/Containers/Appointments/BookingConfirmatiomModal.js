/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, Modal } from "react-bootstrap";
import SuccessImg from "../../images/payment_success.png";
import PrintImg from "../../images/print.png";

export function BookingConfirmationModal(props) {
  //   let { serviceCategory } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      //   centered
      className="booking-confirmatiom-modal"
      contentClassName="booking-confirmatiom-content"
    >
      <Modal.Body className="p-0 ">
        <a className="close-modal-btn" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </a>
        <div className="policy-desc-container">
          <img src={SuccessImg} alt={SuccessImg} />
          <div className="booking-confirmation-data">
            <h6>$110.00</h6>
            <h6>Payment Success</h6>
            <span className="font-10">
              Thank you for booking with Kinergy Sports Medicine and Performance
            </span>
            <br />
            <br />

            <span className="font-bold">
              Please review/complete your Client Portal Registration
            </span>
            <br />
            <div className="booking-time-date">
              <span>{"07/02/2022"}</span>
              <span>{"07:00 PM"}</span>
            </div>
            <div className="conf-btn-container">
              <Button className="btn btn-form btn-print">
                <span>
                  Print Invoice <img src={PrintImg} alt={PrintImg} />
                </span>
              </Button>
              <Button className="btn btn-form btn-confirm-appt">
                <span>
                  Next <i class="far fa-arrow-alt-circle-right"></i>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
