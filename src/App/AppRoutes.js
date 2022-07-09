import "../Style.css";
import React from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import PrivateRoutes from "../Hoc/PrivateRoutes";
import RestrictedRoutes from "../Hoc/RestrictedRoutes";
import FacilityManagement from "../Containers/admin/FacilityManagement";
import FacilityDetail from "../Containers/admin/FacilityDetail";
import EditFacility from "../Containers/admin/EditFacility";
import SystemSettings from "../Containers/admin/SystemSettings";
import AddingFacility from "../Containers/admin/AddingFacility";
import AdminAppoitment from "../Containers/admin/AdminAppointment";
import Discount from "../Containers/admin/Discount";
import UserManagement from "../Containers/admin/UserManagement";
import AccessManagement from "../Containers/admin/AccessManagement";
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
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route exact path="/staff-login" element={
          <RestrictedRoutes>
            <StaffLogin />
          </RestrictedRoutes>
        } />
        <Route exact path="/staff-login2" element={
          <RestrictedRoutes>
            <StaffLogin2 />
          </RestrictedRoutes>
        } />
        <Route exact path="/create-login" element={
          <RestrictedRoutes>
            <CreateLogin />
          </RestrictedRoutes>

        } />


        <Route path="/settings" element={
          <PrivateRoutes>
            <SettingsRouter />
          </PrivateRoutes>
        } />
        <Route path="/admin">
          <Route element={<Sidebar />} />
          <Route index={true} path="/admin/facility-management" element={
            <PrivateRoutes>
              <Sidebar />
              <FacilityManagement />
            </PrivateRoutes> 
          } />
          <Route path="/admin/facility-detail/:facility_id" element={
            <PrivateRoutes>
              <Sidebar /><FacilityDetail /></PrivateRoutes>
          } />
          <Route path="/admin/edit-facility" element={
            <PrivateRoutes>
              <Sidebar />
              <EditFacility /></PrivateRoutes>
          } />
          <Route path="/admin/system-settings" element={
            <PrivateRoutes>
              <Sidebar />
              <SystemSettings /></PrivateRoutes>
          } />
          <Route path="/admin/adding-facility" element={
            <PrivateRoutes>
              <Sidebar />
              <AddingFacility /></PrivateRoutes>
          } />
          <Route path="/admin/admin-appointment" element={
            <PrivateRoutes>
              <Sidebar />
              <AdminAppoitment /></PrivateRoutes>
          } />
          <Route path="/admin/discount" element={
            <PrivateRoutes>
              <Sidebar />
              <Discount /></PrivateRoutes>
          } />
          <Route path="/admin/user-management" element={
            <PrivateRoutes>
              <Sidebar />
              <UserManagement /></PrivateRoutes>
          } />
          <Route path="/admin/access-management" element={
            <PrivateRoutes>
              <Sidebar />
              <AccessManagement /></PrivateRoutes>
          } />
        </Route>
        <Route path="/client" element={<ClientRouter />} />
        {/* <Route exact path="/admin/system-settings" element={SystemSettings} /> */}

        {/* <Route exact path="/client-listing" element={ClientListing} />
          <Route exact path="/activity-log" element={ActivityLog} />
          <Route exact path="/client-details" element={ClientDetails} />
          <Route exact path="/edit-details" element={EditDetails} />
          <Route exact path="/edit-emergency-contact" element={EditEmergencyContact} />
          <Route exact path="/edit-client-medical" element={EditClientMedical} />
          <Route exact path="/admin" element={General} />
          <Route exact path="/adding-facility" element={AddingFacility} />
          <Route exact path="/staff-listing" element={StaffListing} />
          <Route exact path="/add-staff" element={AddStaff} />
          <Route exact path="/client-authorization" element={ClientAuthorization} />
          <Route exact path="/department-general" element={DepartmentGeneral} />
          <Route exact path="/department-medical" element={DepartmentMedical} />
          <Route exact path="/department-performance-services" element={DepartmentPerformanceServices} />
          <Route exact path="/cpt-code-list" element={CptCodelist} />
          <Route exact path="/billed-item" element={BilledItem} />
          <Route exact path="/inventory" element={Inventory} />
          <Route exact path="/add-inventory" element={AddInventory} />
          <Route exact path="/communications" element={Communications} />
          <Route exact path="/social-habits" element={SocialHabits} />
          <Route exact path="/females-only" element={FemalesOnly} />
          <Route exact path="/surgical-history" element={SurgicalHistory} />
          <Route exact path="/medical-information" element={MedicalInformation} />
          <Route exact path="/musculoskeletal-history" element={MusculoskeletalHistory} />
          <Route exact path="/medical-record-listing" element={MedicalRecordListing} />
          <Route exact path="/medical-record-main-page" element={MedicalRecordMainPage} />
          <Route exact path="/medical-activity-log" element={MedicalActivityLog} />
          <Route exact path="/insurance-provider" element={InsuranceProvider} />
          <Route exact path="/insurance-provider-details" element={InsuranceProviderDetails} />
          <Route exact path="/edit-insurance-detail" element={EditInsuranceDetail} />
          <Route exact path="/add-insurance" element={AddInsurance} />
          <Route exact path="/appointment" element={Appointment} />
          <Route exact path="/billing-list" element={BillingListing} />
          <Route exact path="/billing-review" element={BillingReview} />
          <Route exact path="/billing-review-print" element={BillingReviewPrint} />
          <Route exact path="/document-list" element={Documents} />
          <Route exact path="/add-document" element={AddDocuments} />
          <Route exact path="/document-detail" element={DocumentDetails} />
          <Route exact path="/staff-onboarding" element={StaffOnboarding} />
          <Route exact path="/add-staff-onboarding" element={AddStaffOnboarding} />
          <Route exact path="/staff-upload-document" element={StaffUploadDocument} />
          <Route exact path="/add-new-medical-record" element={AddNewMedicalRecords} />
          <Route exact path="/add-surgery-record" element={AddSurgeryRecord} />
          <Route exact path="/add-surgery-document" element={AddSurgeryDocument} />
          <Route exact path="/therapy-progress-report" element={TherapyProgressReport} />
          <Route exact path="/exercise-log" element={ExerciseLog} />
          <Route exact path="/file-transfer-to" element={FileTransferTo} />
          <Route exact path="/file-transfer-to-list" element={FileTransferToList} />
          <Route exact path="/view-notes" element={ViewNotes} />
          <Route exact path="/case-statistics" element={CaseStatistics} />
          <Route exact path="/add-treatment-intervention" element={AddTreatmentIntervention} />
          <Route exact path="/range-of-motion" element={RangeofMotionandStrenght} />
          <Route exact path="/special-tests" element={SpecialTests} />
          <Route exact path="/add-icd" element={AddIcd} />
          <Route exact path="/exercise-log2" element={ExerciseLog2} />
          <Route exact path="/view-notes2" element={ViewNotes2} />
          <Route exact path="/importing-or-new" element={importingorNew} />
          <Route exact path="/view-notes3" element={ViewNotes3} />
          <Route exact path="/add-consussion-file" element={AddConsussionfile} />
          <Route exact path="/upload-document" element={UploadDocument} />
          <Route exact path="/cpt-codes" element={CptCodes} />
          <Route exact path="/book-appointment" element={BookAppointment} />
          <Route exact path="/appointment-summary" element={AppointmentSummary} />
          <Route exact path="/treatment-goal" element={TreatmentGoal} />
          <Route exact path="/treatment-note" element={TreatmentNote} />
          <Route exact path="/manage-body" element={ManageBody} />
          <Route exact path="/icd-code-list" element={IcdCodeList} />
          <Route exact path="/workout-goals" element={WorkoutGoals} />
          <Route exact path="/performance-note" element={PerformanceNote} />
          <Route exact path="/facility-management" element={FacilityManagement} />
          <Route exact path="/facility-detail" element={FacilityDetail} />
          <Route exact path="/edit-facility" element={EditFacility} />
          <Route exact path="/system-settings" element={SystemSettings} />
          <Route exact path="/admin-appointment" element={AdminAppoitment} />
        //   <Route exact path="/settings" element={settings} />
          <Route exact path="/edit-personal-detail" element={EditPersonalDetail} />
          <Route exact path="/update-password" element={UpdatePassword} />
          <Route exact path="/edit-contact-information" element={EditContactInformation} />
          <Route exact path="/user-management" element={UserManagement} />
          <Route exact path="/user-detail" element={UserDetails} />
          <Route exact path="/edit-users" element={EditUsers} />
          <Route exact path="/edit-preferences" element={EditPreferences} />
          <Route exact path="/access-management" element={AccessManagement} />
          <Route exact path="/discount" element={Discount} />
          <Route exact path="/discount-detail" element={DiscountDetail} />
          <Route exact path="/edit-coupon" element={EditCoupon} /> */}
        {/* <Route exact path="*" element={DashboardPage} /> */}
      </Routes>
    </Router>
  )
}

