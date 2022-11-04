import Nav from "components/common/Nav/Nav";
import React, { useEffect } from "react";
import { HiringWrapper } from "./CustomStyled";
import BannerBg from "assets/images/banner-v2.jpg";
import Item from "assets/images/section3-bg.jpg";
import Img_BusinessMan from "assets/images/nhân viên kinh doanh.jpg";
import Img_Mechanical from "assets/images/Nhân viên lắp ráp.jpg";
import Img_Electrical from "assets/images/tuyển dụng kỹ sư điện.jfif";
import Img_machineOperator from "assets/images/tuyển dụng nhân viên vận hành máy CNC.jpg";
import Img_internalAccounting from "assets/images/tuyển dụng kế toán nội bộ.png";
import Img_mechanicalDesignEngineer from "assets/images/tuyển dụng kỹ sư thiết kế cơ khí.jfif";
import Footer from "components/Layout/Footer/Footer";
import { t } from "i18next";
import IconCallPhone from "components/common/IconCallPhone/IconCallPhone";
import Pdf_BusinessMan from "assets/pdf/tuyen dung kinh doanh.pdf";
import Pdf_Mechanical from "assets/pdf/tuyen dung ky su thiêt ke co khi.pdf";
import Pdf_Electrical from "assets/pdf/tuyen dung ky su dien (2).pdf";
import Pdf_machineOperator from "assets/pdf/tuyen dung nhan vien vận hành máy CNC.pdf";
import Pdf_internalAccounting from "assets/pdf/tuyen dung ke toan noi bo.pdf";
import Pdf_mechanicalDesignEngineer from "assets/pdf/tuyen dung ky su thiêt ke co khi.pdf";

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
          <a
            href={Pdf_BusinessMan}
            target={"_blank"}
            className="hiring-content-item"
          >
            <div>
              <img src={Img_BusinessMan} alt="" />
            </div>
            <div>
              <p>{t("Business man")}</p>
              <p>
                {t(
                  "Sales staff of low voltage electrical cabinets, cable tray ladders, electrical equipment"
                )}
              </p>
            </div>
          </a>
          <a
            href={Pdf_Mechanical}
            target={"_blank"}
            className="hiring-content-item"
          >
            <div>
              <img src={Img_Mechanical} alt="" />
            </div>
            <div>
              <p>{t("Mechanical design engineer")}</p>
              <p>
                {t(
                  "Mechanical engineers design electrical cabinets, cable tray ladders"
                )}
              </p>
            </div>
          </a>
          <a
            href={Pdf_Electrical}
            target={"_blank"}
            className="hiring-content-item"
          >
            <div>
              <img src={Img_Electrical} alt="" />
            </div>
            <div>
              <p>{t("Electrical Engineer")}</p>
              <p>{t("Electrical Engineer")}</p>
            </div>
          </a>

          <a
            href={Pdf_machineOperator}
            target={"_blank"}
            className="hiring-content-item"
          >
            <div>
              <img src={Img_machineOperator} alt="" />
            </div>
            <div>
              <p>{t("machine operator")}</p>
              <p>
                {t(
                  "Separation of mechanical materials (corrugated iron, copper ...)"
                )}
              </p>
            </div>
          </a>
          <a
            href={Pdf_internalAccounting}
            target={"_blank"}
            className="hiring-content-item"
          >
            <div>
              <img src={Img_internalAccounting} alt="" />
            </div>
            <div>
              <p>{t("internal accounting")}</p>
              <p>
                {t(
                  "Record entries related to cash receipts and payments and deposits. Timely reporting of cash receipts and payments."
                )}
              </p>
            </div>
          </a>
          <a
            href={Pdf_mechanicalDesignEngineer}
            target={"_blank"}
            className="hiring-content-item"
          >
            <div>
              <img src={Img_mechanicalDesignEngineer} alt="" />
            </div>
            <div>
              <p>{t("mechanical design engineer")}</p>
              <p>
                {t(
                  "Planning the design of assembly drawings according to customer requirements"
                )}
              </p>
            </div>
          </a>
        </div>
      </div>
      <IconCallPhone />
      <Footer />
    </HiringWrapper>
  );
};

export default Hiring;
