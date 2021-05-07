import React from "react";
import { Redirect, Route } from "react-router-dom";

import { HOME } from "../../constants/routes";

function ProtectedRoute({ auth, children, ...props }) {
  return (
    <Route
      {...props}
      render={({ location }) =>
        auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: HOME,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
