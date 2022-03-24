import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";

const Home = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12}>
            <h1>Dashboard</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
