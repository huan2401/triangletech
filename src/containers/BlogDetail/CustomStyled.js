import styled from "styled-components";

export const BlogDetailWrapper = styled.div`
  width: 100%;
  padding-top: 100px;

  .blog-detail-back {
    padding: 20px 200px;

    @media only screen and (max-width: 576px) {
      padding: 20px 20px;
    }
  }

  .blog-detail-content {
    padding: 50px 200px;
    padding-top: 0;

    @media only screen and (max-width: 576px) {
      padding: 20px 20px;
      padding-top: 0;
    }

    &-title {
      & > p:first-child {
        font-size: 36px;
        line-height: 120%;
        color: #465059;
        margin: 16px 0;
      }
      & > p:last-child {
        font-size: 16px;
        line-height: 150%;
        color: #646b72;
        letter-spacing: 1px;
        padding: 20px 0;
      }
    }
  }
`;
