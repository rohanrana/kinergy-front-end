/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Logo from "../../image/logo.png";
import validator from "validator";
import { passwordRegex } from "../../Constants/common";
import { useDispatch } from "react-redux";
import { login } from "../../Reducers/session"
import { useNavigate } from "react-router";
const StaffLogin = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    type: "STAFF",
    errors: {
      username: null,
      password: null,
    },
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const validateInputs = () => {
    console.log("called")
    let { username, password } = state;
    let usernameError,
      passwordError = null;
    console.log();
    if (!username) {
      usernameError = "Please enter an email address";
    } else if (!validator.isEmail(username)) {
      if (username && username.length > 60) {
        usernameError = "Email should be less than  of 60 characters only";
      }
      usernameError = "Please enter a valid email";
    } else if (username && username.length > 60) {
      usernameError = "Email should be less than  of 60 characters only";
    } else {
      usernameError = null;
    }

    if (!password) {
      passwordError = "Please enter a password";
    } else if (password) {
      let test = passwordRegex.test(password);
      if (!test) {
        passwordError =
          "Password should be atleast 8 characters including a number,an uppercase,one special character and lowercase letter";
      }
      if (password.length > 25) {
        passwordError = "Password should be max 25 characters";
      }
    } else {
      passwordError = null;
    }

    setState({
      ...state,
      errors: {
        username: usernameError,
        password: passwordError,
      },
    });
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      errors: {
        [e.target.name]: null
      }
    });
  };

  useEffect(() => {
    let { errors, username, password, type } = state;
    console.log("errors", errors)
    if (errors.username === null && errors.password === null && username !== "" && password !== "") {
      dispatch(login({ email: username, password: password, type: type }, navigate))

    }
  }, [state.errors])


  const validateAndSubmit = async (e) => {
    e.preventDefault()
    await validateInputs();

  };
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
            <Form.Label>User ID</Form.Label>
            <Form.Control isInvalid={state.errors && state.errors.username !== null} onChange={handleChange} name="username" value={state.username} placeholder="Username" />
            {state.errors && state.errors.username && <span className="text-danger">{state.errors.username}</span>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" isInvalid={state.errors && state.errors.password !== null} onChange={handleChange} name="password" value={state.password} placeholder="Password" />
            {state.errors && state.errors.password && <span className="text-danger">{state.errors.password}</span>}
            <p className="mb-0 text-right mt-1"><a href="/forgot-password" className="theme-color"><small><b>Forgot Password</b></small></a></p>
          </Form.Group>

          <a onClick={validateAndSubmit} href="#/" className="btn btn-theme btn-block w-100 ml-0 mt-5">
            LOGIN
          </a>
        </Form>
      </div>
    </div>
  );
};

export default StaffLogin;
