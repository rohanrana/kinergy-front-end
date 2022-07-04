import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MedicalRecordListing from '../../Containers/clients/chart-notes/MedicalRecordListing'
import Documents from '../../Containers/clients/document/Document'
import Sidebar from '../../PageLayout/SidebarNav/Sidebar'
import ClientDetailPage from './ClientDetailPage'
import ClientsPage from './ClientsPage'
//   import StaffLogin from "../../Containers/logins/StaffLogin";
//   import StaffLogin2 from "../../Containers/logins/StaffLogin2";
//   import CreateLogin from "../../Containers/logins/CreateLogin";
//   import Home from "../../Containers/dashboard/Home";
//   import ClientListing from "../../Containers/clients/ClientListing";
//   import ActivityLog from "../../Containers/clients/ActivityLog";
//   import ClientDetails from "../../Containers/clients/ClientDetails";
import EditDetails from "../../Containers/clients/EditDetails";
//   import EditEmergencyContact from "../../Containers/clients/EditEmergencyContact";
//   import EditClientMedical from "../../Containers/clients/EditClientMedical";
//   import General from "../../Containers/admin/General";
//   import AddingFacility from "../../Containers/admin/AddingFacility";
//   import StaffListing from "../../Containers/admin/StaffListing";
//   import AddStaff from "../../Containers/admin/AddStaff";
//   import ClientAuthorization from "../../Containers/admin/ClientAuthorization";
//   import DepartmentGeneral from "../../Containers/admin/department/General";
//   import DepartmentMedical from "../../Containers/admin/department/Medical";
//   import DepartmentPerformanceServices from "../../Containers/admin/department/PerformanceServices";
//   import CptCodelist from "../../Containers/admin/department/CptCodeList";
//   import BilledItem from "../../Containers/admin/department/BilledItem";
//   import Inventory from "../../Containers/admin/department/Inventory";
//   import AddInventory from "../../Containers/admin/department/AddInventory";
//   import Communications from "../../Containers/admin/Communication";
//   import SocialHabits from "../../Containers/clients/medical-history/SocialHabits";
//   import FemalesOnly from "../../Containers/clients/medical-history/FemalesOnly";
//   import SurgicalHistory from "../../Containers/clients/medical-history/SurgicalHistory";
import MedicalInformation from "../../Containers/clients/medical-history/MedicalInformation";
import MusculoskeletalHistory from "../../Containers/clients/medical-history/MusculoskeletalHistory";
//   import MedicalRecordListing from "../../Containers/clients/chart-notes/MedicalRecordListing";
import MedicalRecordMainPage from "../../Containers/clients/chart-notes/MedicalRecordMainPage";
import MedicalActivityLog from "../../Containers/clients/chart-notes/MedicalActivityLog";
import InsuranceProvider from "../../Containers/clients/insurance/InsuranceProvider";
import InsuranceProviderDetails from "../../Containers/clients/insurance/InsuranceProviderDetails";
import EditInsuranceDetail from "../../Containers/clients/insurance/EditInsuranceDetail";
import AddInsurance from "../../Containers/clients/insurance/AddInsurance";
import Appointment from "../../Containers/clients/Appointment";
import BillingListing from "../../Containers/clients/billing/Billing";
import BillingReview from "../../Containers/clients/billing/BillingReview";
import BillingReviewPrint from "../../Containers/clients/billing/BillingReviewPrint";
//   import Documents from "../../Containers/clients/document/Document";
import AddDocuments from "../../Containers/clients/document/AddDocument";
import DocumentDetails from "../../Containers/clients/document/DocumentDetail";

//   import StaffOnboarding from "../../Containers/admin/staff-onboarding/StaffOnboarding";
//   import AddStaffOnboarding from "../../Containers/admin/staff-onboarding/AddStaffOnboarding";
//   import StaffUploadDocument from "../../Containers/admin/staff-onboarding/StaffUploadDocument";
import AddNewMedicalRecords from "../../Containers/clients/chart-notes/AddNewMedicalRecord";
import AddSurgeryRecord from "../../Containers/clients/chart-notes/AddSurgeryRecord";
import AddSurgeryDocument from "../../Containers/clients/chart-notes/AddDocument";
import TherapyProgressReport from "../../Containers/clients/chart-notes/TherapyProgressReport";
import ExerciseLog from "../../Containers/clients/chart-notes/ExerciseLog";
import FileTransferTo from "../../Containers/clients/chart-notes/FileTransferTo";
import FileTransferToList from "../../Containers/clients/chart-notes/FileTransferToList";
import ViewNotes from "../../Containers/clients/chart-notes/ViewNotes";
import CaseStatistics from "../../Containers/clients/chart-notes/CaseStatistics";
//   import AddTreatmentIntervention from "../../Containers/clients/chart-notes/AddTreatmentIntervention";
//   import RangeofMotionandStrenght from "../../Containers/clients/chart-notes/RangeofMotionandStrength";
//   import SpecialTests from "../../Containers/clients/chart-notes/SpecialTests";
//   import AddIcd from "../../Containers/clients/chart-notes/AddIcd";
//   import ExerciseLog2 from "../../Containers/clients/chart-notes/ExerciseLog2";
//   import ViewNotes2 from "../../Containers/clients/chart-notes/ViewNotes2";
//   import importingorNew from "../../Containers/clients/chart-notes/ImportingorNew";
//   import ViewNotes3 from "../../Containers/clients/chart-notes/ViewNotes3";
//   import AddConsussionfile from "../../Containers/clients/chart-notes/AddConsussionfile";
//   import UploadDocument from "../../Containers/clients/chart-notes/UploadDocument";
//   import CptCodes from "../../Containers/clients/chart-notes/CptCodes";
//   import BookAppointment from "../../Containers/clients/chart-notes/BookAppointment";
//   import AppointmentSummary from "../../Containers/clients/chart-notes/AppointmentSummary";
//   import TreatmentGoal from "../../Containers/admin/department/TreatmentGoal";
//   import TreatmentNote from "../../Containers/admin/department/TreatmentNote";
//   import ManageBody from "../../Containers/admin/department/ManageBody";
//   import IcdCodeList from "../../Containers/admin/department/IcdCodeList";
//   import WorkoutGoals from "../../Containers/admin/department/WorkoutGoals";
//   import PerformanceNote from "../../Containers/admin/department/PerformanceNote";
//   import FacilityManagement from "../../Containers/admin/FacilityManagement";
//   import FacilityDetail from "../../Containers/admin/FacilityDetail";
//   import EditFacility from "../../Containers/admin/EditFacility";
//   import SystemSettings from "../../Containers/admin/SystemSettings";
//   import AdminAppoitment from "../../Containers/admin/AdminAppointment";
//   import settings from "../../Containers/settings/Settings";
//   import EditPersonalDetail from "../../Containers/settings/EditPersonalDetail";
//   import UpdatePassword from "../../Containers/settings/UpdatePassword";
//   import EditContactInformation from "../../Containers/settings/EditContactInformation";
//   import UserManagement from "../../Containers/admin/UserManagement";
//   import UserDetails from "../../Containers/admin/UserDetails";
//   import EditUsers from "../../Containers/admin/EditUsers";
//   import EditPreferences from "../../Containers/admin/EditPreferences";
//   import AccessManagement from "../../Containers/admin/AccessManagement";
//   import Discount from "../../Containers/admin/Discount";
//   import DiscountDetail from "../../Containers/admin/DiscountDetail";
//   import EditCoupon from "../../Containers/admin/EditCoupon";

export default function ClientRouter() {
    return (

        <Fragment>
            <Route path="/client/client-listing" component={ClientsPage} />
            <Route path="/client/client-details" component={ClientDetailPage} />
            <Route path="/client/edit-details" component={EditDetails} />
            <Route path="/client/case-statistics" component={CaseStatistics} />
            <Route path="/client/document-list" component={Documents} />
            <Route path="/client/document-detail" component={DocumentDetails} />
            <Route path="/client/insurance-provider" component={InsuranceProvider} />
            <Route path="/client/insurance-provider-details" component={InsuranceProviderDetails} />
            <Route path="/client/edit-insurance-detail" component={EditInsuranceDetail} />
            <Route path="/client/add-insurance" component={AddInsurance} />
            <Route path="/client/appointment" component={Appointment} />
            <Route path="/client/billing-list" component={BillingListing} />
            <Route path="/client/billing-review" component={BillingReview} />
            <Route path="/client/billing-review-print" component={BillingReviewPrint} />
            <Route path="/client/medical-information" component={MedicalInformation} />
            <Route path="/client/musculoskeletal-history" component={MusculoskeletalHistory} />
            <Route path="/client/medical-record-listing" component={MedicalRecordListing} />
            <Route path="/client/medical-record-main-page" component={MedicalRecordMainPage} />
            <Route path="/client/medical-activity-log" component={MedicalActivityLog} />
            <Route path="/client/add-surgery-record" component={AddSurgeryRecord} />
            <Route path="/client/add-surgery-document" component={AddSurgeryDocument} />
            <Route path="/client/therapy-progress-report" component={TherapyProgressReport} />
            <Route path="/client/exercise-log" component={ExerciseLog} />
            <Route path="/client/file-transfer-to" component={FileTransferTo} />
            <Route path="/client/file-transfer-to-list" component={FileTransferToList} />
            <Route path="/client/view-notes" component={ViewNotes} />
            <Route path="/client/add-new-medical-record" component={AddNewMedicalRecords} />
            <Route path="/client/add-document" component={AddDocuments} />



        </Fragment>
    )
}
