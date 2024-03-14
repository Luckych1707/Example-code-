import i18next, { use } from "i18next";
import intervalPlural from "i18next-intervalplural-postprocessor";
import { initReactI18next } from "react-i18next";

import { Backend } from "./backend";

use(initReactI18next)
  .use(intervalPlural)
  .use(Backend)
  .init({
    fallbackLng: "ru",
    detection: {
      order: ["localStorage", "sessionStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "appLang",
      lookupSessionStorage: "appLang",
      caches: ["localStorage"],
      excludeCacheFor: ["cimode"],
    },
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV !== "production",
  });

export default i18next;
