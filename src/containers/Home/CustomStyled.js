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
      padding: 60px;
      & > div:first-child {
        & > p {
          font-size: 26px;
          color: #0795ff;
          letter-spacing: 4px;
          line-height: 30px;
          text-align: center;
          text-transform: uppercase;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        gap: 10px;
        & > div {
          & > p:first-child {
            font-size: 18px;
            font-weight: bold;
            color: #0795ff;
            letter-spacing: 4px;
            text-align: center;
            text-transform: uppercase;
          }
          & > p:last-child {
            font-size: 6px;
            font-weight: bold;
            color: #0795ff;
            letter-spacing: 4px;
            text-align: center;
            text-transform: uppercase;
          }
        }
      }

      & > div:last-child {
        width: 100%;
        margin-top: 40px;

        & > img {
          width: 100%;
        }
      }
    }
    .section-4 {
      background-color: #dbf0ff;
      padding: 60px 200px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-left {
        /* width: 50%; */
        height: 400px;
        overflow: hidden;
        overflow-y: auto;
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
          width: 0 !important;
          display: none;
        }

        div.section-4-left-item {
          display: flex;
          height: 100%;

          & > img {
            width: 110px;
            height: 140px;
          }

          & > div {
            & > p:first-child {
              text-transform: uppercase;
              font-size: 60px;
              color: #0795ff;
            }

            & > p:last-child {
              color: #0795ff;
              font-size: 24px;
            }
          }
        }
      }

      &-right {
        width: 50%;
        height: 520px;
        position: relative;
        & > img:first-child {
          width: 297px;
          height: 100%;
          position: absolute;
          z-index: 1;
          right: 0;
        }
        & > img:nth-child(2) {
          /* width: 241px;
          top: 18px;
          height: 89%;
          right: 28px; */
          position: absolute;
          z-index: 2;

          right: 29px;
          width: 240px;
          height: 89%;
          top: 22px;
          /* object-fit: cover; */
        }
        & > div {
          position: absolute;
          z-index: 3;
          /* height: 100%; */
          right: 29px;
          width: 240px;
          top: 80px;
          /* height: 100%; */
          border-bottom-left-radius: 30px;
          border-bottom-right-radius: 30px;
          overflow: hidden;
          img {
            width: 100%;
            height: 404px;
            object-fit: cover;
          }
        }
      }
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
          /* width: 30%; */
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
