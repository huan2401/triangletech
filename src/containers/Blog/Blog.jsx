import Nav from "components/common/Nav/Nav";
import React, { useEffect, useState } from "react";
import BannerBg from "assets/images/banner.jpg";
import Footer from "components/Layout/Footer/Footer";
import { Link } from "react-router-dom";
import { BlogWrapper } from "./CustomStyled";
import { Button, Pagination, Tag } from "antd";
import axios from "axios";
import { formatDate, getHour } from "utils/formatDate";
import Loading from "components/common/Loading/Loading";
import Category from "components/common/Category/Category";
import { t } from "i18next";
import { useBreakpoints } from "hooks/useBreakpoint";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState("All");

  const { isMobile } = useBreakpoints();

  const handleChangePage = (page, pageSize) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", JSON.stringify(page));
  };

  const getPostByPage = async (page) => {
    const res = await axios.get("https://demo-cms.cetera.one/api/v1/posts", {
      params: { page, per_page: 9 },
    });
    const lastLink = res.data.links.last;
    setLastPage(Number(lastLink.split("=")[1]));
    return res.data;
  };

  const getPostByCategory = async (slug) => {
    if (slug !== "All") {
      const res = await axios.get(
        `https://demo-cms.cetera.one/api/v1/category/${slug}`
      );
      return res.data;
    }
  };

  const handleSelectedCategory = (categorySlug) => {
    setSelectedCategorySlug(categorySlug === "All" ? "All" : categorySlug);
  };

  const getAllCategory = async (page) => {
    const res = await axios.get(
      "https://demo-cms.cetera.one/api/v1/categories",
      {
        params: { page },
      }
    );
    return res.data;
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (selectedCategorySlug !== "All") {
      setLoading(true);
      getPostByCategory(selectedCategorySlug).then((res) => {
        setPosts(res.data.posts.data);
        setLoading(false);
      });
    }
  }, [selectedCategorySlug]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setLoading(true);
    if (selectedCategorySlug === "All") {
      getPostByPage(currentPage)
        .then((res) => {
          setPosts([...res.data]);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setPosts([]);
        });
    }
  }, [currentPage, selectedCategorySlug]);

  useEffect(() => {
    getAllCategory(1)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        setCategories([]);
      });
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("currentPage")) !== null)
      setCurrentPage(JSON.parse(localStorage.getItem("currentPage")));
  }, [JSON.parse(localStorage.getItem("currentPage"))]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("selectedCategorySlug")) !== null)
      setSelectedCategorySlug(
        JSON.parse(localStorage.getItem("selectedCategorySlug"))
      );
  }, [JSON.parse(localStorage.getItem("selectedCategorySlug"))]);

  return (
    <BlogWrapper>
      <Nav collapse={true} />
      <div className="blog-banner">
        <div>
          <img src={BannerBg} alt="" />
        </div>
      </div>
      <div className="blog-content">
        <div className="blog-content-category">
          {!isMobile && (
            <span
              style={{
                marginRight: 8,
                fontSize: 16,
                whiteSpace: "nowrap",
              }}
            >
              {t("category")} :
            </span>
          )}
          <Category categories={categories} selected={handleSelectedCategory} />
        </div>
        <div className="blog-content-list">
          {loading ? (
            <Loading />
          ) : (
            posts.map((post, index) => {
              return (
                <Link
                  to={`/blog/${post.slug}`}
                  className="blog-content-item"
                  key={index}
                >
                  <div>
                    <img src={post.image} alt="" />
                  </div>
                  <div>
                    <p>{post.name}</p>
                    <div>
                      <p>{`${getHour(post.created_at)} , ${formatDate(
                        post.created_at
                      )}`}</p>
                      <p className="post-desc">{post.description}</p>
                      <div className="post-tags">
                        {post.tags.map((tag, index) => {
                          return (
                            <Tag key={index} color="#108ee9">
                              {tag.name}
                            </Tag>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
        <div className="blog-content-pagination">
          {selectedCategorySlug === "All" && (
            <Pagination
              simple
              defaultCurrent={currentPage}
              current={currentPage}
              total={lastPage * 10}
              onChange={handleChangePage}
            />
          )}
        </div>
      </div>
      <Footer />
    </BlogWrapper>
  );
};

export default Blog;
