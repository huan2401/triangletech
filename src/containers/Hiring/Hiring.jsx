import Nav from "components/common/Nav/Nav";
import React, { useEffect } from "react";
import { HiringWrapper } from "./CustomStyled";
import BannerBg from "assets/images/banner.jpg";
import Item from "assets/images/hiring-about-us.webp";
import Footer from "components/Layout/Footer/Footer";
import { Link } from "react-router-dom";

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
          <p>JOIN TELIO TODAY</p>
          <div>
            <p>Apply now</p>
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
              <p>CAFEBIZ.VN</p>
              <p>
                CEO startup Telio: Hành trình "gọi vốn con người" là gian nan
                nhất
              </p>
            </div>
          </Link>
          <Link to="/" className="hiring-content-item">
            <div>
              <img src={Item} alt="" />
            </div>
            <div>
              <p>CAFEBIZ.VN</p>
              <p>
                CEO startup Telio: Hành trình "gọi vốn con người" là gian nan
                nhất
              </p>
            </div>
          </Link>
          <Link to="/" className="hiring-content-item">
            <div>
              <img src={Item} alt="" />
            </div>
            <div>
              <p>CAFEBIZ.VN</p>
              <p>
                CEO startup Telio: Hành trình "gọi vốn con người" là gian nan
                nhất
              </p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </HiringWrapper>
  );
};

export default Hiring;
