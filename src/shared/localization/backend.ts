import { BackendModule, ReadCallback } from "i18next";

const data = import.meta.glob("./resources/**/*.json");

export const Backend: BackendModule = {
  type: "backend",
  init() {
    /* nothing to do here */
  },

  read(language: string, namespace: string, callback: ReadCallback) {
    const path = namespace
      .split("_")
      .map((pathPortion) => {
        switch (pathPortion) {
          case "p":
            return "pages";
          case "c":
            return "components";
          default:
            return pathPortion;
        }
      })
      .join("/");

    const importPath = `./resources/${path}/${language}.json`;

    const importLocale = data[importPath]?.() ?? new Promise((res) => res({}));

    importLocale
      .then((resources) => {
        callback(null, resources as never);
      })
      .catch((error) => {
        callback(error, null);
      });
  },
};
