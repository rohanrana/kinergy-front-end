/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { appRoutesConst } from "../App/navigation";
import Call from "../images/call.png";

const Home = (props) => {
  return (
    <div className="Home2">
      <Container>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="home-page-main-details">
              <h1>
                Welcome to Kinergy Sports <br /> Medicine and Performance
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in
                risus
                <br />
                massa nec sed sit sed. Metus pellentesque molestie condimentum{" "}
                <br />
                commodo neque sodales.
              </p>
              <Row>
                <Col lg={3} sm={4} xs={12}>
                  <div className="button-home">
                    <Link
                      to={appRoutesConst.serviceCategories}
                      className="btn btn-theme"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </Col>
                <Col lg={9} sm={8} xs={12}>
                  <p className="mt-2">
                    <span className="mr-2">(or)</span>{" "}
                    <Link to={"tel:1234567890"}>
                      <img src={Call} alt={Call} className="mr-2" />
                      Call at (123 456 7890)
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
