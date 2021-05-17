import React, { useReducer } from "react";

import AuthContext from "../../context/auth-context";

const authInitialState = {
  user: null,
  isAuthenticated: false,
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

function authReducer(state, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: {
          ...action.payload,
        },
        isAuthenticated: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    }
    default: {
      return state;
    }
  }
}

function AuthContextProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  function login() {
    dispatch({
      type: LOGIN,
      payload: {
        firstName: "Dani",
        lastName: "Assembler",
        email: "dani@mail.com",
      },
    });
  }

  function logout() {
    dispatch({
      type: LOGOUT,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        auth: authState,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
