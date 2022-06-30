/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { login } from "../../Reducers/session"
import { Form, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux"
import { passwordRegex } from "../../Constants/common";
import { withRouter } from "react-router-dom"
import { bindActionCreators } from "redux"

import validator from "validator"
import Logo from "../../images/logo.png";
import Button from 'react-bootstrap/Button';
import { verifyObject } from "../../utilities/utils";
import Loader from "../../Components/Loader/Loader";


const Signin = (props) => {
    const [state, setState] = useState({
        username: "",
        password: "",
        type: "CUSTOMER",
        errors: {
            username: null,
            password: null,
        },
    })
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
            props.actions.login({ email: username, password: password, type: type }, props);
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
                <h4>Sign In</h4>
                <p className="mb-5">Please fill the details below</p>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={handleChange} name="username" value={state.username} placeholder="Username" />
                        {state.errors && state.errors.username && <span className="text-danger">{state.errors.username}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={handleChange} name="password" value={state.password} placeholder="Password" />
                        {state.errors && state.errors.password && <span className="text-danger">{state.errors.password}</span>}
                        <p className="mb-0 text-right mt-1"><a href="/forgot-password" className="theme-color"><small><b>Forgot Password</b></small></a></p>
                    </Form.Group>

                    <Button onClick={validateAndSubmit} className="btn btn-theme btn-block w-100 ml-0 mt-3 mb-3">
                        {props.isLoading ? <Loader variant={"light"} /> : "Signin"}
                    </Button>
                    <p className="text-center">
                        Don't have an Account{" "}
                        <a href="/register" className="theme-color">
                            <u>
                                <b>Create Account</b>
                            </u>
                        </a>
                    </p>
                </Form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {

        isLoading: verifyObject(state, "session.isLoading", null)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ login }, dispatch),
    };
};
const ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Signin);

export default withRouter(ConnectedComponent);

