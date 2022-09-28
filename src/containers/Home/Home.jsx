import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./CustomStyled";
import { Button, Carousel, Divider, Grid } from "antd";
import Banner from "components/Banner/Banner";
import BannerBg from "assets/images/banner-bg.jpg";
import Item1 from "assets/images/tủ điện.png";
import Item2 from "assets/images/thang máng cáp, thiết bị điện.png";
import Item3 from "assets/images/item3.svg";
import ImgBrand3 from "assets/images/brand-3.jpg";
import ImgBrand2 from "assets/images/brand-2.jpg";
import ImgBrand1 from "assets/images/brand-1.jpg";
import ImgProduct from "assets/images/section-3-img.png";

import ImgCustomer1 from "assets/images/customer-1.png";
import ImgCustomer2 from "assets/images/customer-2.png";
import ImgCustomer3 from "assets/images/customer-3.png";

import ImgSection41 from "assets/images/chất lượng và dịch vụ hoàn hảo.jpg";
import ImgSection42 from "assets/images/dịch vụ trước bán tận tình.jpg";
import ImgSection43 from "assets/images/giao hàng nhanh chóng.jpg";

import ImgSection3 from "assets/images/section3-bg.jpg";

import ImgShopee from "assets/images/shopee.png";

import DauNhay from "assets/images/dau-nhay-trai.png";
import ImgBestOffer from "assets/images/best-offer.svg";
import PhoneImg from "assets/images/phone.png";
import PhoneBgImg from "assets/images/phone-bg.png";
import Slide1Img from "assets/images/value3.webp";
import Footer from "components/Layout/Footer/Footer";
import ZaloImg from "assets/images/zalo.png";
import { useBreakpoints } from "hooks/useBreakpoint";
import { t } from "i18next";

const Home = () => {
  const [toggleShowNav, setToggleShowNav] = useState(false);
  const [slide, setSlide] = useState(0);
  const { isMobile } = useBreakpoints();

  const carouselRef = React.createRef();

  const handleScroll = (event) => {
    if (
      document.querySelector(".banner-content-link").getBoundingClientRect()
        .top > 0
    ) {
      setToggleShowNav(false);
    } else {
      setToggleShowNav(true);
    }
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    carouselRef.current.goTo(slide, false);
  }, [slide]);

  useEffect(() => {
    const height = document.querySelectorAll(".section-4-left-item")[0]
      .offsetHeight;
    document.querySelector(".section-4-left").addEventListener(
      "scroll",
      (event) => {
        if (
          document.querySelector(".section-4-left").scrollTop <
          height - 100
        ) {
          setSlide(0);
        } else if (
          document.querySelector(".section-4-left").scrollTop >= height - 100 &&
          document.querySelector(".section-4-left").scrollTop < height + 100
        ) {
          setSlide(1);
        } else if (
          document.querySelector(".section-4-left").scrollTop >=
          height + 100
        ) {
          setSlide(2);
        }
      },
      true
    );
  }, [slide]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    // Remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <HomeWrapper>
      <div className="home-content" id="home-content">
        <Banner showNav={toggleShowNav} />
        <div className="home-content-info-product">
          <p className="info-product-title">{t("key products")}</p>
          <div className="info-product-detail">
            <div>
              <div className="info-product-item">
                <div>
                  <div>
                    <img src={Item1} alt="#" />
                  </div>
                </div>
                <div>
                  <p>{t("manufacturing electrical cabinets")}</p>
                  <p>
                    {t(
                      "Electrical cabinets are a key product of Triangle tech, we support customers. Support customers to plan technical safety, optimize costs and deliver products as quickly as possible to the construction site."
                    )}
                  </p>
                </div>
                <div>
                  <img src={ImgBrand1} alt="" />
                </div>
              </div>
              <div className="info-product-item">
                <div>
                  <div>
                    <img src={Item2} alt="#" />
                  </div>
                </div>
                <div>
                  <p>{t("cable tray ladder, electrical equipment")}</p>
                  <p>
                    {t(
                      "value lies in every small detail, ensuring to send to customers genuine products, guaranteed quality in each order."
                    )}
                  </p>
                </div>
                <div>
                  <img src={ImgBrand2} alt="" />
                </div>
              </div>
              <div className="info-product-item">
                <div>
                  <div>
                    <img src={Item3} alt="#" />
                  </div>
                </div>
                <div>
                  <p>{t("after sale service")}</p>
                  <p>
                    {t(
                      "For us, the main service is the product. Any requirements arising after your delivery will be met by Triangle tech as a valuable order."
                    )}
                  </p>
                </div>
                <div>
                  <img src={ImgBrand3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-3">
          <div>
            <p>{t("genuine commitment on each product")}</p>
          </div>
          <div>
            <img src={ImgSection3} alt="" />
          </div>
        </section>
        <div className="section-4-wrapper">
          {!isMobile ? (
            <section className="section-4">
              <div className="section-4-left-button">
                <a
                  href="https://zalo.me/app/link/zapps/2589573568261763553/ministore/?id=605827821545658699"
                  target={"_blank"}
                >
                  <img src={ZaloImg} alt="" />
                  <p>{t("buy on")} Zalo</p>
                </a>
                <a
                  href="https://shopee.vn/tudiencongnghiep_triangletech?smtt=0.12157734-1663428015.12"
                  target={"_blank"}
                >
                  <img src={ImgShopee} alt="" />
                  <p>{t("buy on")} Shopee</p>
                </a>
              </div>
              <div className="section-4-left">
                <div className="section-4-left-item">
                  <img src={ImgBestOffer} alt="" />
                  <div>
                    <p>{t("dedicated pre-sale service")}</p>
                    <p>
                      {t(
                        "With a team of experienced and dedicated engineers. We are committed to making the optimal technical plan with a FREE quote within 48 hours of receiving the request"
                      )}
                    </p>
                  </div>
                </div>
                <div className="section-4-left-item">
                  <img src={ImgBestOffer} alt="" />
                  <div>
                    <p>{t("Fast shipping")}</p>
                    <p>
                      {t(
                        "Sharing with projects with extremely tight progress, With the end-to-end production process, we are committed to on-time delivery to ensure on-time delivery for our customers"
                      )}
                    </p>
                  </div>
                </div>
                <div className="section-4-left-item">
                  <img src={ImgBestOffer} alt="" />
                  <div>
                    <p>{t("Perfect quality and service")}</p>
                    <p>
                      {t(
                        "Triangle Tech ensures product quality in accordance with your requirements, along with a commitment to always accompany customers in every smallest issue"
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="section-4-right">
                <img src={PhoneImg} alt="" />
                <div>
                  <Carousel
                    afterChange={onChange}
                    ref={carouselRef}
                    dots={false}
                  >
                    <div>
                      <img src={ImgSection41} alt="" />
                    </div>
                    <div>
                      <img src={ImgSection42} alt="" />
                    </div>
                    <div>
                      <img src={ImgSection43} alt="" />
                    </div>
                  </Carousel>
                </div>
              </div>
            </section>
          ) : (
            <section className="section-4-mobile">
              <div className="section-4-mobile-item">
                <img src={ImgBestOffer} alt="" />
                <div className="section-4-mobile-item-title">
                  <p>{t("dedicated pre-sale service")}</p>
                  <p>
                    {t(
                      "With a team of experienced and dedicated engineers. We are committed to making the optimal technical plan with a FREE quote within 48 hours of receiving the request"
                    )}
                  </p>
                </div>
                <div>
                  <img src={PhoneImg} alt="" />
                  <div>
                    <img src={ImgSection41} alt="" />
                  </div>
                </div>
              </div>
              <div className="section-4-mobile-item">
                <img src={ImgBestOffer} alt="" />
                <div className="section-4-mobile-item-title">
                  <p>{t("Fast shipping")}</p>
                  <p>
                    {t(
                      "Sharing with projects with extremely tight progress, With the end-to-end production process, we are committed to on-time delivery to ensure on-time delivery for our customers"
                    )}
                  </p>
                </div>
                <div>
                  <img src={PhoneImg} alt="" />
                  <div>
                    <img src={ImgSection42} alt="" />
                  </div>
                </div>
              </div>
              <div className="section-4-mobile-item">
                <img src={ImgBestOffer} alt="" />
                <div className="section-4-mobile-item-title">
                  <p>{t("Perfect quality and service")}</p>
                  <p>
                    {t(
                      "Triangle Tech ensures product quality in accordance with your requirements, along with a commitment to always accompany customers in every smallest issue"
                    )}
                  </p>
                </div>
                <div>
                  <img src={PhoneImg} alt="" />
                  <div>
                    <img src={ImgSection43} alt="" />
                  </div>
                </div>
              </div>
              <div className="section-4-mobile-button">
                <div>
                  <img src={ZaloImg} alt="" />
                  <p>{t("buy on")} Zalo</p>
                </div>
                <div>
                  <img src={ImgShopee} alt="" />
                  <p>{t("buy on")} Shopee</p>
                </div>
              </div>
            </section>
          )}
        </div>
        <section className="section-5">
          <p className="section-5-title">
            {t("what customers feel about")} TRIANGLE TECH
          </p>
          <div className="section-5-list">
            <div className="section-5-list-item">
              <div>
                <img src={ImgCustomer1} alt="" />
                <p>
                  <span>NGUYỄN XUÂN PHÚ</span>
                  <span>Mieu Mon, HN</span>
                </p>
              </div>
              <div>
                <img src={DauNhay} alt="" />
                <p>
                  {t(
                    "General Director of AN PHU Plastic Factory, INVESTOR Enthusiastic consultation, providing optimal solutions to save costs, respond quickly"
                  )}
                </p>
                <img src={DauNhay} alt="" />
              </div>
            </div>
            <div className="section-5-list-item">
              <div>
                <img src={ImgCustomer2} alt="" />
                <p>
                  <span>ĐẶNG TÙNG NAM</span>
                  <span>Mieu Mon, HN</span>
                </p>
              </div>
              <div>
                <img src={DauNhay} alt="" />
                <p>
                  {t(
                    "HITEKI VIETNAM JOINT STOCK COMPANY MECHANICAL ELECTRICAL CONTRACTOR Very satisfied with the mechanism as well as sales, enthusiastic and professional technical team, quick quotation, very good after-sales support"
                  )}
                </p>
                <img src={DauNhay} alt="" />
              </div>
            </div>
            <div className="section-5-list-item">
              <div>
                <img src={ImgCustomer3} alt="" />
                <p>
                  <span>Hiếu</span>
                  <span>Mieu Mon, HN</span>
                </p>
              </div>
              <div>
                <img src={DauNhay} alt="" />
                <p>
                  {t(
                    "Commander Really trust TRIANGLE TECH, delivery on time, quality as committed, especially enthusiastic support, generally satisfied"
                  )}
                </p>
                <img src={DauNhay} alt="" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </HomeWrapper>
  );
};

export default Home;
