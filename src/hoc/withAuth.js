import React from "react";
import { Redirect } from "react-router-dom";

import getDisplayName from "../utils/getDisplayName";

import { HOME } from "../constants/routes";

function withAuth(WrappedComponent) {
  function WrapperComponent({ isAuthenticated, ...props }) {
    if (!isAuthenticated) {
      return <Redirect to={HOME} />;
    }
    return <WrappedComponent {...props} />;
  }

  WrapperComponent.displayName = getDisplayName(`withAuth(WrapperComponent)`);

  return WrapperComponent;
}

export default withAuth;
