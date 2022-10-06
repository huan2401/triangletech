import React from "react";
import IconZalo from "assets/images/zalo-1.png";
import IconPhone from "assets/images/phone-call-icon.png";
import { IconCallPhoneWrapper } from "./CustomStyled";
import { useState } from "react";
import { useBreakpoints } from "hooks/useBreakpoint";

const styleHover = {
  right: -300,
};
const styleHover2 = {
  right: 70,
};
const zaloWidget = `
  <div
    class="zalo-chat-widget"
    data-oaid="605827821545658699"
    data-welcome-message="Rất vui khi được hỗ trợ bạn!"
    data-autopopup="0"
    data-width="350"
    data-height="420"
  />
`;

const IconCallPhone = () => {
  const [isHover, setIsHover] = useState(false);
  const { isMobile } = useBreakpoints();

  return (
    <IconCallPhoneWrapper>
      {/* <a
        href="https://zalo.me/app/link/zapps/2589573568261763553/ministore/?id=605827821545658699"
        target="_blank"
      >
        <img src={IconZalo} alt="" />
      </a>
      <div dangerouslySetInnerHTML={{ __html: zaloWidget }} />
      <a
        // href="tel:0926095888"
        href={isMobile ? "tel:0926095888" : ""}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => setIsHover(false)}
        onClick={(e) => {
          !isMobile && e.preventDefault();
        }}
      >
        <div style={isHover ? styleHover2 : styleHover}>
          <p>0926095888</p>
        </div>
        <div>
          <img src={IconPhone} alt="" />
        </div>
      </a> */}

      <a
        className="zalo-call"
        href="https://zalo.me/605827821545658699"
        target={"_blank"}
      >
        <img src={IconZalo} width="50" alt="Call Now" title="Call Now" />
      </a>
      <a className="phone-call" href="tel:0926095888">
        <img src={IconPhone} width="50" alt="Call Now" title="Call Now" />
      </a>
    </IconCallPhoneWrapper>
  );
};

export default IconCallPhone;
