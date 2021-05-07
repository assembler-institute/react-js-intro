import React from "react";

import Header from "../Header";
import Main from "../Main";

function Layout({ auth, login, logout, children, ...props }) {
  return (
    <>
      <Header auth={auth} login={login} logout={logout} />
      <Main className="container mt-4" {...props}>
        {children}
      </Main>
    </>
  );
}

export default Layout;
