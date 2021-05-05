import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-light">
      <nav className="container navbar-expand py-2">
        <div className="nav nav-pills">
          <NavLink
            className="nav-item nav-link"
            to="/"
            exact
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/profile"
            activeClassName="active"
          >
            Profile
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
