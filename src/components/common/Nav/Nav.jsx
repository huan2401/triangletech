import React from "react";
import { Link } from "react-router-dom";
import SwitchLangButton from "components/common/SwitchLangButton/SwitchLangButton";
import { NavWrapper } from "./CustomStyled";
import { Divider } from "antd";
import ZaloImg from "assets/images/zalo.png";
import DownloadImg from "assets/images/download.png";

const Nav = ({ collapse }) => {
  console.log("collapse", collapse);
  return (
    <NavWrapper collapse={collapse}>
      <div className="nav-left">
        <p>Triangletech</p>
        <div>
          <Link to="/">WE ARE HIRING</Link>
          <Link to="/">BLOG</Link>
        </div>
      </div>
      <div className="nav-right">
        <div>
          <div>
            <img src={ZaloImg} alt="" />
            <p>Zalo store</p>
          </div>
          <Divider
            type="vertical"
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
    </NavWrapper>
  );
};

export default Nav;
