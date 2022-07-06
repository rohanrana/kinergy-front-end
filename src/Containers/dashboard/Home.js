import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { verifyObject } from "../../utilities/utils";

import DashboardUser from "./DashboardUser";


const Home = (props) => {
  const { token } = useSelector(state => state.localStore)
  useEffect(() => {
    console.log("props", props)
    if (token) {
      props.history.push("/")
    } else {
      props.history.push("/staff-login")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])
  return (
    <div className="home-page">
      <Container fluid>
        <Row>
          <Col lg={3} sm={6} xs={12}>
            <div className="card dashboard-widgets bg-danger m-b-30">
              <div className="card-body">
                <div className="d-flex row">
                  <div className="col-3 align-self-center">
                    <div className="round">
                      <i className="fas fa-desktop"></i>
                    </div>
                  </div>
                  <div className="col-8 ml-auto align-self-center text-center">
                    <div className="m-l-10 text-white float-right">
                      <h5 className="mt-0 round-inner text-white">18090</h5>
                      <p className="mb-0 text-white">Visits Today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} sm={6} xs={12}>
            <div className="card dashboard-widgets bg-primary m-b-30">
              <div className="card-body">
                <div className="d-flex row">
                  <div className="col-3 align-self-center">
                    <div className="round">
                      <i className="fas fa-users"></i>
                    </div>
                  </div>
                  <div className="col-8 ml-auto align-self-center text-center">
                    <div className="m-l-10 text-white float-right">
                      <h5 className="mt-0 round-inner text-white">562</h5>
                      <p className="mb-0 text-white">New Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} sm={6} xs={12}>
            <div className="card dashboard-widgets bg-success m-b-30">
              <div className="card-body">
                <div className="d-flex row">
                  <div className="col-3 align-self-center">
                    <div className="round">
                      <i className="fas fa-user-md"></i>
                    </div>
                  </div>
                  <div className="col-8 ml-auto align-self-center text-center">
                    <div className="m-l-10 text-white float-right">
                      <h5 className="mt-0 round-inner text-white">7514</h5>
                      <p className="mb-0 text-white">Doctors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} sm={6} xs={12}>
            <div className="card dashboard-widgets bg-warning m-b-30">
              <div className="card-body">
                <div className="d-flex row">
                  <div className="col-3 align-self-center">
                    <div className="round">
                      <i className="fas fa-calculator"></i>
                    </div>
                  </div>
                  <div className="col-8 ml-auto align-self-center text-center">
                    <div className="m-l-10 text-white float-right">
                      <h5 className="mt-0 round-inner text-white">$32874</h5>
                      <p className="mb-0 text-white">Total Sales</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="card  m-b-30">
              <div className="card-body">
                <DashboardUser />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     token: verifyObject(state, "localStore.token", null)
//     ,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };
// const ConnectedComponent = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home);
export default withRouter(Home)
