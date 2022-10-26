import Nav from "components/common/Nav/Nav";
import React, { useEffect, useState } from "react";
import BannerBg from "assets/images/banner.jpg";
import Item from "assets/images/blog-item.webp";
import Footer from "components/Layout/Footer/Footer";
import { Link } from "react-router-dom";
import { BlogWrapper } from "./CustomStyled";
import { Pagination } from "antd";
import axios from "axios";
import { formatDate, getHour } from "utils/formatDate";
import Loading from "components/common/Loading/Loading";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChangePage = (page, pageSize) => {
    setCurrentPage(page);
  };

  const getPostByPage = async (page) => {
    const res = await axios.get("https://demo-cms.cetera.one/api/v1/posts", {
      params: { page },
    });
    console.log("first", res);
    return res.data;
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getPostByPage(currentPage).then((res) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setPosts([...res.data]);
      setLoading(false);
    });
  }, [currentPage]);

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
          {loading ? (
            <Loading />
          ) : (
            posts.map((post, index) => {
              return (
                <Link to="/" className="blog-content-item" key={index}>
                  <div>
                    <img src={post.image} alt="" />
                  </div>
                  <div>
                    <p>{post.name}</p>
                    <div>
                      <p>{`${getHour(Date.now())} , ${formatDate(
                        post.created_at
                      )}`}</p>
                      <p>{post.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
        <div>
          <Pagination
            simple
            defaultCurrent={1}
            total={50}
            onChange={handleChangePage}
          />
        </div>
      </div>
      <Footer />
    </BlogWrapper>
  );
};

export default Blog;
