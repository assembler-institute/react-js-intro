import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { HOME, PROFILE, USERS, PRIVATE } from "../../constants/routes";
import AuthContext from "../../context/auth-context";
import Button from "../Button";

function Header() {
  const { auth, login, logout } = useContext(AuthContext);

  return (
    <header className="bg-light">
      <nav className="container navbar-expand py-2">
        <div className="d-flex align-items-center">
          <div className="nav nav-pills">
            <NavLink
              className="nav-item nav-link"
              to={HOME}
              exact
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to={PROFILE}
              activeClassName="active"
            >
              Profile
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to={USERS}
              activeClassName="active"
            >
              Users
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to={PRIVATE}
              activeClassName="active"
            >
              Private page
            </NavLink>
          </div>
          <div className="ml-auto d-flex align-items-center">
            {auth.isAuthenticated ? (
              <p className="m-0">hello</p>
            ) : (
              <p className="m-0">please login</p>
            )}
            <div className="ml-3">
              <Button
                disabled={auth.isAuthenticated}
                additionalClasses="mr-2"
                onClick={login}
              >
                Login
              </Button>
              <Button disabled={!auth.isAuthenticated} onClick={logout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
