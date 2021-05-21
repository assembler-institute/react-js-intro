import React, { useReducer } from "react";

import {
  AuthDispatchContext,
  AuthStateContext,
} from "../../context/auth-context";

import { authReducer, authInitialState } from "./auth-reducer";

function AuthContextProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  return (
    <AuthStateContext.Provider value={authState}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

export default AuthContextProvider;
