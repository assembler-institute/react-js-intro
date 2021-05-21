import { createContext } from "react";

export const LocaleContext = createContext({
  locale: "en",
  toggleLocale: () => {},
});

export const LocaleStateContext = createContext({
  locale: "en",
});

export const LocaleDispatchContext = createContext(() => {});
