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
  }
`;
