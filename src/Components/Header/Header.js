import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyObject } from "../../utilities/utils";
// import { logOut } from "../../Reducers/session";
import "./Header.css";
import { useNavigate } from "react-router";
import { actionTypes } from "../../Reducers/localStore";
import { appRoutesConst } from "../../App/navigation";

export function Header(props) {
  const dispatch = useDispatch();
  const localStore = useSelector((state) => state.localStore);
  const token = verifyObject(localStore, "token", null);
  const _id = verifyObject(localStore, "user._id", null);
  const navigate = useNavigate();
  //   const isLoading = verifyObject(state, "session.isLoading", null);
  const onLogout = () => {
    console.log("logouteed");
    console.log("_id", _id);
    console.log("token", token);
    dispatch({
      type: actionTypes.CLEAR_LOCAL_STATE,
    });
    navigate(appRoutesConst.index);
    // dispatch(logOut({ _id, token },navigate));
  };
  if (token) {
    return (
      <div className="logout-container">
        <div className="logout-btn">
          <button
            onClick={onLogout}
            className="btn btn-theme btn-block w-100 ml-0 mt-3 mb-3"
          >
            {"Logout"}
          </button>
        </div>
      </div>
    );
  } else {
    return <span></span>;
  }
}

export default Header;
