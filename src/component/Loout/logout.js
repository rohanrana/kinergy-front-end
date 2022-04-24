import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import Logo from "../../image/logo.png";
import { staffLogout } from "../../store/staffAuth/actions";
import Loader from "../../cmmon_module/Loader";

const Logout = (props) => {

    useEffect(() => {
        if (!props.staffLogoutData)
            props.staffLogout(JSON.parse(localStorage.getItem("_id")))
    }, [props.staffLogoutData])

    useEffect(() => {
        if (props.staffLogoutData || props.staffLogoutErr) {
            props.history.push('/staff-login')
        }
    }, [props.staffLogoutData, props.staffLogoutErr])

    return ( <
        div / >
    );
};

const mapStateToProps = state => ({
    isLoading: state.loading.isLoading,
    staffLogoutData: state.staffAuth.staffLogoutData,
    staffLogoutErr: state.staffAuth.staffLogoutErr,
});

const mapDispatchToProps = dispatch => ({
    staffLogout: (_id) => dispatch(staffLogout(_id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Logout));

//export default StaffLogin;