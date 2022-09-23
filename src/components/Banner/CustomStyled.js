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
            color: blue;
            font-weight: bold;

            @media only screen and (max-width: 576px) {
              font-size: 20px;
            }
          }

          & > img {
            width: 30px;
            height: 30px;
            object-fit: cover;
          }
        }

        & > p {
          font-size: 12px;
          color: #fff;

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
        /* color: #fff; */
        background-color: #fff;
        font-weight: bold;
        text-align: center;
        width: 100%;

        /* @media only screen and (max-width: 576px) {
          font-size: 20px;
          width: 100%;
        } */

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

        /* & > span {
          display: inline-block;
          background-color: #fff;
          padding: 10px;
          border-radius: 12px;
          /* color: linear-gradient(#ffc736, #ff8a00); */
        /* color: #ff8a00; */
        /* }  */
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

  & > div.icon-fix {
    position: fixed;
    top: 186px;
    right: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 9999;

    @media screen and (max-width: 576px) {
      top: 128px;
    }

    & > a {
      display: block;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      width: 40px;
      height: 40px;
      padding: 5px;
      border-radius: 50%;
      background-color: #fff;
      box-sizing: border-box;
      &:hover {
        transform: scale(1.2);
      }
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
