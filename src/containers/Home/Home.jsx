import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./CustomStyled";
import { Button, Carousel, Divider } from "antd";
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
import gsap from "gsap";

const Home = () => {
  const [toggleShowNav, setToggleShowNav] = useState(false);
  const [slide, setSlide] = useState(0);

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
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    // Remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <HomeWrapper>
      <div className="home-background">
        <img src={BannerBg} alt="banner-background" />
      </div>
      <div className="home-content" id="home-content">
        <Banner showNav={toggleShowNav} />
        <div className="home-content-info-product">
          <p className="info-product-title">NOW AVAILABLE FOR 3 VERTICALS</p>
          <div className="info-product-detail">
            <div>
              <div className="info-product-item">
                <div>
                  <img src={Item1} alt="#" />
                </div>
                <div>
                  <p>FMCG</p>
                  <p>
                    Mom-and-pop stores can get anything from Beers to Instant
                    Noodles with a single source.
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
                  <p>LIFESTYLE</p>
                  <p>
                    Offering high quality products from cosmetic and fashion
                    brands to wholesalers.
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
                  <p>HEALTHCARE</p>
                  <p>
                    A single source of medicines to medical equipments from
                    trusted brands for Pharmacies.
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
            <p>THOUSANDS OF VERIFIED PRODUCTS</p>
          </div>
          <div>
            <div>
              <p>1500</p>
              <p>FMCG SUKs</p>
            </div>
            <Divider
              type="vertical"
              style={{ borderLeft: "2px solid #0795ff" }}
            />
            <div>
              <p>1500</p>
              <p>FMCG SUKs</p>
            </div>
            <Divider
              type="vertical"
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
        <section className="section-4">
          <div className="section-4-left">
            <div className="section-4-left-item">
              <img src={BestOfferImg} alt="" />
              <div>
                <p>EXCLUSIVE OFFERS</p>
                <p>
                  By partnering with brands, we ensure the best deals for our
                  retailers.
                </p>
              </div>
            </div>
            <div className="section-4-left-item">
              <img src={BestOfferImg} alt="" />
              <div>
                <p>EXCLUSIVE OFFERS</p>
                <p>
                  By partnering with brands, we ensure the best deals for our
                  retailers.
                </p>
              </div>
            </div>
            <div className="section-4-left-item">
              <img src={BestOfferImg} alt="" />
              <div>
                <p>EXCLUSIVE OFFERS</p>
                <p>
                  By partnering with brands, we ensure the best deals for our
                  retailers.
                </p>
              </div>
            </div>
          </div>
          <div className="section-4-right">
            <img src={PhoneImg} alt="" />
            <img src={PhoneBgImg} alt="" />
            <div>
              <Carousel afterChange={onChange} ref={carouselRef} dots={false}>
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
        <section className="section-5">
          <p className="section-5-title">WHY OUR RETAILERS LOVE US</p>
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
