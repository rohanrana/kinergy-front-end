/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header"
const Home = (props) => {
  return (
    <div className="Home2">
      <Header />
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
                    <Link to={"/"} className="btn btn-theme">
                      Book Appointment
                    </Link>
                  </div>
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
