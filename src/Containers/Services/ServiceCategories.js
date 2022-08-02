/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import { actions as serviceCategoryActions } from "../../Reducers/serviceCategories";
import Department2 from "../../images/department2.png";
import RightColor from "../../images/right-color.png";
import { verifyObject } from "../../utilities/utils";
import { Link } from "react-router-dom";
import store from "../../App/store";
import { isArray } from "lodash";
import PageLoader from "../../Components/common/PageLoader";
import { actionTypes } from "../../Reducers/localStore";
import { baseURL } from "../../Services";

const ServiceCategories = (props) => {
  useEffect(() => {
    // console.log("props", props);
    // if (props.token) {
    //   navigate("/");
    // } else {
    //   navigate("/signin");
    // }
    store.dispatch({
      type: actionTypes.SET_APPOINTMENT_BOOKING_DETAIL,
      payload: null,
    });
    store.dispatch({
      type: actionTypes.SET_APPOINTMENT_PROVIDER,
      payload: null,
    });
    store.dispatch({
      type: actionTypes.SET_CLIENT_DETAILS,
      payload: null,
    });
    setServiceCategoryDetail(null);
    setServiceDetail(null);
  }, []);
  const dispatch = useDispatch();
  const serviceCategories = useSelector((state) => state.serviceCategories);

  const setServiceCategoryDetail = (serviceCategory) => {
    store.dispatch({
      type: actionTypes.SET_SERVICE_CATEGORY,
      payload: serviceCategory,
    });
  };
  const setServiceDetail = (service) => {
    dispatch({
      type: actionTypes.SET_SERVICE,
      payload: service,
    });
  };

  useEffect(() => {
    dispatch(serviceCategoryActions.onRequest({}));
  }, []);

  //   console.log("serviceCategoriesData", data);
  return (
    <div className="Home">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="home-content-row">
              <div className="home-content-col-1">
                <h3>
                  What are you <br /> here for today
                </h3>
                <p>
                  Please select any department from the <br /> below list to
                  proceed further
                </p>
              </div>
              <div className="home-content-col-2">
                {serviceCategories && serviceCategories.isLoading && (
                  <PageLoader />
                )}
                <Row>
                  {serviceCategories &&
                    serviceCategories.data &&
                    isArray(serviceCategories.data) &&
                    serviceCategories.data.map((d) => {
                      return (
                        <Col className="mt-10" lg={4} sm={4} xs={12}>
                          <div className="department-col mt-0">
                            <img
                              src={
                                d.imageUrl
                                  ? `${baseURL}/${d.imageUrl}`
                                  : `${Department2}`
                              }
                              alt={Department2}
                            />
                            <div className="department-col-content">
                              <p>{d.title}</p>
                              <span
                                onClick={() => {
                                  console.log("dddd", d);
                                  setServiceCategoryDetail(d);
                                }}
                              >
                                <Link to={`/service/${d._id}/${d.title}`}>
                                  <img
                                    src={RightColor}
                                    alt={RightColor}
                                    className="font-icon-department"
                                  />
                                </Link>
                              </span>
                            </div>
                          </div>
                          {/* </a> */}
                        </Col>
                      );
                    })}

                  {/* <Col lg={4} sm={4} xs={12}>
                    <a href="#/">
                      <div className="department-col mt-0">
                        <img src={Department2} alt={Department2} />
                        <div className="department-col-content">
                          <p>
                            Performance <br />
                            Training
                          </p>
                          <img src={RightColor} alt={RightColor} />
                        </div>
                      </div>
                    </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <a href="#/">
                      <div className="department-col mt-0">
                        <img src={Department3} alt={Department3} />
                        <div className="department-col-content">
                          <p>
                            Concussion <br />
                            Services
                          </p>
                          <img src={RightColor} alt={RightColor} />
                        </div>
                      </div>
                    </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <a href="#/">
                      <div className="department-col">
                        <img src={Department4} alt={Department4} />
                        <div className="department-col-content">
                          <p>
                            Massage <br />
                            Therapy
                          </p>
                          <img src={RightColor} alt={RightColor} />
                        </div>
                      </div>
                    </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <a href="#/">
                      <div className="department-col">
                        <img src={Department5} alt={Department5} />
                        <div className="department-col-content">
                          <p>
                            Wellness <br />
                            Services
                          </p>
                          <img src={RightColor} alt={RightColor} />
                        </div>
                      </div>
                    </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <a href="#/">
                      <div className="department-col">
                        <img src={Department6} alt={Department6} />
                        <div className="department-col-content">
                          <p>
                            Specialty <br />
                            Classes
                          </p>
                          <img src={RightColor} alt={RightColor} />
                        </div>
                      </div>
                    </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <a href="#/">
                      <div className="department-col">
                        <img src={Department7} alt={Department7} />
                        <div className="department-col-content">
                          <p>
                            Physician <br />
                            Services
                          </p>
                          <img src={RightColor} alt={RightColor} />
                        </div>
                      </div>
                    </a>
                  </Col> */}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: verifyObject(state, "localStore.token", null),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceCategories);
export default ConnectedComponent;
