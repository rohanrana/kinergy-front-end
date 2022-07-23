import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InfoIcon from "../../images/arrow-2.svg";
import Service2 from "../../images/service2.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import BackButton from "../../Components/common/BackButton";
import { currencies, verifyObject } from "../../utilities/utils";
import { appRoutesConst } from "../../App/navigation";
import { getServiceDetailByByID } from "../../Services/servicesByCateID";
import { isArray } from "lodash";
import Loader from "../../Components/Loader/Loader";
import NotFoundLable from "../../Components/common/NotFoundLable";
import { actionTypes } from "../../Reducers/localStore";

export default function NewAppointmentBooking() {
  const [state, setState] = useState({
    loading: false,
    newBookingDurations: null,
  });
  const dispatch = useDispatch();
  const localStore = useSelector((state) => state.localStore);
  let selectedService = verifyObject(localStore, "selectedService", null);

  useEffect(() => {
    // getServiceCategoryDetail();
    getServiceDetailByID();
  }, []);

  const getServiceDetailByID = async () => {
    if (selectedService) {
      try {
        // let phone = JSON.parse(localStorage.getItem("otp-phone"));
        await setState({ ...state, loading: true });
        let response = await getServiceDetailByByID({
          _id: selectedService._id,
        });
        console.log("response", response);
        let priceDetails = verifyObject(
          response,
          "data.result[0].initialConsultation.priceDetails",
          []
        );
        let serviceName = verifyObject(response, "data.result[0].title", []);
        console.log("initialConsultation", priceDetails);
        await setState({
          ...state,
          newBookingDurations: {
            serviceName: serviceName,
            priceDetails: priceDetails,
          },
        });
      } catch (error) {
        if (error.data && error.data.errors && isArray(error.data.errors)) {
          setState({
            ...state,
            loading: false,
            serverErrors: error.data.errors,
          });
        }
      }
    }
  };
  const setAppointmentBookingDetails = (priceDetails) => {
    dispatch({
      type: actionTypes.SET_APPOINTMENT_BOOKING_DETAIL,
      payload: {
        ...priceDetails,
      },
    });
  };
  return (
    <div className="therapy-services">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="appointment-details-row custom-appt-details-row">
              <div className="appointment-detail-col-2">
                <BackButton />
                <h5 className="text-center">Book a new appointment</h5>
                <p className="text-center">
                  Please select one of the options below
                </p>
                {state.loading && <Loader />}
                {state.newBookingDurations &&
                  state.newBookingDurations.priceDetails &&
                  isArray(state.newBookingDurations.priceDetails) &&
                  state.newBookingDurations.priceDetails.length == 0 && (
                    <NotFoundLable
                      message={"No price and duration detail found"}
                    />
                  )}
                {!state.loading && (
                  <Row>
                    {state.newBookingDurations &&
                      state.newBookingDurations.priceDetails &&
                      isArray(state.newBookingDurations.priceDetails) &&
                      state.newBookingDurations.priceDetails.map((d) => {
                        return (
                          <Fragment>
                            <span
                              onClick={() => setAppointmentBookingDetails(d)}
                            >
                              <Link to={appRoutesConst.loginwithphone}>
                                <div className="appointment-service-row">
                                  <div className="appointment-service-col-1">
                                    <img src={Service2} alt={Service2} />
                                  </div>
                                  <div className="appointment-service-col-2">
                                    <a>
                                      {verifyObject(
                                        state,
                                        "newBookingDurations.serviceName",
                                        ""
                                      )}
                                    </a>
                                    <Fragment>
                                      <div className="price-duration-section">
                                        <span>
                                          <p>{d.duration} mins</p>
                                        </span>
                                        <span>
                                          <p>|</p>
                                        </span>
                                        <span>
                                          <p>
                                            {currencies.dollor.symbol}
                                            {d.price.toFixed(2)}
                                          </p>
                                        </span>
                                      </div>
                                    </Fragment>
                                  </div>
                                  <img
                                    src={InfoIcon}
                                    alt={InfoIcon}
                                    className="info-icons"
                                  />
                                </div>
                              </Link>
                            </span>
                          </Fragment>
                        );
                      })}
                  </Row>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
