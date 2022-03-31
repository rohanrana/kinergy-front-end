import "./Style.css";
import React from "react";
import 'react-dropzone-uploader/dist/styles.css'
import { 
  // BrowserRouter as Router, 
   Switch, 
   Route, HashRouter as Router
   } from "react-router-dom";
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
import Inventory from "./component/admin/department/Inventory";
import AddInventory from "./component/admin/department/AddInventory";
import Communications from "./component/admin/Communication";
import SocialHabits from "./component/clients/medical-history/SocialHabits";
import FemalesOnly from "./component/clients/medical-history/FemalesOnly";
import SurgicalHistory from "./component/clients/medical-history/SurgicalHistory";
import MedicalInformation from "./component/clients/medical-history/MedicalInformation";
import MusculoskeletalHistory from "./component/clients/medical-history/MusculoskeletalHistory";
import MedicalRecordListing from "./component/clients/chart-notes/MedicalRecordListing";
import MedicalRecordMainPage from "./component/clients/chart-notes/MedicalRecordMainPage";
import MedicalActivityLog from "./component/clients/chart-notes/MedicalActivityLog";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/staff-login" component={StaffLogin} />
        <Route exact path="/staff-login2" component={StaffLogin2} />
        <Route exact path="/create-login" component={CreateLogin} />
        <Route exact path="/" component={Home} />
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
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/add-inventory" component={AddInventory} />
        <Route exact path="/communications" component={Communications} />
        <Route exact path="/social-habits" component={SocialHabits} />
        <Route exact path="/females-only" component={FemalesOnly} />
        <Route exact path="/surgical-history" component={SurgicalHistory} />
        <Route exact path="/medical-information" component={MedicalInformation} />
        <Route exact path="/musculoskeletal-history" component={MusculoskeletalHistory} />
        <Route exact path="/medical-record-listing" component={MedicalRecordListing} />
        <Route exact path="/medical-record-main-page" component={MedicalRecordMainPage} />
        <Route exact path="/medical-activity-log" component={MedicalActivityLog} />
      </Switch>
    </Router>
  );
}

export default App;
