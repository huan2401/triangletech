import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import SwitchLangButton from "components/common/SwitchLangButton/SwitchLangButton";
import { BannerWrapper } from "./CustomStyled";
import Nav from "components/common/Nav/Nav";
import { t } from "i18next";
import { useBreakpoints } from "hooks/useBreakpoint";
import BannerBg from "assets/images/banner.jpg";
import Logo from "assets/images/logo_triangletech.jpg";
import IconZalo from "assets/images/icon-zalo.webp";
import IconPhone from "assets/images/phone-call-icon.png";

const Banner = ({ showNav }) => {
  const { isMobile } = useBreakpoints();

  return (
    <BannerWrapper>
      <div className="banner-background">
        <img src={BannerBg} alt="banner-background" />
      </div>
      <div className="banner-content">
        <div className="banner-content-header">
          <div className="banner-content-header-logo">
            <div>
              <img src={Logo} alt="" />
              <p>Triangletech</p>
            </div>
            {!isMobile && <p>Hotline : 0926095888</p>}
          </div>
          <div className="banner-content-header-lang">
            <SwitchLangButton />
          </div>
        </div>
        <div className="banner-content-msg">
          <p>
            <span>{t("going to perfect")}</span> <br />
            <span>
              "
              {t(
                "Bringing ELECTRICAL CONTROL and cable tray ladders with the best quality - the best service - The most suitable price to your project"
              )}
              "
            </span>
          </p>
        </div>
        <div className="banner-content-link">
          {!isMobile && <p>{t("Exciting offers on")}</p>}
          <Nav collapse={showNav} />
        </div>
      </div>
      <div className="icon-fix">
        <a
          href="https://zalo.me/app/link/zapps/2589573568261763553/ministore/?id=605827821545658699"
          target="_blank"
        >
          <img src={IconZalo} alt="" />
        </a>
        <a href="tel:0926095888">
          <img src={IconPhone} alt="" />
        </a>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
