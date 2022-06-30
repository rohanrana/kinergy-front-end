import React from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { verifyObject } from '../../utilities/utils';
import { logOut } from "../../Reducers/session"

import "./Header.css"
export function Header(props) {

    const onLogout = () => {
        if (props.actions && props.actions.logOut && typeof props.actions.logOut === "function") {
            let { _id, token } = props;
            console.log("_id", _id)
            console.log("token", token)
            props.actions.logOut({ _id, token})
        }
    }

    return (
        <div className="logout-container">
            <div className="logout-btn">
                <button onClick={onLogout} className="btn btn-theme btn-block w-100 ml-0 mt-3 mb-3">
                    Logout
                </button>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: verifyObject(state, "localStore.token", null),
        _id: verifyObject(state, "localStore.user._id", null),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ logOut }, dispatch),
    };
};
const ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default ConnectedComponent;

