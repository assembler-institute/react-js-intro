import React from "react";

function Main({ children, ...props }) {
  // eslint-disable-next-line no-console
  console.log("Render: <Main />");

  return (
    <main className="container mt-4" {...props}>
      {children}
    </main>
  );
}

export default Main;
