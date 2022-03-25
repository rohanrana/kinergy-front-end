import "./Style.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StaffLogin from "./component/logins/StaffLogin";
import StaffLogin2 from "./component/logins/StaffLogin2";
import CreateLogin from "./component/logins/CreateLogin";
import Home from "./component/dashboard/Home";
import ClientListing from "./component/clients/ClientListing";
import ActivityLog from "./component/clients/ActivityLog";
import ClientDetails from "./component/clients/ClientDetails";
import EditDetails from "./component/clients/EditDetails";
import EditEmergencyContact from "./component/clients/EditEmergencyContact";
import EditClientMedical from "./component/clients/EditClientMedical";
import General from "./component/admin/General";
import AddingFacility from "./component/admin/AddingFacility";
import StaffListing from "./component/admin/StaffListing";
import AddStaff from "./component/admin/AddStaff";
import ClientAuthorization from "./component/admin/ClientAuthorization";
import DepartmentGeneral from "./component/admin/department/General";
import DepartmentMedical from "./component/admin/department/Medical";
import DepartmentPerformanceServices from "./component/admin/department/PerformanceServices";
import CptCodelist from "./component/admin/department/CptCodeList";
import BilledItem from "./component/admin/department/BilledItem";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StaffLogin} />
        <Route exact path="/staff-login2" component={StaffLogin2} />
        <Route exact path="/create-login" component={CreateLogin} />
        <Route exact path="/dashboard" component={Home} />
        <Route exact path="/client-listing" component={ClientListing} />
        <Route exact path="/activity-log" component={ActivityLog} />
        <Route exact path="/client-details" component={ClientDetails} />
        <Route exact path="/edit-details" component={EditDetails} />
        <Route exact path="/edit-emergency-contact" component={EditEmergencyContact} />
        <Route exact path="/edit-client-medical" component={EditClientMedical} />
        <Route exact path="/admin" component={General} />
        <Route exact path="/adding-facility" component={AddingFacility} />
        <Route exact path="/staff-listing" component={StaffListing} />
        <Route exact path="/add-staff" component={AddStaff} />
        <Route exact path="/client-authorization" component={ClientAuthorization} />
        <Route exact path="/department-general" component={DepartmentGeneral} />
        <Route exact path="/department-medical" component={DepartmentMedical} />
        <Route exact path="/department-performance-services" component={DepartmentPerformanceServices} />
        <Route exact path="/cpt-code-list" component={CptCodelist} />
        <Route exact path="/billed-item" component={BilledItem} />
      </Switch>
    </Router>
  );
}

export default App;
