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
import Clients from "../pages/Clients/Clients";
import NewClient from "../pages/Clients/NewClient";
import NewVisa from "../pages/Visas/NewVisa";
import AllJobsTable from "../pages/Jobs/AllJobsTable";
import NewTransaction from "../pages/Wallet/NewTransaction";

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
  { path: "/my-clients", component: Clients },
  { path: "/add-client", component: NewClient },
  { path: "/add-visa", component: NewVisa },
  { path: "/all-jobs", component: AllJobsTable },
  { path: "/new-transaction", component: NewTransaction },
];

const publicRoutes = [{ path: "/login", component: Login }];

export { privateRoutes, publicRoutes };
