import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import SwitchLangButton from "components/common/SwitchLangButton/SwitchLangButton";
import { BannerWrapper } from "./CustomStyled";
import Nav from "components/common/Nav/Nav";
import { t } from "i18next";
import { useBreakpoints } from "hooks/useBreakpoint";
import BannerBg from "assets/images/banner.jpg";

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
            <p>Triangletech</p>
            {!isMobile && <p>Hotline : 0926095888</p>}
          </div>
          <div className="banner-content-header-lang">
            <SwitchLangButton />
          </div>
        </div>
        <div className="banner-content-msg">
          <p>
            {t("going to perfect")} <br />
            {t(
              "Bringing ELECTRICAL CONTROL and cable tray ladders with the best quality - the best service - The most suitable price to your project"
            )}
          </p>
        </div>
        <div className="banner-content-link">
          {!isMobile && <p>{t("Exciting offers on")}</p>}
          <Nav collapse={showNav} />
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
