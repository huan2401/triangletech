import i18next from "i18next";

export const getCurrentLanguage = () => {
  const language = localStorage.getItem("i18n") || "vi";
  return language;
};

export const changeLanguage = (language) => {
  if (language === getCurrentLanguage()) return;
  localStorage.setItem("i18n", language);
  i18next.changeLanguage(language);
  window.location.reload();
};
