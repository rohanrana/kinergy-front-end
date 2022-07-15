// import backBlue from "assets/images/common/back-arrow.svg";
export const appRoutesConst = {
  //doctor routes

  signup: "/signup",
  index: "/",
  subServices: "/sub-services",
  signin: "/signin",
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
