import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import LoginForm from "@/modules/Authentication/LoginForm";
import RegisterForm from "@/modules/Authentication/RegisterForm";
import About from "@/pages/About";

import analytics from "@/pages/analytics";
import verify from "@/pages/verify";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: About,
        path: "about",
      },
    ],
  },
  {
    Component: RegisterForm,
    path: "register",
  },
  {
    Component: LoginForm,
    path: "login",
  },
  {
    Component: verify,
    path: "verify",
  },
  {
    Component: DashboardLayout,
    path: "/admin",
    children: [
      {
        Component: analytics,
        path: "analytics",
      },
    ],
  },
  {
    Component: DashboardLayout,
    path: "/user",
    children: [
      {
        Component: analytics,
        path: "bookings",
      },
    ],
  },
]);
