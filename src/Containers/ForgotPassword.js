import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Logo from "../images/logo.png";

const ForgotPassword = () => {
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
      <div className="login-form">
        <h4>Reset your Password</h4>
        <p className="mb-">Please fill the details below</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Old Password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control placeholder="New Password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control placeholder="Confirm Password" />
          </Form.Group>

          <Button className="btn btn-theme btn-block w-100 ml-0 mt-3 mb-3">
            Reset Password
          </Button>
          <p className="text-center">
            Already have Password{" "}
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

export default ForgotPassword;
