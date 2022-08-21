import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  & > div.home-background {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100vh;
    top: 0;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  & > div.home-content {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100vh;
    /* overflow-y: auto; */

    .home-content-info-product {
      width: 100%;
      /* height: 1000px; */
      background-color: #fff;
      padding: 100px 60px 60px 60px;

      .info-product-title {
        color: #0795ff;
        font-size: 26px;
        letter-spacing: 4px;
        line-height: 28px;
        text-align: center;
        text-transform: uppercase;
      }
      .info-product-detail {
        margin-top: 60px;
        & > div {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 200px;
          gap: 20px;
          .info-product-item {
            align-items: center;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 2px 2px 1px rgb(0 0 0 / 10%),
              0 10px 20px rgb(0 0 0 / 10%);
            display: flex;
            flex-direction: column;
            padding: 16px;
            padding-bottom: 20px;
            position: relative;

            & > div:first-child {
              min-height: 100px;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;

              & > img {
                position: absolute;
                top: -50%;
              }
            }

            & > div:nth-child(2) {
              display: flex;
              flex-direction: column;
              gap: 30px;

              & > p:first-child {
                color: #465059;
                font-size: 22px;
                letter-spacing: 2.43px;
                text-transform: uppercase;
                text-align: center;
              }
              & > p:last-child {
                font-size: 14px;
                letter-spacing: 2.43px;
                text-align: center;
                color: #646b72;
                letter-spacing: 1px;
              }
            }

            & > div:last-child {
              width: 260px;
              height: auto;

              & > img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }

    .section-3 {
      background-color: #dbf0ff;
    }
    .section-4 {
    }
    .section-5 {
      padding: 150px 60px 60px 60px;

      &-title {
        color: #0795ff;
        font-size: 26px;
        letter-spacing: 4px;
        line-height: 28px;
        text-align: center;
        text-transform: uppercase;
      }

      &-list {
        margin-top: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3%;
        padding: 0 200px;

        &-item {
          width: 30%;
          border: 2px solid #ffc52e;
          border-radius: 16px;
          box-shadow: 0 2px 2px 1px rgb(0 0 0 / 10%),
            0 10px 20px rgb(0 0 0 / 10%);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          padding: 24px;

          & > div:first-child {
            display: flex;
            align-items: center;
            gap: 10px;

            & > img {
              width: 110px;
              height: 110px;
              border-radius: 50%;
            }

            & > p {
              display: flex;
              flex-direction: column;

              & > span:first-child {
                color: #465059;
                font-size: 16px;
                font-weight: 700;
                letter-spacing: 2.4px;
                text-transform: uppercase;
              }

              & > span:last-child {
                color: #646b72;
                font-size: 16px;
                letter-spacing: 1px;
              }
            }
          }

          & > div:last-child {
            margin-top: 20px;
  
            & > p {
              color: #465059;
              font-size: 16px;
              letter-spacing: 1px;
              min-height: 90px;
            }
            & > img:first-child {
              width: 18px;
              height: 14px;
              margin-bottom: 20px;
            }
            & > img:last-child {
              width: 18px;
              height: 14px;
              margin-left: 100%;
              transform: translateX(-100%) rotate(180deg);
            }
          }
        }
      }
    }
    .section-6 {
    }
  }
`;
