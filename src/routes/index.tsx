import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import LoginForm from "@/modules/Authentication/LoginForm";
import RegisterForm from "@/modules/Authentication/RegisterForm";
import About from "@/pages/About";

import analytics from "@/pages/analytics";

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
    Component: AdminLayout,
    path: "/admin",
    children: [
      {
        Component: analytics,
        path: "analytics",
      },
    ],
  },
]);
