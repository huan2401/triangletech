import Nav from "components/common/Nav/Nav";
import React, { useEffect, useState } from "react";
import Footer from "components/Layout/Footer/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BlogDetailWrapper } from "./CustomStyled";
import axios from "axios";
import Loading from "components/common/Loading/Loading";
import { LeftOutlined } from "@ant-design/icons";
import { formatDate, getHour } from "utils/formatDate";
import ReactHtmlParser from "react-html-parser";
import { t } from "i18next";
import { Tag } from "antd";

const BlogDetail = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();

  const fetch = async (slug) => {
    const response = await axios.get(
      `https://demo-cms.cetera.one/api/v1/post/${slug}`
    );
    return response.data.data;
  };

  const fetchPostByCategory = async (slug) => {
    const res = await axios.get(
      `https://demo-cms.cetera.one/api/v1/category/${slug}`
    );
    // console.log("fetchPostByCategory", res);
    return res.data.data;
  };

  const getRandomElementArray = (array) => {
    if (array.length <= 3) return array;
    let index = Math.floor(Math.random() * array.length);
    let arrayIndex = [index];
    while (true) {
      let temp = Math.floor(Math.random() * array.length);
      if (arrayIndex.length === 3) {
        break;
      }
      if (temp === index) {
        break;
      }
      arrayIndex.push(temp);
    }
    const result = arrayIndex.map((item) => {
      return array[item];
    });
    return result;
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
    setLoading(true);
    fetch(slug).then((response) => {
      setData(response);
      setCategories([...response.categories]);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    categories.forEach((item) => {
      fetchPostByCategory(item.slug).then((res) => {
        setRelatedPosts((prev) => prev.concat(res.posts.data));
      });
    });
  }, [categories.length]);

  return (
    <BlogDetailWrapper>
      <Nav collapse={true} />
      <div className="blog-detail">
        <div className="blog-detail-back">
          <Link to="/blog">
            <LeftOutlined />
            {t("All posts")}
          </Link>
        </div>
        <div className="blog-detail-content">
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="blog-detail-content-title">
                <p>{data.name}</p>
                <p>{`${getHour(data.created_at)} , ${formatDate(
                  data.created_at
                )}`}</p>
              </div>
              <div>
                {/* <div dangerouslySetInnerHTML={{ __html: data.content }} /> */}
                {ReactHtmlParser(data.content)}
              </div>
              <div className="blog-detail-content-tags">
                {Array.isArray(data.tags) &&
                  data.tags.map((tag, index) => {
                    return (
                      <Tag key={index} color="#108ee9">
                        {tag.name}
                      </Tag>
                    );
                  })}
              </div>
            </>
          )}
        </div>
        <div className="blog-detail-more">
          <p>{t("Related Posts")}</p>
          <div className="blog-detail-more-list">
            {getRandomElementArray(relatedPosts).map((post, index) => {
              return (
                <Link
                  key={index}
                  to={`/blog/${post.slug}`}
                  className="blog-detail-item"
                  onClick={() => {
                    navigate(`/blog/${post.slug}`, { replace: true });
                    window.location.reload();
                  }}
                >
                  <div className="blog-detail-item-thumb">
                    <img src={post.image} alt="" />
                  </div>
                  <div className="blog-detail-item-content">
                    <p>{post.name}</p>
                    <div>
                      <p>{`${getHour(post.created_at)} , ${formatDate(
                        post.created_at
                      )}`}</p>
                      <p>{post.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </BlogDetailWrapper>
  );
};

export default BlogDetail;
