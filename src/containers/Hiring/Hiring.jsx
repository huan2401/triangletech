import Nav from "components/common/Nav/Nav";
import React, { useEffect } from "react";
import { HiringWrapper } from "./CustomStyled";
import BannerBg from "assets/images/banner.jpg";
import Item from "assets/images/section3-bg.jpg";
// import Item from "assets/images/hiring-about-us.webp";
import Footer from "components/Layout/Footer/Footer";
import { Link } from "react-router-dom";
import { t } from "i18next";

const Hiring = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <HiringWrapper>
      <Nav collapse={true} />
      <div className="hiring-banner">
        <div>
          <img src={BannerBg} alt="" />
        </div>
        <div>
          <p>{t("JOIN Triangle Tech TODAY")}</p>
          <div>
            <p>{t("Apply now")}</p>
          </div>
        </div>
      </div>
      <div className="hiring-content">
        <p>About us</p>
        <div className="hiring-content-list">
          <Link to="/" className="hiring-content-item">
            <div>
              <img src={Item} alt="" />
            </div>
            <div>
              <p>{t("Business man")}</p>
              <p>
                {t(
                  "Sales staff of low voltage electrical cabinets, cable tray ladders, electrical equipment"
                )}
              </p>
            </div>
          </Link>
          <Link to="/" className="hiring-content-item">
            <div>
              <img src={Item} alt="" />
            </div>
            <div>
              <p>{t("Mechanical design engineer")}</p>
              <p>
                {t(
                  "Mechanical engineers design electrical cabinets, cable tray ladders"
                )}
              </p>
            </div>
          </Link>
          <Link to="/" className="hiring-content-item">
            <div>
              <img src={Item} alt="" />
            </div>
            <div>
              <p>{t("Electrical Engineer")}</p>
              <p>{t("Electrical Engineer")}</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </HiringWrapper>
  );
};

export default Hiring;
