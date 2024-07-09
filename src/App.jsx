import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import AppLayout from "./layouts/app-layout";
import Dashboard from "./Pages/Dashboard";
import Auth from "./Pages/Auth";
import Link from "./Pages/Link";
import RedirectLink from "./Pages/RedirectLink";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/auth", element: <Auth /> },
      { path: "/link/:id", element: <Link /> },
      { path: "/:id", element: <RedirectLink /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
