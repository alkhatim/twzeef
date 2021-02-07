import React from "react";
import { Redirect } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard";
import References from "../pages/References/References";
import NewReference from "../pages/References/NewReference";
import Deputies from "../pages/Deputies/Deputies";
import NewDeputy from "../pages/Deputies/NewDeputy";
import Delegates from "../pages/Delegates/Delegates";
import NewDelegate from "../pages/Delegates/NewDelegate";
import AgencyUsers from "../pages/AgencyUsers/AgencyUsers";
import NewAgencyUser from "../pages/AgencyUsers/NewAgencyUser";

const privateRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  { path: "/dashboard", component: Dashboard },
  { path: "/references", component: References },
  { path: "/add-reference", component: NewReference },
  { path: "/deputies", component: Deputies },
  { path: "/add-deputy", component: NewDeputy },
  { path: "/delegates", component: Delegates },
  { path: "/add-delegate", component: NewDelegate },
  { path: "/agency-users", component: AgencyUsers },
  { path: "/add-agency-user", component: NewAgencyUser },
];

const publicRoutes = [{ path: "/login", component: Login }];

export { privateRoutes, publicRoutes };
