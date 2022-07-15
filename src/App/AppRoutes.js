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

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path={appRoutesConst.signin} component={SignInPage} /> */}
        {/* <Route exact path="/register" element={<RegisterPage />} /> */}
        <Route exact path="/" element={<HomePage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path={appRoutesConst.home} element={<HomePage />} />

        <Route path="/therapy-services" element={<TherapyServices />} />
        <Route path="/lets-started" element={<LetsStarted />} />
        <Route path="/using-email" element={<UsingEmail />} />

        {/* <Route exact path="/therapy-services" component={TherapyServices} /> */}
      </Routes>
    </BrowserRouter>
  );
}
