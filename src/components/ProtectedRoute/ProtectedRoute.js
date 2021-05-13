import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { HOME } from "../../constants/routes";
import AuthContext from "../../context/auth-context";

function ProtectedRoute({ children, ...props }) {
  const { auth } = useContext(AuthContext);

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
