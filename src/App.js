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
// import AddingFacility from "./component/admin/AddingFacility";
import StaffListing from "./component/admin/StaffListing";
import AddStaff from "./component/admin/AddStaff";
import ClientAuthorization from "./component/admin/ClientAuthorization";
import DepartmentGeneral from "./component/admin/department/General";
import DepartmentMedical from "./component/admin/department/Medical";
import DepartmentPerformanceServices from "./component/admin/department/PerformanceServices";
import CptCodelist from "./component/admin/department/CptCodeList";
import BilledItem from "./component/admin/department/BilledItem";
import Otp from "./component/logins/Otp";
import Logout from "./component/Loout/logout";
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
import InsuranceProvider from "./component/clients/insurance/InsuranceProvider";
import InsuranceProviderDetails from "./component/clients/insurance/InsuranceProviderDetails";
import EditInsuranceDetail from "./component/clients/insurance/EditInsuranceDetail";
import AddInsurance from "./component/clients/insurance/AddInsurance";
import Appointment from "./component/clients/Appointment";
import BillingListing from "./component/clients/billing/Billing";
import BillingReview from "./component/clients/billing/BillingReview";
import BillingReviewPrint from "./component/clients/billing/BillingReviewPrint";
import Documents from "./component/clients/document/Document";
import AddDocuments from "./component/clients/document/AddDocument";
import DocumentDetails from "./component/clients/document/DocumentDetail";
import StaffOnboarding from "./component/admin/staff-onboarding/StaffOnboarding";
import AddStaffOnboarding from "./component/admin/staff-onboarding/AddStaffOnboarding";
import StaffUploadDocument from "./component/admin/staff-onboarding/StaffUploadDocument";

import Service from "./component/admin/service/Services";
import AddService from "./component/admin/service/AddService";
import EditService from "./component/admin/service/EditService";

import Facility from "./component/admin/facility/Facility";
import AddingFacility from "./component/admin/facility/AddingFacility";
import EditFacility from "./component/admin/facility/EditFacility";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/staff-login" component={StaffLogin} />
        <Route exact path="/staff-login2" component={StaffLogin2} />
        <Route exact path="/otp" component={Otp} />
        <Route exact path="/create-login" component={CreateLogin} />
        <Route exact path="/" component={StaffLogin} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/client-listing" component={ClientListing} />
        <Route exact path="/activity-log" component={ActivityLog} />
        <Route exact path="/client-details" component={ClientDetails} />
        <Route exact path="/edit-details" component={EditDetails} />
        <Route exact path="/edit-emergency-contact" component={EditEmergencyContact} />
        <Route exact path="/edit-client-medical" component={EditClientMedical} />
        <Route exact path="/admin" component={General} />
        <Route exact path="/logout" component={Logout} />
        
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
        <Route exact path="/insurance-provider" component={InsuranceProvider} />
        <Route exact path="/insurance-provider-details" component={InsuranceProviderDetails} />
        <Route exact path="/edit-insurance-detail" component={EditInsuranceDetail} />
        <Route exact path="/add-insurance" component={AddInsurance} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/billing-list" component={BillingListing} />
        <Route exact path="/billing-review" component={BillingReview} />
        <Route exact path="/billing-review-print" component={BillingReviewPrint} />
        <Route exact path="/document-list" component={Documents} />
        <Route exact path="/add-document" component={AddDocuments} />
        <Route exact path="/document-detail" component={DocumentDetails} />
        <Route exact path="/staff-onboarding" component={StaffOnboarding} />
        <Route exact path="/add-staff-onboarding" component={AddStaffOnboarding} />
        <Route exact path="/staff-upload-document" component={StaffUploadDocument} />

        <Route exact path="/services" component={Service} />
        <Route exact path="/add-service" component={AddService} />
        <Route exact path="/edit-service" component={EditService} />

        <Route exact path="/facility" component={Facility} />
        <Route exact path="/adding-facility" component={AddingFacility} />
        <Route exact path="/edit-facility" component={EditFacility} />


      </Switch>
    </Router>
  );
}

export default App;
