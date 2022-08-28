import styled from "styled-components";

export const HiringWrapper = styled.div`
  width: 100%;

  .hiring-banner {
    width: 100%;
    height: 498px;
    position: relative;

    @media only screen and (max-width: 576px) {
      height: 50vh;
    }
    & > div:first-child {
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

    & > div:last-child {
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 30px;
      margin-top: 50px;

      @media only screen and (max-width: 576px) {
        gap: 26px;
      }

      & > p {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 36px;
        color: #fff;

        @media only screen and (max-width: 576px) {
          font-size: 20px;
        }
      }

      & > div {
        outline: none;
        background: none;
        color: #fff;
        border: 2px solid #fff !important;
        border-radius: 100px;
        width: 261px;
        height: 48px;
        cursor: pointer;
        font-weight: 700;
        font-size: 17px;
        letter-spacing: 0.15px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media only screen and (max-width: 576px) {
          width: 183px;
          height: 40px;
        }
      }
    }
  }

  .hiring-content {
    padding: 50px 200px;

    @media only screen and (max-width: 576px) {
      padding: 64px 15px 50px 15px;
    }
    & > p {
      color: #0795ff;
      letter-spacing: 4px;
      font-weight: 700;
      font-size: 26px;
      text-transform: uppercase;
      text-align: center;
    }

    & > div.hiring-content-list {
      margin-top: 60px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      gap: 3%;

      @media only screen and (max-width: 576px) {
        flex-direction: column;
        gap: 40px;
      }
      & > a.hiring-content-item {
        width: 30%;
        display: block;

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
          & > p {
            line-height: 30px;
            color: #465059;
          }

          & > p:first-child {
            font-weight: 400;
            font-size: 20px;
          }
          & > p:last-child {
            font-weight: 600;
            font-size: 17px;
          }
        }
      }
    }
  }
`;
