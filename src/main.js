import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";
import { createI18n } from "vue-i18n";

import fr from "../src/locales/fr.json";
import en from "../src/locales/en.json";

const app = createApp(App);

const messages = {
  fr,
  en,
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});

app.use(PrimeVue);
app.use(i18n);
app.mount("#app");
