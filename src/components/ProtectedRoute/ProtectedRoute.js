import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { HOME } from "../../constants/routes";
import { AuthStateContext } from "../../context/auth-context";

function ProtectedRoute({ children, ...props }) {
  const { auth } = useContext(AuthStateContext);

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
