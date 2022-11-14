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
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media only screen and (max-width: 576px) {
      padding: 40px 15px;
    }

    &-category {
      display: flex;
      align-items: center;
      gap: 10px;

      max-width: 900px;
      width: 100%;
      margin: auto;
    }

    & > div.blog-content-list {
      margin-top: 30px;
      /* padding-bottom: 30px; */
      width: 100%;
      max-width: 900px;
      margin: auto;

      /* display: flex;
      flex-wrap: wrap;
      align-items: center; */
      display: grid;
      grid-gap: 30px;
      grid-template-columns: repeat(3, 1fr);

      @media only screen and (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
      }

      @media only screen and (max-width: 576px) {
        flex-direction: column;
        gap: 30px;
      }

      & > a.blog-content-item {
        /* width: 30%; */
        /* width: 380px; */
        display: block;
        margin-bottom: 20px;

        @media only screen and (max-width: 576px) {
          width: 100%;
        }

        & > div:first-child {
          width: 100%;
          height: 200px;

          & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        & > div:last-child {
          margin-top: 30px;

          & > p {
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
            /* min-height: calc(24px * 1.5 * 2); */

            &:hover {
              color: #0795ff;
            }
          }
          & > div {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            gap: 6px;
            & > p:first-child {
              color: #a3aab1;
              font-size: 14px;
              line-height: 17px;
              letter-spacing: 1px;
            }
            & > p.post-desc {
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
              /* min-height: calc(16px * 1.5 * 3); */
            }
            & > div.post-tags {
              display: flex;
              flex-wrap: wrap;
              gap: 4px;
            }
          }
        }
      }
    }

    & > div:last-child {
      /* margin-top: 30px; */
      max-width: 900px;
      width: 100%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
