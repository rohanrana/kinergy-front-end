import { push } from "react-router-redux";
// import backBlue from "assets/images/common/back-arrow.svg";
export const appRoutesConst = {
  dashboard: "/",
  staffLogin: "/staff-login",
  settings: "/settings",
  admin: "/admin",
  facilityManagement: "/admin/facility-management",
  facilityDetails: "/admin/facility-detail/:facility_id",
  facilityEdit: "/admin/edit-facility",
  systemSettings: "/admin/system-settings",
  addingFacility: "/admin/adding-facility",
  appointments: "/admin/admin-appointment",
  discount: "/admin/discount",
  userManagement: "/admin/user-management",
  accessManagement: "/admin/access-management",
  client: "/client",
  services: "/services",
  serviceDetails: "/service-details/:service_cat_id",
  subServicesDetails: "/subservice-details/:service_id/:service_category",
  forms: "/forms",
  createForms: "/create-form",
    userManagement: "/admin/user-management",
    accessManagement: "/admin/access-management",
    client: "/client",
    services: "/services",
    serviceDetails: "/service-details",
    subServicesDetails: "/subservice-details",
    forms: "/forms",
    createForms: "/create-form",
    Createfornext: "/create-form-next",
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
