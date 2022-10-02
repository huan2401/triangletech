import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  @media only screen and (max-width: 576px) {
    height: 70vh;
  }

  & > div.banner-background {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  & > div.banner-content {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: 30px 60px 0 60px;

    @media only screen and (max-width: 576px) {
      padding: 10px 30px 0 30px;
    }

    & > div.banner-content-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div.banner-content-header-logo {
        & > div {
          display: flex;
          /* margin-bottom: 10px; */
          align-items: center;
          gap: 10px;
          & > p {
            font-size: 30px;
            color: #fff;
            font-weight: bold;

            -webkit-text-fill-color: white;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #0066ff;

            @media only screen and (max-width: 576px) {
              font-size: 20px;
            }
          }

          & > img {
            width: 40px;
            height: 40px;
            object-fit: cover;
          }
        }

        & > p {
          font-size: 16px;
          color: blue;

          @media only screen and (max-width: 576px) {
            font-size: 24px;
            color: #fff;
            font-weight: bold;
          }
        }
      }
      & > div.banner-content-header-lang {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
      }
    }

    & > div.banner-content-msg {
      margin-top: 30vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media only screen and (max-width: 576px) {
        margin-top: 180px;
      }
      & > p {
        background-color: #fff;
        font-weight: bold;
        text-align: center;
        width: 100%;

        -webkit-text-fill-color: white;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #0066ff;

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        backdrop-filter: blur(10px);

        & > span:first-child {
          font-size: 50px;
          color: blue;

          @media only screen and (max-width: 576px) {
            font-size: 22px;
          }
        }

        & > span:last-child {
          font-size: 20px;
          color: blue;
          @media only screen and (max-width: 576px) {
            font-size: 16px;
          }
        }
      }
    }

    & > div.banner-content-link {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;

      @media only screen and (max-width: 576px) {
        margin-top: 55px;
      }

      & > div {
        box-shadow: 0 20px 20px rgb(103 128 155 / 20%);
      }

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
