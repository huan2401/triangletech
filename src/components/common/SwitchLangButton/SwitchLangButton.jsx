import React, { useEffect, useState } from "react";
import VNLogo from "assets/images/vn.png";
import ENLogo from "assets/images/en.png";
import { SwitchLangButtonWrapper } from "./CustomStyled";
import { getCurrentLanguage, changeLanguage } from "utils/i18n";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const SwitchLangButton = () => {
  const [showSwitchLang, setShowSwitchLang] = useState(false);
  const { t } = useTranslation();
  const [lang, setLang] = useState("vi");
  useEffect(() => {
    setLang(getCurrentLanguage());
  }, []);
  console.log("lang", lang);
  return (
    <SwitchLangButtonWrapper>
      <div className="switch-lang">
        <div
          className="switch-lang-preview"
          onClick={() => {
            setShowSwitchLang(!showSwitchLang);
          }}
        >
          <img src={lang === "vi" ? VNLogo : ENLogo} alt="#" />
        </div>
        {showSwitchLang && (
          <div className="switch-lang-option">
            <div
              className="switch-lang-option-en"
              onClick={() => {
                setLang("en");
                setShowSwitchLang(!showSwitchLang);
                changeLanguage("en");
              }}
            >
              <div>
                <img src={ENLogo} alt="" />
              </div>
              <p>{t("english")}</p>
            </div>
            <div
              className="switch-lang-option-vi"
              onClick={() => {
                setLang("vi");
                setShowSwitchLang(!showSwitchLang);
                changeLanguage("vi");
              }}
            >
              <div>
                <img src={VNLogo} alt="" />
              </div>
              <p>{t("vietnamese")}</p>
            </div>
          </div>
        )}
      </div>
    </SwitchLangButtonWrapper>
  );
};

export default SwitchLangButton;
