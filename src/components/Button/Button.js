import React from "react";

function Button({
  additionalClasses = "",
  submitButton,
  disabled = false,
  children,
  ...props
}) {
  return (
    <button
      className={`btn btn-primary ${additionalClasses}`}
      type={submitButton ? "submit" : "button"}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
