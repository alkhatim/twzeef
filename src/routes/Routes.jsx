import React from "react";
import { Redirect } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard";
import References from "../pages/References/References";
import NewReference from "../pages/References/NewReference";
import Deputies from "../pages/Deputies/Deputies";
import NewDeputy from "../pages/Deputies/NewDeputy";
import Delegates from "../pages/Delegates/Delegates";

const privateRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  { path: "/dashboard", component: Dashboard },
  { path: "/references", component: References },
  { path: "/add-reference", component: NewReference },
  { path: "/deputies", component: Deputies },
  { path: "/add-deputy", component: NewDeputy },
  { path: "/delegates", component: Delegates },
];

const publicRoutes = [{ path: "/login", component: Login }];

export { privateRoutes, publicRoutes };
