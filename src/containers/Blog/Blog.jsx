import Nav from "components/common/Nav/Nav";
import React, { useEffect } from "react";
import BannerBg from "assets/images/banner.jpg";
import Item from "assets/images/blog-item.webp";
import Footer from "components/Layout/Footer/Footer";
import { Link } from "react-router-dom";
import { BlogWrapper } from "./CustomStyled";
import { Pagination } from "antd";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <BlogWrapper>
      <Nav collapse={true} />
      <div className="blog-banner">
        <div>
          <img src={BannerBg} alt="" />
        </div>
      </div>
      <div className="blog-content">
        <div className="blog-content-list">
          <Link to="/" className="blog-content-item">
            <div>
              <img src={Item} alt="" />
            </div>
            <div>
              <p>4 cách liên hệ Telio khi chủ tiệm cần hỗ trợ</p>
              <div>
                <p>11:08 11/08/2022</p>
                <p>
                  Bộ phận Chăm sóc Khách hàng (CSKH) của Telio luôn sẵn sàng
                  tiếp nhận ý kiến và trợ giúp nhanh nhất cho chủ tiệm. Trong
                  những trường hợp cần hỗ trợ, chủ tiệm có thể liên hệ tổng đài
                  qua 4 cách trong bài viết nhé!
                </p>
              </div>
            </div>
          </Link>
          <Link to="/" className="blog-content-item">
            <div>
              <img src={Item} alt="" />
            </div>
            <div>
              <p>4 cách liên hệ Telio khi chủ tiệm cần hỗ trợ</p>
              <div>
                <p>11:08 11/08/2022</p>
                <p>
                  Bộ phận Chăm sóc Khách hàng (CSKH) của Telio luôn sẵn sàng
                  tiếp nhận ý kiến và trợ giúp nhanh nhất cho chủ tiệm. Trong
                  những trường hợp cần hỗ trợ, chủ tiệm có thể liên hệ tổng đài
                  qua 4 cách trong bài viết nhé!
                </p>
              </div>
            </div>
          </Link>
          <Link to="/" className="blog-content-item">
            <div>
              <img src={Item} alt="" />
            </div>
            <div>
              <p>4 cách liên hệ Telio khi chủ tiệm cần hỗ trợ</p>
              <div>
                <p>11:08 11/08/2022</p>
                <p>
                  Bộ phận Chăm sóc Khách hàng (CSKH) của Telio luôn sẵn sàng
                  tiếp nhận ý kiến và trợ giúp nhanh nhất cho chủ tiệm. Trong
                  những trường hợp cần hỗ trợ, chủ tiệm có thể liên hệ tổng đài
                  qua 4 cách trong bài viết nhé!
                </p>
              </div>
            </div>
          </Link>
          <Link to="/" className="blog-content-item">
            <div>
              <img src={Item} alt="" />
            </div>
            <div>
              <p>4 cách liên hệ Telio khi chủ tiệm cần hỗ trợ</p>
              <div>
                <p>11:08 11/08/2022</p>
                <p>
                  Bộ phận Chăm sóc Khách hàng (CSKH) của Telio luôn sẵn sàng
                  tiếp nhận ý kiến và trợ giúp nhanh nhất cho chủ tiệm. Trong
                  những trường hợp cần hỗ trợ, chủ tiệm có thể liên hệ tổng đài
                  qua 4 cách trong bài viết nhé!
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Pagination simple defaultCurrent={1} total={50} />
        </div>
      </div>
      <Footer />
    </BlogWrapper>
  );
};

export default Blog;
