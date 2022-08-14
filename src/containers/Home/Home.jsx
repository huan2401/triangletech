import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./CustomStyled";
import { Button } from "antd";
import Banner from "components/Banner/Banner";
import BannerBg from "assets/images/banner-bg.jpg";

const Home = () => {
  // const [scrollY, setScrollY] = useState(0);
  const [toggleShowNav, setToggleShowNav] = useState(false);
  const handleScroll = (event) => {
    // console.log("scrollY", window.scrollY);
    // console.log("clientHeight", window.innerHeight);
    // console.log(
    //   "element",
    //   document.querySelector(".banner-content-link").getBoundingClientRect().top
    // );
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
        <div className="home-content-info-product"></div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
