import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./CustomStyled";
import { Button } from "antd";
import Banner from "components/Banner/Banner";
import BannerBg from "assets/images/banner-bg.jpg";
import Item1 from "assets/images/item1.svg";
import Item2 from "assets/images/item2.svg";
import Item3 from "assets/images/item3.svg";
import FMCGLogos from "assets/images/FMCG-Logos.webp";

const Home = () => {
  const [toggleShowNav, setToggleShowNav] = useState(false);
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
      </div>
    </HomeWrapper>
  );
};

export default Home;
