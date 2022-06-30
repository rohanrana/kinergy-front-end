/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom"
import { isArray } from "lodash";
import Loader from "../../Components/Loader/Loader";
import Logo from "../../images/logo.png";
import { signUp } from "../../Services/session";
import { successToast, verifyObject } from "../../utilities/utils";
import { ValidateSignupInput } from "./ValidateRegisterForm";
import { appRoutesConst } from "../../App/navigation";
import { USER_TYPE_CUSTOMER } from "../../Constants/common";

const Register = (props) => {

    const [state, setState] = useState({
        email: "",
        password: "",
        type: "",
        firstName: "",
        lastName: "",
        contact: "",
        signingUp: false,
        errors: null,
        serverErrors: [],
        signingUpResponse: null,

    })

    const handleChange = async (e) => {
        let errors = null
        // let name = e.target.name
        // let value = e.target.value
        if (state.errors) {
            errors = Object.assign('', state.errors)
            delete errors[e.target.name]
        }
        await setState({ ...state, [e.target.name]: e.target.value, errors: errors })
        // if (state[name] !== '') {
        //     let data = {
        //         [name]: value,
        //     }
        //     const errors = ValidateSignupInput(data)
        //     if (!errors.isValid) {
        //         await setState({ ...state, errors: errors.errors })
        //     }
        // }
    }


    const _handleSubmit = async (e) => {
        e.preventDefault()
        let data = {
            firstName: state.firstName,
            lastName: state.lastName,
            password: state.password,
            confirm_password: state.confirm_password,
            email: state.email,
            contact: state.contact,
            type: USER_TYPE_CUSTOMER
        }
        const errors = ValidateSignupInput(data)

        if (!errors.isValid) {
            setState({ ...state, errors: errors.errors, })
        } else {
            let formData = new FormData()
            formData.set('firstName', state.firstName)
            formData.set('lastName', state.lastName)
            formData.set('password', state.password)
            formData.set('email', state.email)
            formData.set('contact', state.contact)

            try {
                // let phone = JSON.parse(localStorage.getItem("otp-phone"));
                await setState({ ...state, signingUp: true })
                let response = await signUp(formData)
                await setState({ ...state, signingUpResponse: response })

            } catch (error) {
                if (error.data && error.data.errors && isArray(error.data.errors)) {
                    setState({ ...state, signingUp: false, serverErrors: error.data.errors })
                }
            }
        }
    }

    useEffect(() => {
        if (state.signingUpResponse !== null) {
            console.log("--->", verifyObject(state.signingUpResponse, "data.response_message", "Success"))
            successToast({ content: verifyObject(state.signingUpResponse, "data.response_message", "Success") })
            setState({ ...state, signingUp: false, signingUpResponse: null })
            props.history.push(`${appRoutesConst.signin}`)
        }
    }, [state.signingUpResponse])

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
                                <Form.Control onChange={handleChange} name={"firstName"} value={state.firstName} placeholder="First Name" />
                                {state.errors && (
                                    <span className='text-danger'>
                                        {state.errors.firstName}
                                    </span>
                                )}
                            </Form.Group>
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={handleChange} name={"lastName"} value={state.lastName} placeholder="Last Name" />
                                {state.errors && (
                                    <span className='text-danger'>
                                        {state.errors.lastName}
                                    </span>
                                )}
                            </Form.Group>
                        </Col>

                        <Col lg={6} sm={12} xs={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control onChange={handleChange} name={"contact"} value={state.contact} placeholder="Phone Number" />
                                {state.errors && (
                                    <span className='text-danger'>
                                        {state.errors.contact}
                                    </span>
                                )}
                            </Form.Group>
                        </Col>

                        <Col lg={6} sm={12} xs={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email Id</Form.Label>
                                <Form.Control onChange={handleChange} name={"email"} value={state.email} placeholder="Email Id" />
                                {state.errors && (
                                    <span className='text-danger'>
                                        {state.errors.email}
                                    </span>
                                )}
                            </Form.Group>
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type={"password"} onChange={handleChange} name={"password"} value={state.password} placeholder="Password" />
                                {state.errors && (
                                    <span className='text-danger'>
                                        {state.errors.password}
                                    </span>
                                )}
                            </Form.Group>
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Confrm Password</Form.Label>
                                <Form.Control type={"password"} onChange={handleChange} name={"confirm_password"} value={state.confirm_password} placeholder="Confrm Password" />
                                {state.errors && (
                                    <span className='text-danger'>
                                        {state.errors.confirm_password}
                                    </span>
                                )}
                            </Form.Group>
                        </Col>
                    </Row>
                    <ul>
                        {state.serverErrors && state.serverErrors.map((error) => {
                            return <li style={{
                                display: "list-item"
                            }} className='text-danger'>
                                * {error.msg}
                            </li>
                        })}
                    </ul>


                    <Button onClick={_handleSubmit} className="btn btn-theme btn-block w-100 ml-0 mt-3 mb-3">
                        {state.signingUp ? <Loader variant={"light"} /> : "Register"}
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

export default withRouter(Register);
