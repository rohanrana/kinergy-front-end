import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { getIntials, verifyObject } from "../../utilities/utils";
import Clock from "../../images/clock.png";
import Service1 from "../../images/service1.jpg";
import DateImage from "../../images/white_cal.png";
import WhiteClock from "../../images/white_clock.png";

import moment from "moment";

export default function AppointmentDetailsSection() {
  const localStore = useSelector((state) => state.localStore);
  const serviceCategory = verifyObject(localStore, "serviceCategory", null);
  const selectedService = verifyObject(localStore, "selectedService", null);
  const selectedProvider = verifyObject(localStore, "selectedProviders", null);

  const clientDetails = verifyObject(localStore, "clientDetails", null);

  const appointmentDuration = verifyObject(
    localStore,
    "appointmentBookingDetails",
    null
  );
  const appointmentDate = verifyObject(
    localStore,
    "appointmentBookingDetails.appointmentDate",
    null
  );

  const appointmentTime = verifyObject(
    localStore,
    "appointmentBookingDetails.appointmentTime",
    null
  );
  return (
    <div className="appointment-detail-col-1">
      {appointmentDuration && (
        <h5>
          Appointment Details{" "}
          <span className="appointmrnt-time">
            <img src={Clock} alt={Clock} />{" "}
            {appointmentDuration && appointmentDuration.duration} min
          </span>
        </h5>
      )}
      {serviceCategory && (
        <div className="appointment-service-row appointment-service-row22">
          <div className="appointment-service-col-1">
            <img src={Service1} alt={Service1} />
          </div>
          <div className="appointment-service-col-22 pl-2">
            <p>{serviceCategory.title}</p>
            <h6>{selectedService.title}</h6>
            <p>{selectedService.description}</p>
          </div>
        </div>
      )}
      {clientDetails && (
        <Fragment>
          <h6 className="text-white mt-5">Client Details</h6>

          <div className="profile-provide-row">
            <div className="profile-provider-col-1">
              <span>
                {getIntials(
                  `${clientDetails.firstName} ${clientDetails.lastName}`
                )}
              </span>
            </div>
            {
              <div className="profile-provider-col-2">
                <h6>
                  {verifyObject(clientDetails, "firstName", null)}{" "}
                  {verifyObject(clientDetails, "lastName", null)}
                </h6>
                <p> {verifyObject(clientDetails, "phone", null)}</p>
                <p> {verifyObject(clientDetails, "email", null)}</p>
              </div>
            }
          </div>
        </Fragment>
      )}
      {}
      {selectedProvider && (
        <Fragment>
          <h6 className="text-white mt-5">Provider:</h6>
          <div className="profile-provide-row">
            <div className="profile-provider-col-1">
              <span>SE</span>
            </div>
            <div className="profile-provider-col-2">
              <h6>{verifyObject(selectedProvider, "facilityName", null)}</h6>
              <p>Atheletic Therapist / Trainer</p>
              <p>Exp. 5y</p>
            </div>
          </div>
        </Fragment>
      )}

      {appointmentTime && (
        <Fragment>
          <h6 className="text-white mt-5">Date and Time</h6>
          <div className="profile-provide-row">
            <div className="profile-provider-col-2">
              <p>
                <span>
                  <img style={{ width: 10 }} src={DateImage} alt={DateImage} />{" "}
                </span>
                <span>{moment(appointmentDate).format("DD/MM/YYYY")}</span>
              </p>
              <p>
                <span>
                  <img
                    style={{ width: 10 }}
                    src={WhiteClock}
                    alt={WhiteClock}
                  />{" "}
                </span>
                <span>{appointmentTime.split("-")[0]}</span>
              </p>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}