import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Authentication/Login";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {path:"",element:<Home/>},
        // {path:"form",element:},
      { path: "login", element: <Login /> },
      { path: "dashboard", element: <DashboardHome /> },
    ],
  },
]);
