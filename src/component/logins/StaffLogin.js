import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Logo from "../../image/logo.png";
const StaffLogin = () => {
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
        <h4>Welcome Back</h4>
        <p className="mb-5">Please login to continue</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control placeholder="User ID" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control placeholder="Password" />
          </Form.Group>

          <a href="#/" className="btn btn-theme btn-block w-100 ml-0 mt-5">
            LOGIN
          </a>
        </Form>
      </div>
    </div>
  );
};

export default StaffLogin;
