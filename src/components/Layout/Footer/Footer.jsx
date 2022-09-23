import React from "react";
import ImgFooterBanner from "assets/images/foooter banner.jpg";

import Footer1 from "assets/images/footer-1.webp";
import Footer2 from "assets/images/footer-2.webp";
import IconZalo from "assets/images/icon-zalo.webp";
import ImgShopee from "assets/images/shopee.png";
import { FooterWrapper } from "./CustomStyled";
import PdfDelivery from "assets/pdf/CHÍNH SÁCH VẬN CHUYỂN VÀ GIAO NHẬN HÀNG HÓA (1).pdf";
import PdfPayment from "assets/pdf/Chinh sach thanh toán.pdf";
import { Link } from "react-router-dom";
import { t } from "i18next";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-banner">
        <img src={ImgFooterBanner} alt="" />
      </div>
      <div className="footer-content">
        <div className="footer-content-left">
          <div>
            <p>Triangletech</p>
          </div>
          <div>
            <p>{t("TRIANGLE TECH MECHANICAL ELECTRICAL COMPANY LIMITED")}</p>
            <p>Số 42, ngõ 40 phố Do Nha, P.Tây Mỗ, Q.Nam Từ Liêm, Hà Nội</p>
            <p>Liên hệ: 0926095888</p>
            {/* <p>
              Email: <Link to="/">hotro@telio.vn</Link>
            </p>
            <p>© 2021 Telio. Bảo lưu mọi quyền</p> */}
          </div>
        </div>
        <div className="footer-content-right">
          <div>
            <a href={PdfDelivery} target="_blank">
              {t("Delivery policy")}
            </a>
            <a href={PdfPayment} target="_blank">
              {t("Payment policy")}
            </a>
            <a href={""}>{t("Order Policy")}</a>
            <div>
              <a
                href="https://zalo.me/app/link/zapps/2589573568261763553/ministore/?id=605827821545658699"
                target="_blank"
              >
                <img src={IconZalo} alt="" />
              </a>
              <a
                href="https://shopee.vn/tudiencongnghiep_triangletech?smtt=0.12157734-1663428015.12"
                target="_blank"
              >
                <img src={ImgShopee} alt="" />
              </a>
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
