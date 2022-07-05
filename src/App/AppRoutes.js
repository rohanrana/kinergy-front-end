import "../Style.css";
import React from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ForgotPasswordPage from '../Pages/Authentication/ForgotPasswordPage';
// import SignInPage from '../Pages/Authentication/SignInPage';
import DashboardPage from '../Pages/Dashbaord/DashboardPage';
import ClientsPage from "../Pages/Clients/ClientsPage";
import ClientDetailPage from "../Pages/Clients/ClientDetailPage";
import ClientRouter from "../Pages/Clients/ClientRouter";
  import StaffLogin from "../Containers/logins/StaffLogin";
  import StaffLogin2 from "../Containers/logins/StaffLogin2";
  import CreateLogin from "../Containers/logins/CreateLogin";
//   import Home from "./component/dashboard/Home";
//   import ClientListing from "./component/clients/ClientListing";
//   import ActivityLog from "./component/clients/ActivityLog";
//   import ClientDetails from "./component/clients/ClientDetails";
//   import EditDetails from "./component/clients/EditDetails";
//   import EditEmergencyContact from "./component/clients/EditEmergencyContact";
//   import EditClientMedical from "./component/clients/EditClientMedical";
//   import General from "./component/admin/General";
//   import AddingFacility from "./component/admin/AddingFacility";
//   import StaffListing from "./component/admin/StaffListing";
//   import AddStaff from "./component/admin/AddStaff";
//   import ClientAuthorization from "./component/admin/ClientAuthorization";
//   import DepartmentGeneral from "./component/admin/department/General";
//   import DepartmentMedical from "./component/admin/department/Medical";
//   import DepartmentPerformanceServices from "./component/admin/department/PerformanceServices";
//   import CptCodelist from "./component/admin/department/CptCodeList";
//   import BilledItem from "./component/admin/department/BilledItem";
//   import Inventory from "./component/admin/department/Inventory";
//   import AddInventory from "./component/admin/department/AddInventory";
//   import Communications from "./component/admin/Communication";
//   import SocialHabits from "./component/clients/medical-history/SocialHabits";
//   import FemalesOnly from "./component/clients/medical-history/FemalesOnly";
//   import SurgicalHistory from "./component/clients/medical-history/SurgicalHistory";
//   import MedicalInformation from "./component/clients/medical-history/MedicalInformation";
//   import MusculoskeletalHistory from "./component/clients/medical-history/MusculoskeletalHistory";
//   import MedicalRecordListing from "./component/clients/chart-notes/MedicalRecordListing";
//   import MedicalRecordMainPage from "./component/clients/chart-notes/MedicalRecordMainPage";
//   import MedicalActivityLog from "./component/clients/chart-notes/MedicalActivityLog";
//   import InsuranceProvider from "./component/clients/insurance/InsuranceProvider";
//   import InsuranceProviderDetails from "./component/clients/insurance/InsuranceProviderDetails";
//   import EditInsuranceDetail from "./component/clients/insurance/EditInsuranceDetail";
//   import AddInsurance from "./component/clients/insurance/AddInsurance";
//   import Appointment from "./component/clients/Appointment";
//   import BillingListing from "./component/clients/billing/Billing";
//   import BillingReview from "./component/clients/billing/BillingReview";
//   import BillingReviewPrint from "./component/clients/billing/BillingReviewPrint";
//   import Documents from "./component/clients/document/Document";
//   import AddDocuments from "./component/clients/document/AddDocument";
//   import DocumentDetails from "./component/clients/document/DocumentDetail";
//   import StaffOnboarding from "./component/admin/staff-onboarding/StaffOnboarding";
//   import AddStaffOnboarding from "./component/admin/staff-onboarding/AddStaffOnboarding";
//   import StaffUploadDocument from "./component/admin/staff-onboarding/StaffUploadDocument";
//   import AddNewMedicalRecords from "./component/clients/chart-notes/AddNewMedicalRecord";
//   import AddSurgeryRecord from "./component/clients/chart-notes/AddSurgeryRecord";
//   import AddSurgeryDocument from "./component/clients/chart-notes/AddDocument";
//   import TherapyProgressReport from "./component/clients/chart-notes/TherapyProgressReport";
//   import ExerciseLog from "./component/clients/chart-notes/ExerciseLog";
//   import FileTransferTo from "./component/clients/chart-notes/FileTransferTo";
//   import FileTransferToList from "./component/clients/chart-notes/FileTransferToList";
//   import ViewNotes from "./component/clients/chart-notes/ViewNotes";
//   import CaseStatistics from "./component/clients/chart-notes/CaseStatistics";
//   import AddTreatmentIntervention from "./component/clients/chart-notes/AddTreatmentIntervention";
//   import RangeofMotionandStrenght from "./component/clients/chart-notes/RangeofMotionandStrength";
//   import SpecialTests from "./component/clients/chart-notes/SpecialTests";
//   import AddIcd from "./component/clients/chart-notes/AddIcd";
//   import ExerciseLog2 from "./component/clients/chart-notes/ExerciseLog2";
//   import ViewNotes2 from "./component/clients/chart-notes/ViewNotes2";
//   import importingorNew from "./component/clients/chart-notes/ImportingorNew";
//   import ViewNotes3 from "./component/clients/chart-notes/ViewNotes3";
//   import AddConsussionfile from "./component/clients/chart-notes/AddConsussionfile";
//   import UploadDocument from "./component/clients/chart-notes/UploadDocument";
//   import CptCodes from "./component/clients/chart-notes/CptCodes";
//   import BookAppointment from "./component/clients/chart-notes/BookAppointment";
//   import AppointmentSummary from "./component/clients/chart-notes/AppointmentSummary";
//   import TreatmentGoal from "./component/admin/department/TreatmentGoal";
//   import TreatmentNote from "./component/admin/department/TreatmentNote";
//   import ManageBody from "./component/admin/department/ManageBody";
//   import IcdCodeList from "./component/admin/department/IcdCodeList";
//   import WorkoutGoals from "./component/admin/department/WorkoutGoals";
//   import PerformanceNote from "./component/admin/department/PerformanceNote";
//   import FacilityManagement from "./component/admin/FacilityManagement";
//   import FacilityDetail from "./component/admin/FacilityDetail";
//   import EditFacility from "./component/admin/EditFacility";
//   import SystemSettings from "./component/admin/SystemSettings";
//   import AdminAppoitment from "./component/admin/AdminAppointment";
import settings from "../Containers/settings/Settings";
import SettingsPage from "../Pages/Settings/SettingsPage";
import AdminPage from "../Pages/Admin/AdminPage";
import AdminRouter from "../Pages/Admin/AdminRouter";
import SettingsRouter from "../Pages/Settings/SettingsRouter";
import Sidebar from "../PageLayout/SidebarNav/Sidebar";
//   import EditPersonalDetail from "./component/settings/EditPersonalDetail";
//   import UpdatePassword from "./component/settings/UpdatePassword";
//   import EditContactInformation from "./component/settings/EditContactInformation";
//   import UserManagement from "./component/admin/UserManagement";
//   import UserDetails from "./component/admin/UserDetails";
//   import EditUsers from "./component/admin/EditUsers";
//   import EditPreferences from "./component/admin/EditPreferences";
//   import AccessManagement from "./component/admin/AccessManagement";
//   import Discount from "./component/admin/Discount";
//   import DiscountDetail from "./component/admin/DiscountDetail";
//   import EditCoupon from "./component/admin/EditCoupon";
// import HomePage from '../Pages/Home/HomePage';
// import RegisterPage from '../Pages/Register/RegisterPage';
// import { appRoutesConst } from './navigation';


export default function AppRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/staff-login" component={StaffLogin} />
                <Route exact path="/staff-login2" component={StaffLogin2} />
                <Route exact path="/create-login" component={CreateLogin} />

                <Route exact path="/" component={DashboardPage} />
                <Route path="/settings" component={SettingsRouter} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/client" component={ClientRouter} />
                {/* <Route exact path="/admin/system-settings" component={SystemSettings} /> */}

                {/* <Route exact path="/client-listing" component={ClientListing} />
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
          <Route exact path="/add-new-medical-record" component={AddNewMedicalRecords} />
          <Route exact path="/add-surgery-record" component={AddSurgeryRecord} />
          <Route exact path="/add-surgery-document" component={AddSurgeryDocument} />
          <Route exact path="/therapy-progress-report" component={TherapyProgressReport} />
          <Route exact path="/exercise-log" component={ExerciseLog} />
          <Route exact path="/file-transfer-to" component={FileTransferTo} />
          <Route exact path="/file-transfer-to-list" component={FileTransferToList} />
          <Route exact path="/view-notes" component={ViewNotes} />
          <Route exact path="/case-statistics" component={CaseStatistics} />
          <Route exact path="/add-treatment-intervention" component={AddTreatmentIntervention} />
          <Route exact path="/range-of-motion" component={RangeofMotionandStrenght} />
          <Route exact path="/special-tests" component={SpecialTests} />
          <Route exact path="/add-icd" component={AddIcd} />
          <Route exact path="/exercise-log2" component={ExerciseLog2} />
          <Route exact path="/view-notes2" component={ViewNotes2} />
          <Route exact path="/importing-or-new" component={importingorNew} />
          <Route exact path="/view-notes3" component={ViewNotes3} />
          <Route exact path="/add-consussion-file" component={AddConsussionfile} />
          <Route exact path="/upload-document" component={UploadDocument} />
          <Route exact path="/cpt-codes" component={CptCodes} />
          <Route exact path="/book-appointment" component={BookAppointment} />
          <Route exact path="/appointment-summary" component={AppointmentSummary} />
          <Route exact path="/treatment-goal" component={TreatmentGoal} />
          <Route exact path="/treatment-note" component={TreatmentNote} />
          <Route exact path="/manage-body" component={ManageBody} />
          <Route exact path="/icd-code-list" component={IcdCodeList} />
          <Route exact path="/workout-goals" component={WorkoutGoals} />
          <Route exact path="/performance-note" component={PerformanceNote} />
          <Route exact path="/facility-management" component={FacilityManagement} />
          <Route exact path="/facility-detail" component={FacilityDetail} />
          <Route exact path="/edit-facility" component={EditFacility} />
          <Route exact path="/system-settings" component={SystemSettings} />
          <Route exact path="/admin-appointment" component={AdminAppoitment} />
        //   <Route exact path="/settings" component={settings} />
          <Route exact path="/edit-personal-detail" component={EditPersonalDetail} />
          <Route exact path="/update-password" component={UpdatePassword} />
          <Route exact path="/edit-contact-information" component={EditContactInformation} />
          <Route exact path="/user-management" component={UserManagement} />
          <Route exact path="/user-detail" component={UserDetails} />
          <Route exact path="/edit-users" component={EditUsers} />
          <Route exact path="/edit-preferences" component={EditPreferences} />
          <Route exact path="/access-management" component={AccessManagement} />
          <Route exact path="/discount" component={Discount} />
          <Route exact path="/discount-detail" component={DiscountDetail} />
          <Route exact path="/edit-coupon" component={EditCoupon} /> */}
            </Switch>
        </Router>
    )
}

