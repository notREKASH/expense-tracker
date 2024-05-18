import { createI18n } from "vue-i18n";
import fr from "../src/locales/fr.json";
import en from "../src/locales/en.json";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    fr,
    en,
  },
});

export default i18n;
