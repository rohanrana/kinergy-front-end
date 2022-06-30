import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Logo from "../images/logo.png";

const Register = () => {
  return (
    <div className="staff-login">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="login-logo pt-2">
              <img src={Logo} alt={Logo} />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="register-form">
        <h4>Register</h4>
        <p className="mb-3">Please fill the details below</p>
        <Form>
          <Row>
            <Col lg={6} sm={12} xs={12}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name" />
              </Form.Group>
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last Name" />
              </Form.Group>
            </Col>

            <Col lg={6} sm={12} xs={12}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control placeholder="Phone Number" />
              </Form.Group>
            </Col>

            <Col lg={6} sm={12} xs={12}>
              <Form.Group className="mb-3">
                <Form.Label>Email Id</Form.Label>
                <Form.Control placeholder="Email Id" />
              </Form.Group>
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Password" />
              </Form.Group>
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <Form.Group className="mb-3">
                <Form.Label>Confrm Password</Form.Label>
                <Form.Control placeholder="Confrm Password" />
              </Form.Group>
            </Col>
          </Row>

          <Button className="btn btn-theme btn-block w-100 ml-0 mt-3 mb-3">
            Register
          </Button>
          <p className="text-center mb-0">
            Already have an Account{" "}
            <a href="/" className="theme-color">
              <u>
                <b>Signin</b>
              </u>
            </a>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
