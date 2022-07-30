/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { actions as serviceCategoryActions } from "../Reducers/serviceCategories";
import Department1 from "../images/department1.png";
import Department2 from "../images/department2.png";
import Department3 from "../images/department3.png";
import Department4 from "../images/department4.png";
import Department5 from "../images/department5.png";
import Department6 from "../images/department6.png";
import Department7 from "../images/department7.png";
import { verifyObject } from "../utilities/utils";
// import { withRouter } from "react-router-dom";

const Home = (props) => {
  const dispatch = useDispatch();

 

  useEffect(() => {
    dispatch(serviceCategoryActions.onRequest({}));
  }, []);

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
                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <a href="/therapy-services">
                      <div className="department-col mt-0">
                        <img src={Department1} alt={Department1} />
                        <div className="department-col-content">
                          <p>
                            Therapy <br />
                            Services{" "}
                          </p>
                          <i class="fas fa-chevron-circle-right font-icon-department"></i>
                        </div>
                      </div>
                    </a>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <a href="#/">
                      <div className="department-col mt-0">
                        <img src={Department2} alt={Department2} />
                        <div className="department-col-content">
                          <p>
                            Performance <br />
                            Training
                          </p>
                          <i class="fas fa-chevron-circle-right font-icon-department"></i>
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
                          <i class="fas fa-chevron-circle-right font-icon-department"></i>
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
                          <i class="fas fa-chevron-circle-right font-icon-department"></i>
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
                          <i class="fas fa-chevron-circle-right font-icon-department"></i>
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
                          <i class="fas fa-chevron-circle-right font-icon-department"></i>
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
                          <i class="fas fa-chevron-circle-right font-icon-department"></i>
                        </div>
                      </div>
                    </a>
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
const mapStateToProps = (state) => {
  return {
    token: verifyObject(state, "localStore.token", null),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Home);
export default ConnectedComponent;
