import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TherapyServices from "../Containers/TherapyServices";
import ForgotPasswordPage from "../Pages/Authentication/ForgotPasswordPage";
// import SignInPage from "../Pages/Authentication/SignInPage";
import HomePage from "../Pages/Home/HomePage";
// import RegisterPage from "../Pages/Register/RegisterPage";
import LetsStarted from "../Containers/LetsStarted";
// import UsingEmail from "./component/UsingEmail";
import { appRoutesConst } from "./navigation";
import UsingEmail from "../Containers/UsingEmail";
import PrivateRoutes from "../Hoc/PrivateRoutes";
import RestrictedRoutes from "../Hoc/RestrictedRoutes";
import PageLoader from "../Components/common/PageLoader";
import { routesArray } from "./routesArray";
import RedirectComponent from "../Components/common/RedirectComponent";
import { Header } from "../Components/Header/Header";

export default function AppRoutes() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route exact path={appRoutesConst.signin} component={SignInPage} /> */}
    //     {/* <Route exact path="/register" element={<RegisterPage />} /> */}
    //     <Route exact path="/" element={<HomePage />} />
    //     <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    //     <Route path={appRoutesConst.home} element={<HomePage />} />

    //     <Route path="/therapy-services" element={<TherapyServices />} />
    //     <Route path="/lets-started" element={<LetsStarted />} />
        

    //     {/* <Route exact path="/therapy-services" component={TherapyServices} /> */}
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route path="/lets-started" element={<LetsStarted />} />
        <Route path="/using-email" element={<UsingEmail />} />
        {routesArray.map((route, index) => {
          let ComponentName = route.element;
          if (route.isPrivateRoute) {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <React.Suspense fallback={<PageLoader />}>
                    <PrivateRoutes>
                      <ComponentName />
                      {/* </PageLayout> */}
                    </PrivateRoutes>
                  </React.Suspense>
                }
              />
            );
          }

          if (route.isRestrictedRoute) {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <React.Suspense fallback={<PageLoader />}>
                    <RestrictedRoutes>
                      <ComponentName />
                    </RestrictedRoutes>
                  </React.Suspense>
                }
              />
            );
          }

          if (route.isOpenRoute) {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <React.Suspense fallback={<PageLoader />}>
                    <ComponentName />
                  </React.Suspense>
                }
              />
            );
          }
          return null;
        })}
        {/* <Route exact path="*" element={<RedirectComponent />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
