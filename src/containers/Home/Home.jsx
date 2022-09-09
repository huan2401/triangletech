import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./CustomStyled";
import { Button, Carousel, Divider, Grid } from "antd";
import Banner from "components/Banner/Banner";
import BannerBg from "assets/images/banner-bg.jpg";
import Item1 from "assets/images/item1.svg";
import Item2 from "assets/images/item2.svg";
import Item3 from "assets/images/item3.svg";
import FMCGLogos from "assets/images/FMCG-Logos.webp";
import Section3IMG from "assets/images/section-3-img.png";
import S5ImgItem from "assets/images/section5-img-item.jpg";
import DauNhay from "assets/images/dau-nhay-trai.png";
import BestOfferImg from "assets/images/best-offer.svg";
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

  // console.log("useBreakpoint", isMobile);

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

  console.log("slide", slide);

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
      {/* <div className="home-background">
        <img src={BannerBg} alt="banner-background" />
      </div> */}
      <div className="home-content" id="home-content">
        <Banner showNav={toggleShowNav} />
        <div className="home-content-info-product">
          <p className="info-product-title">
            {t("now available for 3 verticals")}
          </p>
          <div className="info-product-detail">
            <div>
              <div className="info-product-item">
                <div>
                  <img src={Item1} alt="#" />
                </div>
                <div>
                  <p>{t("manufacturing electrical cabinets")}</p>
                  <p>
                    {t(
                      "support customers to plan for technical safety, optimize cost and deliver the fastest product to the construction site"
                    )}
                  </p>
                </div>
                <div>
                  <img src={FMCGLogos} alt="" />
                </div>
              </div>
              <div className="info-product-item">
                <div>
                  <img src={Item2} alt="#" />
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
                  <img src={FMCGLogos} alt="" />
                </div>
              </div>
              <div className="info-product-item">
                <div>
                  <img src={Item3} alt="#" />
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
                  <img src={FMCGLogos} alt="" />
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
            <div>
              <p>1500</p>
              <p>FMCG SUKs</p>
            </div>
            <Divider
              type={isMobile ? "horizontal" : "vertical"}
              style={{ borderLeft: "2px solid #0795ff" }}
            />
            <div>
              <p>1500</p>
              <p>FMCG SUKs</p>
            </div>
            <Divider
              type={isMobile ? "horizontal" : "vertical"}
              style={{ borderLeft: "2px solid #0795ff" }}
            />
            <div>
              <p>1500</p>
              <p>FMCG SUKs</p>
            </div>
          </div>
          <div>
            <img src={Section3IMG} alt="" />
          </div>
        </section>
        <div>
          {!isMobile ? (
            <section className="section-4">
              <div className="section-4-left-button">
                <img src={ZaloImg} alt="" />
                <p>{t("buy on")} Zalo</p>
              </div>
              <div className="section-4-left">
                <div className="section-4-left-item">
                  <img src={BestOfferImg} alt="" />
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
                  <img src={BestOfferImg} alt="" />
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
                  <img src={BestOfferImg} alt="" />
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
                <img src={PhoneBgImg} alt="" />
                <div>
                  <Carousel
                    afterChange={onChange}
                    ref={carouselRef}
                    dots={false}
                  >
                    <div>
                      <img src={Slide1Img} alt="" />
                    </div>
                    <div>
                      <img src={Slide1Img} alt="" />
                    </div>
                    <div>
                      <img src={Slide1Img} alt="" />
                    </div>
                  </Carousel>
                </div>
              </div>
            </section>
          ) : (
            <section className="section-4-mobile">
              <div className="section-4-mobile-item">
                <img src={BestOfferImg} alt="" />
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
                  <img src={PhoneBgImg} alt="" />
                  <div>
                    <img src={Slide1Img} alt="" />
                  </div>
                </div>
              </div>
              <div className="section-4-mobile-item">
                <img src={BestOfferImg} alt="" />
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
                  <img src={PhoneBgImg} alt="" />
                  <div>
                    <img src={Slide1Img} alt="" />
                  </div>
                </div>
              </div>
              <div className="section-4-mobile-item">
                <img src={BestOfferImg} alt="" />
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
                  <img src={PhoneBgImg} alt="" />
                  <div>
                    <img src={Slide1Img} alt="" />
                  </div>
                </div>
              </div>
              <div className="section-4-mobile-button">
                <img src={ZaloImg} alt="" />
                <p>{t("buy on")} Zalo</p>
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
                <img src={S5ImgItem} alt="" />
                <p>
                  <span>MRS HONG</span>
                  <span>Mieu Mon, HN</span>
                </p>
              </div>
              <div>
                <img src={DauNhay} alt="" />
                <p>
                  Best thing about Telio is that the prices and promotions are
                  transparent to all retailers. I can order anywhere anytime via
                  the Telio Zalo Store
                </p>
                <img src={DauNhay} alt="" />
              </div>
            </div>
            <div className="section-5-list-item">
              <div>
                <img src={S5ImgItem} alt="" />
                <p>
                  <span>MRS HONG</span>
                  <span>Mieu Mon, HN</span>
                </p>
              </div>
              <div>
                <img src={DauNhay} alt="" />
                <p>
                  Best thing about Telio is that the prices and promotions are
                  transparent to all retailers. I can order anywhere anytime via
                  the Telio Zalo Store
                </p>
                <img src={DauNhay} alt="" />
              </div>
            </div>
            <div className="section-5-list-item">
              <div>
                <img src={S5ImgItem} alt="" />
                <p>
                  <span>MRS HONG</span>
                  <span>Mieu Mon, HN</span>
                </p>
              </div>
              <div>
                <img src={DauNhay} alt="" />
                <p>
                  Best thing about Telio is that the prices and promotions are
                  transparent to all retailers. I can order anywhere anytime via
                  the Telio Zalo Store
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
