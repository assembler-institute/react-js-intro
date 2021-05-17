import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import PrivatePage from "./pages/PrivatePage";
import ProtectedRoute from "./components/ProtectedRoute";

import { HOME, PROFILE, USERS, PRIVATE } from "./constants/routes";

import AuthContextProvider from "./components/AuthContextProvider";
import LocaleContextProvider from "./components/LocaleContextProvider";

function App() {
  const [users, setUsers] = useState([]);

  function saveUser(userData) {
    setUsers((prevState) => [...prevState, userData]);
  }

  return (
    <LocaleContextProvider>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </LocaleContextProvider>
  );
}

export default App;
