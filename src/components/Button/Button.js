import React from "react";

function Button({ children }) {
  return (
    <button type="button" className="btn btn-primary m-5">
      {children}
    </button>
  );
}

export default Button;
