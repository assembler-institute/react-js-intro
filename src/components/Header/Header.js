import React, { memo, useContext } from "react";
import { NavLink } from "react-router-dom";

import { HOME, PROFILE, USERS, PRIVATE } from "../../constants/routes";
import {
  AuthMixedContext,
  // AuthStateContext,
  // AuthDispatchContext,
} from "../../context/auth-context";
// import { LOGIN, LOGOUT } from "../AuthContextProvider/auth-context-types";
import LocaleContext from "../../context/locale-context";
import Button from "../Button";

function Header() {
  const { auth, login, logout } = useContext(AuthMixedContext);
  // const auth = useContext(AuthStateContext);
  // const dispatch = useContext(AuthDispatchContext);
  const { locale, toggleLocale } = useContext(LocaleContext);

  // eslint-disable-next-line no-console
  console.log("Render: <Header />");

  // function login() {
  //   dispatch({
  //     type: LOGIN,
  //     payload: {
  //       firstName: "Dani",
  //       lastName: "Assembler",
  //       email: "dani@mail.com",
  //     },
  //   });
  // }
  //
  // function logout() {
  //   dispatch({
  //     type: LOGOUT,
  //   });
  // }

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
              {locale === "en" ? "Home" : "Inicio"}
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to={PROFILE}
              activeClassName="active"
            >
              {locale === "en" ? "Profile" : "Perfíl"}
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to={USERS}
              activeClassName="active"
            >
              {locale === "en" ? "Users" : "Usuarios"}
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to={PRIVATE}
              activeClassName="active"
            >
              {locale === "en" ? "Private page" : "Página privada"}
            </NavLink>
          </div>
          <div className="ml-auto d-flex align-items-center">
            {auth.isAuthenticated ? (
              <p className="m-0">{locale === "en" ? "hello" : "hola"}</p>
            ) : (
              <p className="m-0">
                {locale === "en" ? "please login" : "por favor inicia sesión"}
              </p>
            )}
            <div className="mr-3 ml-3">
              <Button
                disabled={auth.isAuthenticated}
                additionalClasses="mr-2"
                onClick={login}
              >
                {locale === "en" ? "Login" : "Iniciar sesión"}
              </Button>
              <Button disabled={!auth.isAuthenticated} onClick={logout}>
                {locale === "en" ? "Logout" : "Cerrar sesión"}
              </Button>
            </div>
            <Button onClick={toggleLocale}>
              {locale === "en" ? "English" : "Español"}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default memo(Header);
