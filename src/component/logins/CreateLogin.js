import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Logo from "../../image/logo.png";
const CreateLogin = () => {
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
        <h4>Create login credentials</h4>
        <p className="mb-5">Please fill the details below</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control placeholder="New Username" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control placeholder="New Password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control placeholder="Confirm Password" />
          </Form.Group>

          <Button className="btn btn-theme btn-block w-100 ml-0 mt-5">
            SAVE
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateLogin;
