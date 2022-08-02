/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { Container, Row, Col, Button } from "react-bootstrap";
import Call from "../../images/call.png";
// import ArrowRight from "../../images/arrow-right-circle.png";
import AppointmentDetailsSection from "../../Components/common/AppointmentDetailsSection";
import BackButton from "../../Components/common/BackButton";
import {
  // bookAppointment,
  getProvidersAvailability,
} from "../../Services/appointments";
import { useDispatch, useSelector } from "react-redux";
import {
  errorToast,
  getErrorObject,
  verifyObject,
} from "../../utilities/utils";
import Loader from "../../Components/Loader/Loader";
import { actionTypes } from "../../Reducers/localStore";
import { appRoutesConst } from "../../App/navigation";
import { useNavigate } from "react-router";

const BookAppointment = () => {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  const navigate = useNavigate(false);
  const [state, setState] = useState({
    loading: false,
    timeSlots: [],
    selectedTimeSlot: null,
    selectedSlotID: null,
    bookingAppointment: false,
  });
  const localStore = useSelector((state) => state.localStore);
  const dispatch = useDispatch();

  const provider_id = verifyObject(localStore, "selectedProviders._id", null);
  const service_id = verifyObject(localStore, "selectedService._id", null);
  const customer_id = verifyObject(localStore, "clientDetails._id", null);
  const appointmentBookingDetails = verifyObject(
    localStore,
    "appointmentBookingDetails",
    null
  );

  useEffect(() => {
    _getProvidersAvailibility();
  }, []);

  const _getProvidersAvailibility = async () => {
    try {
      // let phone = JSON.parse(localStorage.getItem("otp-phone"));
      await setState({ ...state, loading: true });
      let response = await getProvidersAvailability({
        provider: provider_id,
      });
      console.log("response", response);
      let timeSlots = verifyObject(response, "data.result[0].intervals", []);
      // let serviceName = verifyObject(response, "data.result[0].title", []);
      // console.log("initialConsultation", priceDetails);
      await setState({
        ...state,
        timeSlots: timeSlots,
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

  // const _bookAppointment = async () => {
  //   try {
  //     // let phone = JSON.parse(localStorage.getItem("otp-phone"));
  //     await setState({ ...state, bookingAppointment: true });
  //     let response = await bookAppointment({
  //       appointmentType: "INITIAL",
  //       service: service_id,
  //       // servicePrice: "62beb78c63f710d3ea5b01c4",
  //       serviceDuration: "60",
  //       serviceAmount: "100",
  //       appointmentDate: moment(dateState).format("YYYY-MM-DD"),
  //       appointmentTime: state.selectedTimeSlot,
  //       customer: customer_id,
  //       provider: provider_id,
  //       case: null,
  //       amount: "100",
  //       taxAmount: "20",
  //       discountAmount: "10",
  //       totalAmount: "110",
  //       status: "PENDING",
  //     });
  //     console.log("response", response);
  //     let timeSlots = verifyObject(response, "data.result[0].intervals", []);
  //     // let serviceName = verifyObject(response, "data.result[0].title", []);
  //     // console.log("initialConsultation", priceDetails);
  //     await setState({
  //       ...state,
  //       timeSlots: timeSlots,
  //       bookingAppointment: false,
  //     });
  //   } catch (error) {
  //     const { message } = getErrorObject(error);
  //     errorToast({
  //       content: message,
  //     });
  //     setState({
  //       ...state,
  //       bookingAppointment: false,
  //       appointmentDate: moment(dateState).format("YYYY-MM-DD"),
  //       // timeSlots: [],
  //     });
  //   }
  // };

  const _handleAppointment = () => {
    dispatch({
      type: actionTypes.SET_APPOINTMENT_BOOKING_DETAIL,
      payload: {
        ...appointmentBookingDetails,
        appointmentTime: state.selectedTimeSlot,
        appointmentDate: moment(dateState).format("YYYY-MM-DD"),
        customer: customer_id,
        provider: provider_id,
        service: service_id,
      },
    });
    navigate(appRoutesConst.consentForm);
  };

  const handleSlot = (slot, slotID) => {
    setState({ ...state, selectedTimeSlot: slot, selectedSlotID: slotID });
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
                <h5 className="text-center">Select Date & Time</h5>

                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <Calendar value={dateState} onChange={changeDate} />

                    <div className="d-flex mt-3">
                      <div className="d-flex-1-icon mr-2">
                        <img src={Call} alt={Call} />
                      </div>
                      <div className="d-flex-2-detail pl-2">
                        <p className="m-0">
                          <b>
                            If you are unable to find a date and time that is
                            feasible for you or need assistance in booking your
                            appointment, please call us at... (000)-000-0000
                          </b>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={4} xs={12}>
                    <div className="current-date-details">
                      <h6 className="current-date-text">
                        <b>{moment(dateState).format("MMMM Do YYYY")}</b>
                      </h6>
                      {state.loading && <Loader />}

                      <ul className="time-buttons">
                        {!state.loading &&
                          state.timeSlots.map((d) => {
                            return (
                              <li
                                onClick={() =>
                                  handleSlot(`${d.from}-${d.to}`, d._id)
                                }
                              >
                                <a
                                  className={`cursor-pointer ${
                                    d._id === state.selectedSlotID &&
                                    "active-timeslot"
                                  }`}
                                >{`${d.from}-${d.to}`}</a>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center mt-3">
                      <Button
                        disabled={
                          dateState === null || state.selectedTimeSlot === null
                        }
                        className="btn btn-form btn-sm w-100"
                        onClick={_handleAppointment}
                      >
                        {state.bookingAppointment ? (
                          <Loader isButton={true} />
                        ) : (
                          <span>
                            Next <i class="far fa-arrow-alt-circle-right"></i>
                          </span>
                        )}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookAppointment;
