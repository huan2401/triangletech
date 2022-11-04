import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SwitchLangButton from "components/common/SwitchLangButton/SwitchLangButton";
import { NavWrapper } from "./CustomStyled";
import { Divider } from "antd";
import { CaretDownOutlined, CloseOutlined } from "@ant-design/icons";
import ZaloImg from "assets/images/zalo.png";
import CHPlayImg from "assets/images/ch-play.webp";
import IosImg from "assets/images/appStoreIcon.webp";
import ImgShopee from "assets/images/shopee.png";
import { t } from "i18next";
import { useBreakpoints } from "hooks/useBreakpoint";
import VNLogo from "assets/images/vn.png";
import ENLogo from "assets/images/en.png";
import { changeLanguage } from "utils/i18n";
import Logo from "assets/images/logo_triangletech.jpg";

const Nav = ({ collapse }) => {
  const [showNavHome, setShowNavHome] = useState(false);

  const path = useLocation();

  const { isMobile } = useBreakpoints();

  return (
    <NavWrapper collapse={collapse}>
      <div className="nav-left">
        <div>
          <img src={Logo} alt="" />
          <Link to="/">Triangletech</Link>
        </div>

        {!isMobile && (
          <div className="nav-left-navigation">
            <Link
              to="/hiring"
              className={path.pathname === "/hiring" ? "nav-left-active" : ""}
            >
              {t("we are hiring")}
            </Link>
            <Link
              to="/blog"
              className={path.pathname === "/blog" ? "nav-left-active" : ""}
            >
              {t("blog")}
            </Link>
          </div>
        )}
      </div>
      {!isMobile && (
        <div className="nav-right">
          <div>
            <div>
              <a
                href="https://zalo.me/app/link/zapps/2589573568261763553/ministore/?id=605827821545658699"
                target="_blank"
              >
                <img src={ZaloImg} alt="" />
                {t("zalo store")}
              </a>
            </div>
            <Divider
              type={isMobile ? "horizontal" : "vertical"}
              style={{
                borderLeft: "1px solid #a3aab1",
              }}
            />
            <div>
              <a
                href="https://shopee.vn/tudiencongnghiep_triangletech?smtt=0.12157734-1663428015.12"
                target="_blank"
              >
                <img src={ImgShopee} alt="" />
                {t("shopee")}
              </a>
            </div>
          </div>

          {collapse && (
            <Divider
              type="vertical"
              style={{
                borderLeft: "1px solid #a3aab1",
              }}
            />
          )}

          <SwitchLangButton style={{ marginTop: "30px" }} />
        </div>
      )}

      {isMobile && (
        <div className="nav-right-mobile">
          {!collapse ? (
            <div className="nav-right-mobile-1">
              <div>
                <img src={ZaloImg} alt="" />
                <a
                  href="https://zalo.me/app/link/zapps/2589573568261763553/ministore/?id=605827821545658699"
                  target="_blank"
                >
                  {t("zalo store")}
                </a>
              </div>
              <Divider
                type={isMobile ? "horizontal" : "vertical"}
                style={{
                  borderLeft: "1px solid #a3aab1",
                }}
              />
              <div>
                <img src={ImgShopee} alt="" />
                <a
                  href="https://shopee.vn/tudiencongnghiep_triangletech?smtt=0.12157734-1663428015.12"
                  target="_blank"
                >
                  {t("shopee")}
                </a>
              </div>
            </div>
          ) : (
            <div className="nav-right-mobile-2">
              <div
                className="nav-right-mobile-2-home"
                // onClick={() => setShowNavHome(true)}
              >
                <a
                  href="https://zalo.me/app/link/zapps/2589573568261763553/ministore/?id=605827821545658699"
                  target="_blank"
                >
                  <img src={ZaloImg} alt="" />
                </a>
                <a
                  href="https://shopee.vn/tudiencongnghiep_triangletech?smtt=0.12157734-1663428015.12"
                  target="_blank"
                >
                  <img src={ImgShopee} alt="" />
                </a>
                <div onClick={() => setShowNavHome(true)}>
                  <CaretDownOutlined />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {showNavHome && (
        <div className="nav-right-mobile-2-fullScreen">
          <p onClick={() => setShowNavHome(false)}>
            <span>Close</span>
            <CloseOutlined />
          </p>
          <Link to="/hiring">{t("we are hiring")}</Link>
          <Link to="/blog">{t("blog")}</Link>
          <div className="fullScreen-lang">
            <p>{t("language")}</p>
            <div>
              <div
                onClick={() => {
                  changeLanguage("en");
                }}
              >
                <div>
                  <img src={ENLogo} alt="" />
                </div>
                <p>{t("english")}</p>
              </div>
              <div
                onClick={() => {
                  changeLanguage("vi");
                }}
              >
                <div>
                  <img src={VNLogo} alt="" />
                </div>
                <p>{t("vietnamese")}</p>
              </div>
            </div>
          </div>
          <div className="fullScreen-product">
            <p>{t("product")}</p>
            <div>
              <div>
                <div>
                  <img src={ZaloImg} alt="" />
                </div>
                <a
                  href="https://zalo.me/app/link/zapps/2589573568261763553/ministore/?id=605827821545658699"
                  target="_blank"
                >
                  Triangletech {t("zalo store")}
                </a>
              </div>
              <div>
                <div>
                  <img src={ImgShopee} alt="" />
                </div>
                <a
                  href="https://shopee.vn/tudiencongnghiep_triangletech?smtt=0.12157734-1663428015.12"
                  target="_blank"
                >
                  Triangletech {t("shopee")}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </NavWrapper>
  );
};

export default Nav;
