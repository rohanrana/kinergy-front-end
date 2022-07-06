import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//   import TreatmentGoal from "../../Containers/admin/department/TreatmentGoal";
//   import TreatmentNote from "../../Containers/admin/department/TreatmentNote";
//   import ManageBody from "../../Containers/admin/department/ManageBody";
//   import IcdCodeList from "../../Containers/admin/department/IcdCodeList";
//   import WorkoutGoals from "../../Containers/admin/department/WorkoutGoals";
//   import PerformanceNote from "../../Containers/admin/department/PerformanceNote";
import FacilityManagement from "../../Containers/admin/FacilityManagement";
import AddingFacility from "../../Containers/admin/AddingFacility";
import FacilityDetail from "../../Containers/admin/FacilityDetail";
import EditFacility from "../../Containers/admin/EditFacility";
import SystemSettings from "../../Containers/admin/SystemSettings";

// import Sidebar from '../../PageLayout/SidebarNav/Sidebar';
import AdminAppoitment from "../../Containers/admin/AdminAppointment";
import UserManagement from "../../Containers/admin/UserManagement";
// import UserDetails from "../../Containers/admin/UserDetails";
// import EditUsers from "../../Containers/admin/EditUsers";
// import EditPreferences from "../../Containers/admin/EditPreferences";
import AccessManagement from "../../Containers/admin/AccessManagement";
import Discount from "../../Containers/admin/Discount";
// import DiscountDetail from "../../Containers/admin/DiscountDetail";
// import EditCoupon from "../../Containers/admin/EditCoupon";

export default function AdminRouter() {
    return (
        <Fragment>

            <Route path="/admin/facility-management" element={<FacilityManagement />} />
            <Route path="/admin/facility-detail/:facility_id" element={<FacilityDetail />} />
            <Route path="/admin/edit-facility" element={<EditFacility />} />
            <Route path="/admin/system-settings" element={<SystemSettings />} />
            <Route path="/admin/adding-facility" element={<AddingFacility />} />
            <Route path="/admin/admin-appointment" element={<AdminAppoitment />} />
            <Route path="/admin/discount" element={<Discount />} />
            <Route path="/admin/user-management" element={<UserManagement />} />
            <Route path="/admin/access-management" element={<AccessManagement />} />

        </Fragment>

    )
}
