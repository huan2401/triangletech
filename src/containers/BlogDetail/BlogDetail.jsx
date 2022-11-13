import Nav from "components/common/Nav/Nav";
import React, { useEffect, useState } from "react";
import BannerBg from "assets/images/banner.jpg";
import Footer from "components/Layout/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { BlogDetailWrapper } from "./CustomStyled";
import axios from "axios";
import Loading from "components/common/Loading/Loading";
import { LeftOutlined } from "@ant-design/icons";
import { formatDate, getHour } from "utils/formatDate";
import ReactHtmlParser from 'react-html-parser';

const BlogDetail = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  const fetch = async (slug) => {
    const response = await axios.get(
      `https://demo-cms.cetera.one/api/v1/post/${slug}`
    );
    return response.data.data;
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setLoading(true);
    fetch(slug).then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  console.log("response post data", data);

  return (
    <BlogDetailWrapper>
      <Nav collapse={true} />
      <div className="blog-detail-back">
        <Link to="/blog">
          <LeftOutlined />
          Tất cả bài viết
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
          </>
        )}
      </div>
      <Footer />
    </BlogDetailWrapper>
  );
};

export default BlogDetail;
