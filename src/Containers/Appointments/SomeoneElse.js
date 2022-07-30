/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { appRoutesConst } from "../../App/navigation";
import AppointmentDetailsSection from "../../Components/common/AppointmentDetailsSection";
import BackButton from "../../Components/common/BackButton";
import NotFoundLable from "../../Components/common/NotFoundLable";
import Loader from "../../Components/Loader/Loader";
import { actionTypes } from "../../Reducers/localStore";
import { getExistingProfileList } from "../../Services/customer";
import {
  errorToast,
  getErrorObject,
  verifyObject,
} from "../../utilities/utils";

const SomeoneElse = () => {
  const [state, setState] = useState({
    loading: false,
    newBookingDurations: null,
    existingUsers: [],
  });
  const localStore = useSelector((state) => state.localStore);
  const dispatch = useDispatch();
  let user_id = verifyObject(localStore, "user._id", null);
  //   let user_id = verifyObject(localStore, "user._id", null);

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_CLIENT_DETAILS,
      payload: null,
    });
    // getServiceCategoryDetail();
    getProfileList();
  }, []);

  const getProfileList = async () => {
    try {
      // let phone = JSON.parse(localStorage.getItem("otp-phone"));
      await setState({ ...state, loading: true });
      let response = await getExistingProfileList({
        customerId: user_id,
      });
      console.log("response", response);
      let existingUsers = verifyObject(response, "data.result", []);
      setState({
        ...state,
        loading: false,
      });
      setState({ ...state, existingUsers: existingUsers, loading: false });
    } catch (error) {
      const { message } = getErrorObject(error);
      errorToast({
        content: message,
      });
      setState({
        ...state,
        loading: false,
        existingUsers: [],
      });
    }
  };

  const handleNavigation = (user) => {
    dispatch({
      type: actionTypes.SET_CLIENT_DETAILS,
      payload: user,
    });
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
                <h5 className="text-center">
                  Booking appointment for <br />
                  someone else
                </h5>

                <h6 className="mt-3">Existing Profiles</h6>
                {state.loading && <Loader />}
                {!state.loading && state.existingUsers.length === 0 && (
                  <NotFoundLable message={"No existing profile found"} />
                )}

                {!state.loading &&
                  state.existingUsers.map((d, index) => {
                    return (
                      <span onClick={() => handleNavigation(d)}>
                        <Link to={appRoutesConst.providers}>
                          <div
                            className={`appointment-for-row ${
                              index === 0 && "mt-0"
                            } `}
                          >
                            <div className="appointment-for-col-1">
                              <span className="someone-span">ME</span>
                            </div>
                            <div className="appointment-for-col-2">
                              <p>
                                {`${d.firstName} ${d.lastName}`}
                                <span className="float-right">
                                  <input type="checkbox" />
                                </span>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </span>
                    );
                  })}
                {!state.loading && (
                  <Link
                    to={appRoutesConst.someoneelsesignup}
                    className="btn btn-add-some-one d-block w-100 ml-0 mt-3"
                  >
                    + Add Someone Else
                  </Link>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SomeoneElse;
