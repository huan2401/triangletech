import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;

  & > div.home-content {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100vh;

    .home-content-info-product {
      width: 100%;
      background-color: #fff;
      padding: 100px 60px 60px 60px;

      @media only screen and (max-width: 576px) {
        padding: 100px 30px 30px 30px;
      }

      .info-product-title {
        color: #0795ff;
        font-size: 26px;
        letter-spacing: 4px;
        line-height: 28px;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
      }
      .info-product-detail {
        margin-top: 60px;
        & > div {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 200px;
          gap: 20px;

          @media only screen and (max-width: 576px) {
            width: 100%;
            flex-wrap: wrap;
            padding: 0;
            gap: 52px;
          }

          .info-product-item {
            flex: 1;
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
            gap: 10px;

            @media only screen and (max-width: 576px) {
              /* width: 100%; */
            }

            & > div:first-child {
              min-height: 80px;
              width: 100%;
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;

              & > div {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100px;
                height: 100px;
                position: absolute;
                top: -50%;
                border-radius: 50%;
                border: 4px solid #dce5ff;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
                  rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
                padding: 6px;
                & > img {
                  width: 80%;
                  height: 80%;
                  object-fit: cover;
                }
              }
            }

            & > div:nth-child(2) {
              display: flex;
              flex-direction: column;
              gap: 10px;
              min-height: 250px;

              & > p:first-child {
                color: #465059;
                font-size: 16px;
                font-weight: bold;
                letter-spacing: 2.43px;
                text-transform: uppercase;
                text-align: center;
                min-height: calc(16px * 2 * 2);
                line-height: 2;
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
              height: 110px;

              & > img {
                object-fit: cover;
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

      @media only screen and (max-width: 576px) {
        padding: 70px 20px 20px 20px;
      }
      & > div:first-child {
        & > p {
          font-size: 26px;
          color: #0795ff;
          letter-spacing: 4px;
          line-height: 30px;
          text-align: center;
          text-transform: uppercase;
          font-weight: bold;
        }
      }

      & > div:last-child {
        width: 100%;
        margin-top: 40px;
        padding: 0 100px;

        @media only screen and (max-width: 576px) {
          padding: 0;
        }

        & > img {
          width: 100%;
        }
      }
    }

    .section-4-wrapper {
      background-color: #dbf0ff;
      padding: 60px 0;

      @media screen and (max-width: 576px) {
        padding: 0;
      }
    }

    .section-4 {
      background-color: #dbf0ff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 0;
      min-height: 600px;

      div.section-4-left-button {
        position: absolute;
        z-index: 20;
        bottom: 40px;
        left: 200px;
        justify-content: center;
        display: flex;
        gap: 10px;

        & > a {

          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 1rem;
          background: #fff;
          border-radius: 200px;
          box-shadow: 0 10px 40px rgb(103 128 155 / 40%);
          & > p {
            color: #286af6;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.8px;
            line-height: 150%;
            white-space: nowrap;
          }

          & > img {
            width: 25px;
            height: 25px;
            object-fit: cover;
          }
        }
        & > div:last-child {
          & > p {
            color: #ee4d2d;
          }
        }
      }

      &-left {
        /* width: 50%; */
        height: 600px;
        overflow: hidden;
        overflow-y: auto;
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
        position: absolute;
        width: 100%;
        z-index: 10;
        padding: 60px 200px;
        box-sizing: border-box;

        &::-webkit-scrollbar {
          width: 0 !important;
          display: none;
        }

        div.section-4-left-item {
          display: flex;
          height: 600px;
          width: 50%;

          & > img {
            width: 110px;
            height: 140px;
          }

          & > div {
            & > p:first-child {
              text-transform: uppercase;
              font-size: 46px;
              color: #0795ff;
              font-weight: bold;
              margin-bottom: 30px !important;
            }

            & > p:last-child {
              color: #0795ff;
              font-size: 24px;
            }
          }
        }
      }

      &-right {
        width: 100%;
        height: 520px;
        position: absolute;
        z-index: 1;
        right: 200px;
        & > img:first-child {
          width: 297px;
          height: 100%;
          position: absolute;
          z-index: 1;
          right: 0;
        }
        & > div {
          position: absolute;
          z-index: 3;
          right: 29px;
          width: 240px;
          height: 90%;
          top: 16px;
          border-radius: 30px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .section-4-mobile {
      background-color: #dbf0ff;
      padding: 50px 12px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > div:not(:first-child) {
        margin-top: 50px;
      }

      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        & > div.section-4-mobile-item-title {
          & > p:first-child {
            text-transform: uppercase;
            font-size: 28px;
            color: #0795ff;
            font-weight: bold;
            text-align: center;
          }

          & > p:last-child {
            color: #0795ff;
            font-size: 18px;
            text-align: center;
          }
        }

        & > div:last-child {
          width: 100%;
          height: 520px;
          margin-top: 20px;
          position: relative;
          z-index: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          & > img:first-child {
            width: 297px;
            height: 100%;
            position: absolute;
            z-index: 1;
            display: none;
          }
          & > div {
            position: absolute;
            z-index: 3;
            width: 240px;
            height: 100%;
            top: 0px;
            border-radius: 26px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }

      &-button {
        position: relative;
        z-index: 20;
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 20px;

        & > div {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding: 1rem;
          background: #fff;
          border-radius: 200px;
          box-shadow: 0 10px 40px rgb(103 128 155 / 40%);
          & > p {
            color: #286af6;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.8px;
            line-height: 150%;
            white-space: nowrap;
          }

          & > img {
            width: 25px;
            height: 25px;
            object-fit: cover;
          }
        }

        & > div:last-child {
          & > p {
            color: #ee4d2d;
          }
        }
      }
    }
    .section-5 {
      padding: 150px 60px 60px 60px;

      @media only screen and (max-width: 576px) {
        padding: 80px 10px;
      }

      &-title {
        color: #0795ff;
        font-size: 26px;
        letter-spacing: 4px;
        line-height: 28px;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
      }

      &-list {
        margin-top: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3%;
        padding: 0 120px;

        @media only screen and (max-width: 576px) {
          flex-direction: column;
          gap: 20px;
          width: 100%;
          padding: 0;
          padding: 0 20px;
          margin-top: 50px;
        }

        &-item {
          border: 2px solid #ffc52e;
          border-radius: 16px;
          box-shadow: 0 2px 2px 1px rgb(0 0 0 / 10%),
            0 10px 20px rgb(0 0 0 / 10%);
          box-sizing: border-box;
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 24px;

          @media only screen and (max-width: 576px) {
            width: 100%;
          }

          & > div:first-child {
            display: flex;
            align-items: center;
            gap: 10px;

            & > img {
              width: 90px;
              height: 90px;
              object-fit: cover;
              border-radius: 50%;

              @media only screen and (max-width: 576px) {
                width: 60px;
                height: 60px;
              }
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
                white-space: nowrap;
              }

              & > span:last-child {
                color: #646b72;
                font-size: 16px;
                letter-spacing: 1px;
                white-space: nowrap;
              }
            }
          }

          & > div:last-child {
            margin-top: 20px;

            & > p {
              color: #465059;
              font-size: 16px;
              letter-spacing: 1px;
              min-height: 204px;
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
