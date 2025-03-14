import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Authentication/Login";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Home from "../pages/Home";
import Faq from "@/pages/Faq";
import UserServices from "@/pages/dashboard/UserServices";
import UserReshedule from "@/pages/dashboard/UserReshedule";
import UserTrack from "@/pages/dashboard/UserTrack";
import UserAppointment from "@/pages/dashboard/UserAppointment";
import ComplaintForm from "@/pages/ComplaintForm";
import AdminHome from "@/pages/AdminPanel/AdminHome";
import Offices from "@/pages/Offices";
import OfficeDetail from "@/pages/OfficeDetail";
import ServiceDetail from "@/pages/ServiceDetail";
import AboutUs from "@/pages/AboutUs";
import AdminLayout from "@/pages/AdminPanel/AdminLayout";
import AdminDashboard from "@/pages/AdminPanel/AdminDashboard";
import AdminAppointment from "@/pages/AdminPanel/AdminAppointment";
import AdminFeedback from "@/pages/AdminPanel/AdminFeedback";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "faq", element: <Faq /> },
      { path: "complaint", element: <ComplaintForm /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "service/:id", element: <ServiceDetail /> },
      { path: "offices", element: <Offices /> },
      { path: "offices/:id", element: <OfficeDetail /> },
    ],
  },
  { path: "login", element: <Login /> },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      { index:true, element: <AdminDashboard /> },
      { path: "appointment", element: <AdminAppointment /> },
      { path: "feedback", element: <AdminFeedback /> },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardHome />,
    children: [
      { path: "service", element: <UserServices /> },
      { path: "reshedule", element: <UserReshedule /> },
      { path: "track", element: <UserTrack /> },
      { index: true, element: <UserAppointment /> },
    ],
  },
]);
