import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

import { HOME, PROFILE } from "./constants/routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.saveUser = this.saveUser.bind(this);
  }

  saveUser(userData) {
    this.setState((prevState) => ({
      users: [...prevState.users, userData],
    }));
  }

  render() {
    const { users } = this.state;

    return (
      <>
        <Header />
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
      </>
    );
  }
}

export default App;
