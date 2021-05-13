import React from "react";

import Header from "../Header";
import Main from "../Main";

function Layout({ children, ...props }) {
  return (
    <>
      <Header />
      <Main className="container mt-4" {...props}>
        {children}
      </Main>
    </>
  );
}

export default Layout;
