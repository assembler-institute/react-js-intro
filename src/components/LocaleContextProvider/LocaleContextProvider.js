import React, { useState } from "react";

import LocaleContext from "../../context/locale-context";

function LocaleContextProvider({ children }) {
  const [locale, setLocale] = useState("en");

  function toggleLocale() {
    if (locale === "en") {
      setLocale("es");
    } else {
      setLocale("en");
    }
  }

  return (
    <LocaleContext.Provider
      value={{
        locale: locale,
        toggleLocale: toggleLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export default LocaleContextProvider;
