import React from "react";
import IconZalo from "assets/images/icon-zalo.webp";
import IconPhone from "assets/images/phone-call-icon.png";
import { IconCallPhoneWrapper } from "./CustomStyled";
import { useState } from "react";
import { useBreakpoints } from "hooks/useBreakpoint";

const styleHover = {
  right: -150,
};
const styleHover2 = {
  right: 46,
};

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
      </a> */}
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
      </a>
    </IconCallPhoneWrapper>
  );
};

export default IconCallPhone;
