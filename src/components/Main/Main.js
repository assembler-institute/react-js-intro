import React from "react";

function Main({ children, ...props }) {
  return (
    <main className="container mt-4" {...props}>
      {children}
    </main>
  );
}

export default Main;
