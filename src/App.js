import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import PrivatePage from "./pages/PrivatePage";
import ProtectedRoute from "./components/ProtectedRoute";

import { HOME, PROFILE, USERS, PRIVATE } from "./constants/routes";

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
    <Switch>
      <Route path={PROFILE}>
        <Profile
          auth={auth}
          login={login}
          logout={logout}
          saveUser={saveUser}
        />
      </Route>
      <Route path={USERS}>
        <Users auth={auth} login={login} logout={logout} users={users} />
      </Route>

      <ProtectedRoute auth={auth} path={PRIVATE}>
        <PrivatePage auth={auth} login={login} logout={logout} />
      </ProtectedRoute>

      <Route path={HOME} exact>
        <Home auth={auth} login={login} logout={logout} users={users} />
      </Route>
    </Switch>
  );
}

export default App;
