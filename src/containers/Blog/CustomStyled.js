import styled from "styled-components";

export const BlogWrapper = styled.div`
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
    padding: 50px 150px;

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
        /* width: 30%; */
        width: 380px;
        display: block;
        margin-bottom: 20px;

        @media only screen and (max-width: 576px) {
          width: 100%;
        }

        & > div:first-child {
          width: 100%;
          height: 300px;

          & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        & > div:last-child {
          margin-top: 30px;

          & > p:first-child {
            color: #465059;
            font-size: 24px;
            line-height: 1.5;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            line-height: 1.5;
            display: -webkit-box;
            min-height: calc(24px * 1.5 * 2);

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
              line-height: 1.5;
              color: #646b72;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              line-clamp: 3;
              overflow: hidden;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
              letter-spacing: 1px;
              min-height: calc(16px * 1.5 * 3);
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
