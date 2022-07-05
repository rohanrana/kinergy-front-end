import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

class RestrictedRoute extends Component {
  componentDidMount() {}

  componentDidUpdate() {
 
  }

  render() {
    const { component: Component, token, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (_.isEmpty(token)) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/" />;
          }
        }}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  token: _.get(state, "localStore.token", ""),
});

export default withRouter(connect(mapStateToProps)(RestrictedRoute));
