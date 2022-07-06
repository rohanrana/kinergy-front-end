import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

class RestrictedRoute extends Component {
  componentDidMount() { }

  componentDidUpdate() { }

  render() {
    const { token } = this.props;
    if (token) {
      return <Navigate to="/" />;
    }
    return this.props.children;
  }
}

const mapStateToProps = (state) => ({
  token: _.get(state, "localStore.token", ""),
});

export default (connect(mapStateToProps)(RestrictedRoute));
