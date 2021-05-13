import { createContext } from "react";

const LocaleContext = createContext({
  locale: "en",
  toggleLocale: () => {},
});

export default LocaleContext;
