import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
import { appRoutesConst } from "../App/navigation";
// import { appRoutesConst } from "../app/navigation";

class PrivateRoute extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    console.log("INN ");
    const { token } = this.props;
    if (!token) {
      return <Navigate to={appRoutesConst.signin} />;
    }
    return this.props.children;
  }
}

const mapStateToProps = (state) => ({
  token: _.get(state, "localStore.token", ""),
});

export default connect(mapStateToProps)(PrivateRoute);
