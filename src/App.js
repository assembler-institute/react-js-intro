import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import PrivatePage from "./pages/PrivatePage";
import ProtectedRoute from "./components/ProtectedRoute";

import { HOME, PROFILE, USERS, PRIVATE } from "./constants/routes";

import AuthContext from "./context/auth-context";
import LocaleContextProvider from "./components/LocaleContextProvider";

function App() {
  const [users, setUsers] = useState([]);
  const [auth, setAuth] = useState({
    user: null,
    isAuthenticated: false,
  });

  function saveUser(userData) {
    setUsers((prevState) => [...prevState, userData]);
  }

  function login() {
    setAuth((prevState) => ({
      ...prevState,
      isAuthenticated: true,
    }));
  }

  function logout() {
    setAuth((prevState) => ({
      ...prevState,
      isAuthenticated: false,
    }));
  }

  return (
    <LocaleContextProvider>
      <AuthContext.Provider
        value={{ auth: auth, login: login, logout: logout }}
      >
        <Switch>
          <Route path={PROFILE}>
            <Profile saveUser={saveUser} />
          </Route>
          <Route path={USERS}>
            <Users users={users} />
          </Route>

          <ProtectedRoute path={PRIVATE}>
            <PrivatePage />
          </ProtectedRoute>

          <Route path={HOME} exact>
            <Home users={users} />
          </Route>
        </Switch>
      </AuthContext.Provider>
    </LocaleContextProvider>
  );
}

export default App;
