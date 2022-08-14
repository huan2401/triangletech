import styled from "styled-components";

export const BannerWrapper = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100vh;

  /* & > div.banner-background {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  } */
  & > div.banner-content {
    /* position: absolute;
    z-index: 1; */
    width: 100%;
    height: 100%;
    padding: 30px 60px 0 60px;

    & > div.banner-content-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div.banner-content-header-logo {
        & > p {
          font-size: 24px;
          color: #fff;
          font-weight: bold;
        }
      }
      & > div.banner-content-header-lang {
      }
    }

    & > div.banner-content-msg {
      margin-top: 216px;
      & > p {
        color: #fff;
        font-size: 36px;
        font-weight: bold;
        text-align: center;

        & > span {
          display: inline-block;
          background-color: #fff;
          padding: 10px;
          border-radius: 12px;
          /* color: linear-gradient(#ffc736, #ff8a00); */
          color: #ff8a00;
        }
      }
    }

    & > div.banner-content-link {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > p {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }
`;
