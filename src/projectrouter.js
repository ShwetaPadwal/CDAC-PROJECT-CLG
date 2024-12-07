import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./components/Register";
import Services from "./components/Services";
import DashbBoard from "./components/DashbBoard";
import ServiceDetails from "./components/ServiceDetails";
import Titleservice from "./components/Titleservice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        //path: "/title-service/:categoryName/:title", // Dynamic route for
        //path: "/service-details/:id",
        path: "/title-service/:id",
        element: <Titleservice />,
      },
      {
        path: "/service-details/:categoryName/:taskId",
        element: <ServiceDetails />,
      },
      {
        path: "dashboard",
        element: <DashbBoard />,
      },
    ],
  },
]);

export default router;
