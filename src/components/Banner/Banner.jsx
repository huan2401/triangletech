import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import SwitchLangButton from "components/common/SwitchLangButton/SwitchLangButton";
import { BannerWrapper } from "./CustomStyled";
import Nav from "components/common/Nav/Nav";
import { t } from "i18next";
import { useBreakpoints } from "hooks/useBreakpoint";

const Banner = ({ showNav }) => {
  const { isMobile } = useBreakpoints();

  return (
    <BannerWrapper>
      <div className="banner-background">
        <img
          src="https://www.telio.vn/static/HeroBanner-321b6dc882edb6a5e993650c83b0d271.jpg"
          alt="banner-background"
        />
      </div>
      <div className="banner-content">
        <div className="banner-content-header">
          <div className="banner-content-header-logo">
            <p>Triangletech</p>
          </div>
          <div className="banner-content-header-lang">
            <SwitchLangButton />
          </div>
        </div>
        <div className="banner-content-msg">
          <p>
            {t("join")}
            {isMobile && <br />}
            <span>60,000+ {t("retailers")}</span>
            {isMobile && <br />}
            {t("who trust telio source everyday")}
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
