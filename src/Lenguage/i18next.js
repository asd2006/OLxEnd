import i18next from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

const Languages = ['uz', 'en', 'ru'];
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLing: 'uz',
    debug: false,
    whitelist: Languages,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["cookie", "localStorage"],
      lookupCookie: "lang",
      lookupLocalStorage: "lang",
      caches: ["cookie", "localStorage"]
    }
  });
export default i18n;
