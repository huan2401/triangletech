import styled from "styled-components";

export const HiringWrapper = styled.div`
  width: 100%;

  .hiring-banner {
    width: 100%;
    height: 498px;
    position: relative;
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

      & > p {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 36px;
        color: #fff;
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
      }
    }
  }

  .hiring-content {
    padding: 50px 200px;
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
      & > a.hiring-content-item {
        width: 30%;
        display: block;

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
