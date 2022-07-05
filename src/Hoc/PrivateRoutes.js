import React, { Component, Fragment } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

class PrivateRoute extends Component {
  render() {
    const { component: Component, token, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (!_.isEmpty(token))
            return (
              <Fragment>
                <Component {...props} />
              </Fragment>
            );

          return (
            <Redirect
              to={{
                pathname: "/signin",
              }}
            />
          );
        }}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  token: _.get(state, "localStore.token", ""),
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
