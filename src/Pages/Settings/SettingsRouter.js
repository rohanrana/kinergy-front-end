import React, { Fragment } from 'react'

import { Routes, Route } from "react-router-dom"
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
            <Sidebar />
            <Routes>
                <Route exact path="/settings" element={<Settings />} />
                <Route path="/settings/edit-personal-detail" element={<EditPersonalDetail />} />
                <Route path="/settings/edit-contact-information" element={<EditContactInformation />} />
                <Route path="/settings/update-password" element={<UpdatePassword />} />
            </Routes>
        </Fragment>
    )
}
