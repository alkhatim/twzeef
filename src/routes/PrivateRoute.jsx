import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useHistory, useLocation } from "react-router-dom";
import roles from "./Roles";

const PrivateRoute = ({
  component: Component,
  layout: Layout,
  allowed,
  ...rest
}) => {
  const history = useHistory();
  const location = useLocation();
  const { isLoggedIn, user } = useSelector((store) => store.auth);

  if (!isLoggedIn) {
    history.push("/login");
  }

  if (allowed) {
    let allowed = [];
    for (let role of props.allowed) {
      allowed = [...allowed, ...roles[role]];
    }
    if (!allowed.includes(user.role)) history.push("/forbidden");
  }

  return (
    <Route
      {...rest}
      render={() =>
        !isLoggedIn ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location.pathname },
            }}
          />
        ) : (
          <Layout>
            <Component {...rest} />
          </Layout>
        )
      }
    />
  );
};

export default PrivateRoute;
