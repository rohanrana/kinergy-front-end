import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
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
            <Switch>
                <Route path="/admin/facility-management" component={FacilityManagement} />
                <Route path="/admin/facility-detail" component={FacilityDetail} />
                <Route path="/admin/edit-facility" component={EditFacility} />
                <Route path="/admin/system-settings" component={SystemSettings} />
                <Route path="/admin/adding-facility" component={AddingFacility} />
                <Route path="/admin/admin-appointment" component={AdminAppoitment} />
                <Route path="/admin/discount" component={Discount} />
                <Route path="/admin/user-management" component={UserManagement} />
                <Route path="/admin/access-management" component={AccessManagement} />
            </Switch>
        </Fragment>

    )
}
