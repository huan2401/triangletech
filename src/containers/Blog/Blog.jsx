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
import CheckableTag from "antd/lib/tag/CheckableTag";
import { unique } from "utils/unique";

const tagsData = [
  "All",
  "Design",
  "Lifestyle",
  "Travel Tips",
  "Healthy",
  "Hotel",
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleChangePage = (page, pageSize) => {
    setCurrentPage(page);
  };

  const getPostByPage = async (page) => {
    const res = await axios.get("https://demo-cms.cetera.one/api/v1/posts", {
      params: { page },
    });
    const lastLink = res.data.links.last;
    console.log("first", res);
    setLastPage(Number(lastLink.split("=")[1]));
    return res.data;
  };

  const getAllCategory = async (page) => {
    const res = await axios.get(
      "https://demo-cms.cetera.one/api/v1/categories",
      {
        params: { page },
      }
    );
    const lastLink = res.data.links.last;
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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setLoading(true);
    getPostByPage(currentPage).then((res) => {
      setPosts([...res.data]);
      setLoading(false);
    });
  }, [currentPage]);

  useEffect(() => {
    getAllCategory(1).then((res) => {
      console.log("cate", res);
      const temp = res.data.map((item) => item.name);
      temp.unshift("All");
      const arr = unique(temp);
      setCategories(arr);
      console.log();
    });
  }, []);

  const handleChange = (tag, checked) => {
    console.log("tag", tag, checked);
    let nextSelectedTags;
    if (tag === "All") {
      if (checked) {
        nextSelectedTags = categories;
        setSelectedTags(nextSelectedTags);
      } else {
        nextSelectedTags = [];
        setSelectedTags(nextSelectedTags);
      }
      return;
    }
    nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };
  console.log("Selected tags", selectedTags);
  console.log("categories", categories);

  return (
    <BlogWrapper>
      <Nav collapse={true} />
      <div className="blog-banner">
        <div>
          <img src={BannerBg} alt="" />
        </div>
      </div>
      <div className="blog-content">
        <div>
          <span
            style={{
              marginRight: 8,
            }}
          >
            Categories:
          </span>
          {categories.map((tag, index) => (
            <CheckableTag
              key={index}
              checked={selectedTags.indexOf(tag) > -1}
              onChange={(checked) => handleChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          ))}
        </div>
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
            total={lastPage * 10}
            onChange={handleChangePage}
          />
        </div>
      </div>
      <Footer />
    </BlogWrapper>
  );
};

export default Blog;
