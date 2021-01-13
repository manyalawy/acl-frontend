import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuth from "./isAuth";

function ProtectedRoute({ component: Component, ...rest }) {
  const auth = false;
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth() ? <Redirect to="/login" /> : <Redirect to="/login" />;
      }}
    />
  );
}

export default ProtectedRoute;
