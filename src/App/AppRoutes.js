import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPasswordPage from '../Pages/Authentication/ForgotPasswordPage';
import SignInPage from '../Pages/Authentication/SignInPage';
import HomePage from '../Pages/Home/HomePage';
import RegisterPage from '../Pages/Register/RegisterPage';
import { appRoutesConst } from './navigation';


export default function AppRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path={appRoutesConst.signin} component={SignInPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/forgot-password" component={ForgotPasswordPage} />
                <Route exact path={appRoutesConst.home} component={HomePage} />
                <Route exact path={"/"} component={HomePage} />

                
                {/* <Route exact path="/therapy-services" component={TherapyServices} /> */}
            </Switch>
        </Router>
    )
}

