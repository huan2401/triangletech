import React from "react";
import FooterBanner from "assets/images/footer-banner-en.webp";
import Footer1 from "assets/images/footer-1.webp";
import Footer2 from "assets/images/footer-2.webp";
import IconZalo from "assets/images/icon-zalo.webp";
import IconMess from "assets/images/icon-mess.webp";
import { FooterWrapper } from "./CustomStyled";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-banner">
        <img src={FooterBanner} alt="" />
      </div>
      <div className="footer-content">
        <div className="footer-content-left">
          <div>
            <p>Triangletech</p>
          </div>
          <div>
            <p>Công ty TNHH Telio Việt Nam </p>
            <p>Capital Place, 29 Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội</p>
            <p>Liên hệ: 18006751</p>
            <p>
              Email: <Link to="/">hotro@telio.vn</Link>
            </p>
            <p>© 2021 Telio. Bảo lưu mọi quyền</p>
          </div>
        </div>
        <div className="footer-content-right">
          <div>
            <Link to="/">Chính sách thanh toán</Link>
            <Link to="/">Chính sách giao hàng</Link>
            <Link to="/">Chính sách đổi trả</Link>
            <Link to="/">Chính sách Nhà bán hàng</Link>
            <Link to="/">Chính sách bảo mật</Link>
            <div>
              <Link to="/">
                <img src={IconZalo} alt="" />
              </Link>
              <Link to="/">
                <img src={IconMess} alt="" />
              </Link>
            </div>
          </div>
          <div>
            <img src={Footer2} alt="" />
            <img src={Footer1} alt="" />
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;