import Nav from "components/common/Nav/Nav";
import React, { useEffect } from "react";
import { HiringWrapper } from "./CustomStyled";
import BannerBg from "assets/images/banner.jpg";
import Item from "assets/images/section3-bg.jpg";
// import Item from "assets/images/hiring-about-us.webp";
import Footer from "components/Layout/Footer/Footer";
import { Link } from "react-router-dom";
import { t } from "i18next";
import IconCallPhone from "components/common/IconCallPhone/IconCallPhone";

const Hiring = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const handleScroll = () => {
    const section = document.querySelector("#list-job");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
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
            <p onClick={handleScroll}>{t("Apply now")}</p>
          </div>
        </div>
      </div>
      <div className="hiring-content" id="list-job">
        <p>{t("List of job vacancies")}</p>
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
      <IconCallPhone/>
      <Footer />
    </HiringWrapper>
  );
};

export default Hiring;
