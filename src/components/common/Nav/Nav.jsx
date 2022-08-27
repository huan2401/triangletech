import React, { useState } from "react";
import { Link } from "react-router-dom";
import SwitchLangButton from "components/common/SwitchLangButton/SwitchLangButton";
import { NavWrapper } from "./CustomStyled";
import { Divider } from "antd";
import { CaretDownOutlined, CloseOutlined } from "@ant-design/icons";
import ZaloImg from "assets/images/zalo.png";
import DownloadImg from "assets/images/download.png";
import { t } from "i18next";
import { useBreakpoints } from "hooks/useBreakpoint";
import VNLogo from "assets/images/vn.png";
import ENLogo from "assets/images/en.png";
import { changeLanguage } from "utils/i18n";

const Nav = ({ collapse }) => {
  const [showNavHome, setShowNavHome] = useState(false);
  console.log("collapse", collapse);

  const { isMobile } = useBreakpoints();

  console.log("useBreakpoint", isMobile);

  return (
    <NavWrapper collapse={collapse}>
      <div className="nav-left">
        <Link to="/">Triangletech</Link>

        {!isMobile && (
          <div>
            <Link to="/hiring">{t("we are hiring")}</Link>
            <Link to="/blog">BLOG</Link>
          </div>
        )}
      </div>
      {!isMobile && (
        <div className="nav-right">
          <div>
            <div>
              <img src={ZaloImg} alt="" />
              <p>Zalo store</p>
            </div>
            <Divider
              type={isMobile ? "horizontal" : "vertical"}
              style={{
                borderLeft: "1px solid #a3aab1",
              }}
            />
            <div>
              <img src={DownloadImg} alt="" />
              <p>Mobile app</p>
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
                <p>Zalo store</p>
              </div>
              <Divider
                type={isMobile ? "horizontal" : "vertical"}
                style={{
                  borderLeft: "1px solid #a3aab1",
                }}
              />
              <div>
                <img src={DownloadImg} alt="" />
                <p>Mobile app</p>
              </div>
            </div>
          ) : (
            <div className="nav-right-mobile-2">
              <div
                className="nav-right-mobile-2-home"
                onClick={() => setShowNavHome(true)}
              >
                <p>Home</p>
                <CaretDownOutlined />
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
          <Link to="/hiring">We are hiring</Link>
          <Link to="/blog">Blog</Link>
          <div className="fullScreen-lang">
            <p>Language</p>
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
            <p>Product</p>
            <div>
              <div>
                <div>
                  <img src={ENLogo} alt="" />
                </div>
                <p>{t("english")}</p>
              </div>
              <div>
                <div>
                  <img src={VNLogo} alt="" />
                </div>
                <p>{t("vietnamese")}</p>
              </div>
              <div>
                <div>
                  <img src={VNLogo} alt="" />
                </div>
                <p>{t("vietnamese")}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </NavWrapper>
  );
};

export default Nav;
