import { lazy } from "react";
import { appRoutesConst } from "./navigation";

const HomePage = lazy(() => import("../Containers/Services/ServiceCategories"));
const SignInWithMobile = lazy(() =>
  import("../Containers/SIgninWith/SignInWithMobile")
);
const SignInWithEmail = lazy(() =>
  import("../Containers/SIgninWith/SignInWithEmail")
);

const ServiceDetails = lazy(() =>
  import("../Containers/Services/ServiceDetails")
);
const AppointmentFor = lazy(() =>
  import("../Containers/Appointments/AppointmentFor")
);

//isPrivateRoute
//isOpenRoute
//isPrivateRoute

export const routesArray = [
  // {
  //   path: appRoutesConst.signin,
  //   element: SignInPage,
  //   isRestrictedRoute: true,
  // },
  {
    path: appRoutesConst.home,
    element: HomePage,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.index,
    element: HomePage,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.subServices,
    element: HomePage,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.serviceDetails,
    element: ServiceDetails,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.loginwithemail,
    element: SignInWithEmail,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.loginwithphone,
    element: SignInWithMobile,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.appointmentFor,
    element: AppointmentFor,
    isOpenRoute: true,
  },
];
