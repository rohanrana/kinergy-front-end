import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { verifyObject } from "../../utilities/utils";
import Clock from "../../images/clock.png";
import Service1 from "../../images/service1.jpg";
export default function AppointmentDetailsSection() {
  const localStore = useSelector((state) => state.localStore);
  const serviceCategory = verifyObject(localStore, "serviceCategory", null);
  const selectedService = verifyObject(localStore, "selectedService", null);
  const selectedProvider = verifyObject(localStore, "selectedProviders", null);

  const selectedUser = verifyObject(localStore, "user", null);

  const appointmentDuration = verifyObject(
    localStore,
    "appointmentBookingDetails",
    null
  );
  return (
    <div className="appointment-detail-col-1">
      <h5>
        Appointment Details{" "}
        <span className="appointmrnt-time">
          <img src={Clock} alt={Clock} />{" "}
          {appointmentDuration && appointmentDuration.duration} min
        </span>
      </h5>
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
      {selectedUser && (
        <Fragment>
          <h6 className="text-white mt-5">Client Details</h6>

          <div className="profile-provide-row">
            <div className="profile-provider-col-1">
              <span>CM</span>
            </div>
            {
              <div className="profile-provider-col-2">
                <h6>
                  {verifyObject(selectedUser, "firstName", null)}{" "}
                  {verifyObject(selectedUser, "lastName", null)}
                </h6>
                <p> {verifyObject(selectedUser, "phone", null)}</p>
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
    </div>
  );
}
