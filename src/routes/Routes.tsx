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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "faq", element: <Faq /> },
      { path: "complaint", element: <ComplaintForm /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "admin", element: <AdminHome /> },
  {
    path: "dashboard",
    element: <DashboardHome />,
    children: [
      { path: "service", element: <UserServices /> },
      { path: "reshedule", element: <UserReshedule /> },
      { path: "track", element: <UserTrack /> },
      { path: "appointment", element: <UserAppointment /> },
    ],
  },
]);
