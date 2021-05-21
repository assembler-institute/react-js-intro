import React, { useState, useCallback } from "react";

import {
  LocaleStateContext,
  LocaleDispatchContext,
} from "../../context/locale-context";

function LocaleContextProvider({ children }) {
  const [locale, setLocale] = useState("en");

  const toggleLocale = useCallback(() => {
    if (locale === "en") {
      setLocale("es");
    } else {
      setLocale("en");
    }
  }, [locale]);

  return (
    <LocaleStateContext.Provider value={locale}>
      <LocaleDispatchContext.Provider value={toggleLocale}>
        {children}
      </LocaleDispatchContext.Provider>
    </LocaleStateContext.Provider>
  );
}

export default LocaleContextProvider;
