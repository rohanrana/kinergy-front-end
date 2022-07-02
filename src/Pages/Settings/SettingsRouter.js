import React, { Fragment } from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Settings from "../../Containers/settings/Settings";
import EditPersonalDetail from "../../Containers/settings/EditPersonalDetail";
import UpdatePassword from "../../Containers/settings/UpdatePassword";
import EditContactInformation from "../../Containers/settings/EditContactInformation";
import Sidebar from '../../PageLayout/SidebarNav/Sidebar';
// import UserManagement from "../../Containers/admin/UserManagement";
// import UserDetails from "../../Containers/admin/UserDetails";
// import EditUsers from "../../Containers/admin/EditUsers";
// import EditPreferences from "../../Containers/admin/EditPreferences";
// import AccessManagement from "../../Containers/admin/AccessManagement";
// import Discount from "../../Containers/admin/Discount";
// import DiscountDetail from "../../Containers/admin/DiscountDetail";
// import EditCoupon from "../../Containers/admin/EditCoupon";

export default function SettingsRouter() {
    return (
        <Fragment>
                <Switch>
                    <Route  path="/settings" component={Settings} />
                    <Route  path="/settings/edit-personal-detail" component={EditPersonalDetail} />
                    <Route  path="/settings/edit-contact-information" component={EditContactInformation} />
                    <Route  path="/settings/update-password" component={UpdatePassword} />
                </Switch>
        </Fragment>
    )
}
