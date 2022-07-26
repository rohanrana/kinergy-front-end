import React from "react";
import { Modal } from "react-bootstrap";
import Service1 from "../../images/service1.jpg";
import BackArrow from "../../images/back-arrow.png";
import Profile from "../../images/profile.png";
import Clock from "../../images/clock.png";
import InfoIcon from "../../images/Info.png";
import { isArray, map } from "lodash";
import { verifyObject } from "../../utilities/utils";

export default function ProviderDetailModal(props) {
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

        <div className="profile-details-row">
          <div className="profile-detail-col-1">
            <img src={Profile} alt={Profile} />
            <h4 className="mt-3">About</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusm od tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="profile-detail-col-2">
            <h5>Profile</h5>
            <h6>
              {verifyObject(props.selectedProvider, "facilityName", null)}
            </h6>
            <p>{props.serviceTitle}</p>
            <p>CAT(C), LAT, ATC, BPE-AT</p>
            <h5>Speciality</h5>
            <ul>
              <li>Physiotheraphy</li>
              <li>Vestibular Rehabilitation</li>
            </ul>
            <h5>Experience</h5>
            <p>5 years</p>
            <h5>Languages</h5>
            <p>English</p>
            <h5>Contact</h5>

            {props.selectedProvider &&
              props.selectedProvider.contact &&
              isArray(props.selectedProvider.contact) &&
              props.selectedProvider.contact[0] && (
                <p>
                  {map(
                    props.selectedProvider.contact[0].phone,
                    "phone"
                  ).toString()}{" "}
                  <br />
                  {props.selectedProvider.contact[0].email}
                </p>
              )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
