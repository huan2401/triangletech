import styled from "styled-components";

export const InfoWrapper = styled.div`
  width: 100%;

  .blog-banner {
    width: 100%;
    height: 498px;
    position: relative;

    @media only screen and (max-width: 576px) {
      height: 50vh;
    }
    & > div {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .blog-content {
    padding: 50px 200px;

    @media only screen and (max-width: 576px) {
      padding: 40px 15px;
    }

    & > div.blog-content-list {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      gap: 3%;

      @media only screen and (max-width: 576px) {
        flex-direction: column;
        gap: 30px;
      }

      & > a.blog-content-item {
        width: 30%;
        display: block;
        margin-bottom: 20px;

        @media only screen and (max-width: 576px) {
          width: 100%;
        }

        & > div:first-child {
          width: 100%;

          & > img {
            width: 100%;
            height: auto;
          }
        }
        & > div:last-child {
          margin-top: 30px;

          & > p:first-child {
            color: #465059;
            font-size: 24px;
            line-height: 32px;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            min-height: 64px;

            &:hover {
              color: #0795ff;
            }
          }
          & > div {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            & > p:first-child {
              color: #a3aab1;
              font-size: 14px;
              line-height: 17px;
              letter-spacing: 1px;
            }
            & > p:last-child {
              font-size: 16px;
              line-height: 150%;
              color: #646b72;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              line-clamp: 3;
              overflow: hidden;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
              letter-spacing: 1px;
            }
          }
        }
      }
    }

    & > div:last-child {
      margin-top: 30px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
