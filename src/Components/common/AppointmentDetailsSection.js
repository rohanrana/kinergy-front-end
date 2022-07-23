import React from "react";
import { useSelector } from "react-redux";
import { verifyObject } from "../../utilities/utils";
import Clock from "../../images/clock.png";
import InfoIcon from "../../images/Info.png";
import User from "../../images/user.png";
import ArrowForward from "../../images/arrow-forward.png";
import Users from "../../images/users.png";
import Service1 from "../../images/service1.jpg";
export default function AppointmentDetailsSection() {
  const localStore = useSelector((state) => state.localStore);
  const serviceCategory = verifyObject(localStore, "serviceCategory", null);
  const selectedService = verifyObject(localStore, "selectedService", null);
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
    </div>
  );
}
