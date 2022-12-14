import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.less";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import en from "assets/i18n/en.json";
import vi from "assets/i18n/vi.json";

i18next.init({
  interpolation: { escapeValue: false },
  fallbackLng: "vi",
  lng: localStorage.getItem("i18n") || "vi",
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
