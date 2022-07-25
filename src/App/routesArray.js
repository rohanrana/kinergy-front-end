import { lazy } from "react";
import { appRoutesConst } from "./navigation";

const HomePage = lazy(() => import("../Containers/Services/ServiceCategories"));
const SignInWithMobile = lazy(() =>
  import("../Containers/SIgninWith/SignInWithMobile")
);
const SignInWithEmail = lazy(() =>
  import("../Containers/SIgninWith/SignInWithEmail")
);
const ServiceDetails = lazy(() =>
  import("../Containers/Services/ServiceDetails")
);
const AppointmentFor = lazy(() =>
  import("../Containers/Appointments/AppointmentFor")
);
const AppointmentTypes = lazy(() =>
  import("../Containers/Appointments/AppointmentTypes")
);
const NewAppointmentBooking = lazy(() =>
  import("../Containers/Appointments/NewAppointmentBooking")
);
const FollowUpAppointmentBooking = lazy(() =>
  import("../Containers/Appointments/FollowUpAppointmentBooking")
);
const NewUserSignUp = lazy(() => import("../Containers/SignUp/NewUserSignup"));

const Providers = lazy(() => import("../Containers/Appointments/Providers"));
const BookAppointment = lazy(() =>
  import("../Containers/Appointments/BookAppointment")
);

//isPrivateRoute
//isOpenRoute
//isPrivateRoute

export const routesArray = [
  // {
  //   path: appRoutesConst.signin,
  //   element: SignInPage,
  //   isRestrictedRoute: true,
  // },
  {
    path: appRoutesConst.home,
    element: HomePage,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.index,
    element: HomePage,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.subServices,
    element: HomePage,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.serviceDetails,
    element: ServiceDetails,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.loginwithemail,
    element: SignInWithEmail,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.loginwithphone,
    element: SignInWithMobile,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.appointmentFor,
    element: AppointmentFor,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.appointmentTypes,
    element: AppointmentTypes,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.newAppointmentBooking,
    element: NewAppointmentBooking,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.newAppointmentBooking,
    element: NewAppointmentBooking,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.followUpAppointmentBooking,
    element: FollowUpAppointmentBooking,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.newUserSignUp,
    element: NewUserSignUp,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.providers,
    element: Providers,
    isOpenRoute: true,
  },
  {
    path: appRoutesConst.bookappointment,
    element: BookAppointment,
    isOpenRoute: true,
  },
];
