import { lazy } from "react";
import { appRoutesConst } from "./navigation";

const AddingFacility = lazy(() => import("../Containers/admin/AddingFacility"));
const DashboardPage = lazy(() => import("../Containers/dashboard/Home"));
const AdminAppoitment = lazy(() =>
  import("../Containers/admin/AdminAppointment")
);
const Discount = lazy(() => import("../Containers/admin/Discount"));
const EditFacility = lazy(() => import("../Containers/admin/EditFacility"));
const FacilityDetail = lazy(() => import("../Containers/admin/FacilityDetail"));
const FacilityManagement = lazy(() =>
  import("../Containers/admin/FacilityManagement")
);
const Createform = lazy(() => import("../Containers/admin/forms/Create-form"));
const Forms = lazy(() => import("../Containers/admin/forms/Forms"));
const Services = lazy(() => import("../Containers/admin/services/Services"));
const Servicedetails = lazy(() =>
  import("../Containers/admin/services/Service-details")
);
const Subservicedetails = lazy(() =>
  import("../Containers/admin/services/Subservice-details")
);
const SystemSettings = lazy(() => import("../Containers/admin/SystemSettings"));
const UserManagement = lazy(() => import("../Containers/admin/UserManagement"));
const AccessManagement = lazy(() =>
  import("../Containers/admin/AccessManagement")
);
const StaffLogin = lazy(() => import("../Containers/logins/StaffLogin"));

export const routesArray = [
  {
    path: appRoutesConst.dashboard,
    element: DashboardPage,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.appointments,
    element: AdminAppoitment,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.staffLogin,
    element: StaffLogin,
    isRestrictedRoute: true,
  },
  {
    path: appRoutesConst.facilityManagement,
    element: FacilityManagement,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.facilityDetails,
    element: FacilityDetail,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.facilityEdit,
    element: EditFacility,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.systemSettings,
    element: SystemSettings,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.addingFacility,
    element: AddingFacility,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.discount,
    element: Discount,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.userManagement,
    element: UserManagement,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.userManagement,
    element: UserManagement,
    isPrivateRoute: true,
  },

  {
    path: appRoutesConst.accessManagement,
    element: AccessManagement,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.services,
    element: Services,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.serviceDetails,
    element: Servicedetails,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.subServicesDetails,
    element: Subservicedetails,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.forms,
    element: Forms,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.createForms,
    element: Createform,
    isPrivateRoute: true,
  },
];
