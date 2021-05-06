import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import PrivatePage from "./pages/PrivatePage";

import { HOME, PROFILE, USERS, PRIVATE } from "./constants/routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isAuthenticated: false,
    };

    this.saveUser = this.saveUser.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  saveUser(userData) {
    this.setState((prevState) => ({
      users: [...prevState.users, userData],
    }));
  }

  login() {
    this.setState({
      isAuthenticated: true,
    });
  }

  logout() {
    this.setState({
      isAuthenticated: false,
    });
  }

  render() {
    const { users, isAuthenticated } = this.state;

    return (
      <>
        <Header
          isAuthenticated={isAuthenticated}
          login={this.login}
          logout={this.logout}
        />
        <Route
          exact
          path={HOME}
          render={(routeProps) => <Home users={users} {...routeProps} />}
        />
        <Route
          exact
          path={PROFILE}
          render={(routeProps) => (
            <Profile saveUser={this.saveUser} {...routeProps} />
          )}
        />
        <Route
          exact
          path={USERS}
          render={(routeProps) => <Users {...routeProps} />}
        />
        <Route
          exact
          path={PRIVATE}
          render={(routeProps) => (
            <PrivatePage isAuthenticated={isAuthenticated} {...routeProps} />
          )}
        />
      </>
    );
  }
}

export default App;
