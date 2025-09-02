import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import About from "@/pages/about";

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
