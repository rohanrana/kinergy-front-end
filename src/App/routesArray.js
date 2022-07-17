import { lazy } from "react";
import { appRoutesConst } from "./navigation";

const HomePage = lazy(() => import("../Containers/Services/ServiceCategories"));
const SignInPage = lazy(() => import("../Pages/Authentication/SignInPage"));
const ServiceDetails = lazy(() =>
  import("../Containers/Services/ServiceDetails")
);

// const HomePage = lazy(() => import("../Pages/Home/HomePage"));
// import TherapyServices from "../Containers/TherapyServices";
// import ForgotPasswordPage from "../Pages/Authentication/ForgotPasswordPage";
// import SignInPage from "../Pages/Authentication/SignInPage";
// import HomePage from "../Pages/Home/HomePage";
// import RegisterPage from "../Pages/Register/RegisterPage";
// import LetsStarted from "../Containers/LetsStarted";
// // import UsingEmail from "./component/UsingEmail";
// // import { appRoutesConst } from "./navigation";
// import UsingEmail from "../Containers/UsingEmail";
//isPrivateRoute
//isOpenRoute
//isPrivateRoute

export const routesArray = [
  {
    path: appRoutesConst.signin,
    element: SignInPage,
    isRestrictedRoute: true,
  },
  {
    path: appRoutesConst.home,
    element: HomePage,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.index,
    element: HomePage,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.subServices,
    element: HomePage,
    isPrivateRoute: true,
  },
  {
    path: appRoutesConst.serviceDetails,
    element: ServiceDetails,
    isPrivateRoute: true,
  },
];
