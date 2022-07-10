import "../Style.css";
import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ForgotPasswordPage from '../Pages/Authentication/ForgotPasswordPage';
// import SignInPage from '../Pages/Authentication/SignInPage';
// import DashboardPage from "../Pages/Dashbaord/DashboardPage";
// import ClientsPage from "../Pages/Clients/ClientsPage";
// import ClientDetailPage from "../Pages/Clients/ClientDetailPage";
// import ClientRouter from "../Pages/Clients/ClientRouter";
// import StaffLogin from "../Containers/logins/StaffLogin";
// import StaffLogin2 from "../Containers/logins/StaffLogin2";
// import CreateLogin from "../Containers/logins/CreateLogin";
// import Services from "../Containers/admin/services/Services";
// import Servicedetails from "../Containers/admin/services/Service-details";
// import Subservicedetails from "../Containers/admin/services/Subservice-details";
// import Forms from "../Containers/admin/forms/Forms";
// import Createform from "../Containers/admin/forms/Create-form";
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
// import settings from "../Containers/settings/Settings";
// import SettingsPage from "../Pages/Settings/SettingsPage";
// import AdminPage from "../Pages/Admin/FacilityManagementPage";
// import AdminRouter from "../Pages/Admin/AdminRouter";
// import SettingsRouter from "../Pages/Settings/SettingsRouter";
// import Sidebar from "../PageLayout/SidebarNav/Sidebar";
import PrivateRoutes from "../Hoc/PrivateRoutes";
import RestrictedRoutes from "../Hoc/RestrictedRoutes";
// import FacilityManagement from "../Containers/admin/FacilityManagement";
// import FacilityDetail from "../Containers/admin/FacilityDetail";
// import EditFacility from "../Containers/admin/EditFacility";
// import SystemSettings from "../Containers/admin/SystemSettings";
// import AddingFacility from "../Containers/admin/AddingFacility";
// import AdminAppoitment from "../Containers/admin/AdminAppointment";
// import Discount from "../Containers/admin/Discount";
// import UserManagement from "../Containers/admin/UserManagement";
// import AccessManagement from "../Containers/admin/AccessManagement";
import { routesArray } from "./routesArray";
import PageLoader from "../component/common/PageLoader";
// import Sidebar from "../PageLayout/SidebarNav/Sidebar";
import PageLayout from "../PageLayout/PageLayout";
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
    <BrowserRouter>
      <Routes>
        {routesArray.map((route, index) => {
          let ComponentName = route.element;
          if (route.isPrivateRoute) {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <React.Suspense fallback={<PageLoader />}>
                    <PrivateRoutes>
                      <PageLayout>
                        <ComponentName />
                      </PageLayout>
                    </PrivateRoutes>
                  </React.Suspense>
                }
              />
            );
          }

          if (route.isRestrictedRoute) {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <React.Suspense fallback={<PageLoader />}>
                    <RestrictedRoutes>
                      <ComponentName />
                    </RestrictedRoutes>
                  </React.Suspense>
                }
              />
            );
          }

          if (route.isOpenRoute) {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <React.Suspense fallback={<PageLoader />}>
                    <ComponentName />
                  </React.Suspense>
                }
              />
            );
          }
          return null;
        })}
        {/* <Route exact path="*" element={RedirectComponent} /> */}
      </Routes>
    </BrowserRouter>
  );
}
