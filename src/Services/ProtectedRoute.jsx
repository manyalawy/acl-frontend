import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuth from "./isAuth";

function ProtectedRoute({ component: Component, ...rest }) {

  const auth = false;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth()) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
