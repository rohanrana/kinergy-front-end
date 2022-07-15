import { lazy } from "react";
import { appRoutesConst } from "./navigation";

const HomePage = lazy(() => import("../Pages/Home/HomePage"));
// const HomePage = lazy(() => import("../Pages/Home/HomePage"));
import TherapyServices from "../Containers/TherapyServices";
import ForgotPasswordPage from "../Pages/Authentication/ForgotPasswordPage";
// import SignInPage from "../Pages/Authentication/SignInPage";
import HomePage from "../Pages/Home/HomePage";
import RegisterPage from "../Pages/Register/RegisterPage";
import LetsStarted from "../Containers/LetsStarted";
// import UsingEmail from "./component/UsingEmail";
import { appRoutesConst } from "./navigation";
import UsingEmail from "../Containers/UsingEmail";
//isPrivateRoute
//isOpenRoute
//isPrivateRoute

export const routesArray = [
  {
    path: appRoutesConst.home,
    element: HomePage,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.subServices,
    element: HomePage,
    isOpenRoute: true,
  },
];
