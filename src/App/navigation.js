
import { push } from "react-router-redux";
// import backBlue from "assets/images/common/back-arrow.svg";
export const appRoutesConst = {
  dashboard: "/"
};

// const config = {
//   activeClassName: "active",
// };

export const navigateToIndex = () => {
  return (dispatch) => {
    dispatch(push(appRoutesConst.index));
  };
};

export const navigateToHome = () => {
  return (dispatch) => {
    dispatch(push(appRoutesConst.home));
  };
};

export const navigateToRightToWork = () => {
  return (dispatch) => {
    dispatch(push(appRoutesConst.rightToWork));
  };
};

export const navigateTo = (path) => {
  return (dispatch) => {
    dispatch(push(path));
  };
};
