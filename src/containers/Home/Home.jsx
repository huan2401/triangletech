import React from "react";
import { HomeWrapper } from "./CustomStyled";
import { Button } from "antd";
import Banner from "components/Banner/Banner";
import BannerBg from "assets/images/banner-bg.jpg";

const Home = () => {
  return (
    <HomeWrapper>
      <div className="home-background">
        <img src={BannerBg} alt="banner-background" />
      </div>
      <div className="home-content">
        <Banner />
        <div className="home-content-info-product"></div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
