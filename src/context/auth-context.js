import { createContext } from "react";

export const AuthMixedContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthStateContext = createContext({
  user: null,
  isAuthenticated: false,
});

export const AuthDispatchContext = createContext(() => {});
