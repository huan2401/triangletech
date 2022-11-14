import styled from "styled-components";

export const BlogDetailWrapper = styled.div`
  width: 100%;
  padding-top: 100px;

  .blog-detail {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;

    @media screen and (max-width: 900px) {
      padding: 50px 20px;
      & > div {
        width: 100% !important;
      }
    }

    .blog-detail-back {
      /* padding: 20px 360px; */
      width: 800px;

      @media only screen and (max-width: 576px) {
        padding: 20px 20px;
      }
    }
    .blog-detail-content {
      /* padding: 50px 360px;
      padding-top: 0; */
      width: 800px;
      padding-top: 20px;

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

      &-tags {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
    }
    .blog-detail-more {
      width: 800px;
      margin-top: 50px;

      & > p {
        padding: 20px;
        border-top: 1px solid #c8c8c8;
        border-bottom: 1px solid #c8c8c8;

        text-align: center;

        font-size: 20px;
        line-height: 140%;
        letter-spacing: 0.8px;
        color: #465059;
        text-align: center;
        text-transform: uppercase;
      }

      &-list {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        @media screen and (max-width: 576px) {
          gap: 30px;
        }

        .blog-detail-item {
          width: 100%;
          display: flex;
          gap: 20px;

          @media screen and (max-width: 576px) {
            flex-direction: column;
            gap: 10px;
          }

          &-thumb {
            width: 40%;
            height: 200px;

            @media screen and (max-width: 576px) {
              width: 100%;
            }

            & > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          &-content {
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 20px;

            @media screen and (max-width: 576px) {
              width: 100%;
              gap: 10px;
            }

            & > p {
              font-size: 20px;
              line-height: 26px;
              color: #465059;
              margin: 0;
              -webkit-line-clamp: 2;
              letter-spacing: 1px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
            }

            & > div {
              & > p:first-child {
                color: #a3aab1;
                font-size: 14px;
                line-height: 17px;
              }
              & > p:last-child {
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                color: #646b72;
                margin: 8px 0 0;
                -webkit-line-clamp: 4;
                letter-spacing: 1px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
              }
            }
          }
        }
      }
    }
  }
`;
