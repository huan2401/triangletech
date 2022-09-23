import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;

  & > div.footer-banner {
    width: 100%;
    height: 400px;

    @media only screen and (max-width: 576px) {
      height: 164px;
    }

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & > div.footer-content {
    padding: 50px 24px;
    display: flex;
    justify-content: space-evenly;

    @media only screen and (max-width: 576px) {
      padding: 24px;
      flex-direction: column;
      gap: 40px;
    }
    & > div.footer-content-left {
      display: flex;
      gap: 20px;

      @media only screen and (max-width: 576px) {
        flex-direction: column;
      }

      & > div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > p {
          font-size: 24px;
          color: #ff8a00;
          font-weight: bold;
          transform: translateY(-24px);

          @media only screen and (max-width: 576px) {
            transform: initial;
            text-align: center;
          }
        }
      }

      & > div:last-child {
        & > p {
          font-size: 17px;
          font-weight: 400;
          letter-spacing: 1px;
          color: #646b72;

          @media only screen and (max-width: 576px) {
            text-align: center;
          }

          & > a {
            font-size: 17px;
            font-weight: 400;
            letter-spacing: 1px;
            color: #646b72;
            text-decoration: underline;
          }
        }
      }
    }
    & > div.footer-content-right {
      display: flex;
      gap: 20px;

      @media only screen and (max-width: 576px) {
        flex-direction: column;
      }

      & > div:first-child {
        & > a {
          display: block;
          font-size: 17px;
          font-weight: 400;
          letter-spacing: 1px;
          color: #646b72;
          text-decoration: underline;

          @media only screen and (max-width: 576px) {
            text-align: center;
          }
        }
        & > div {
          & > a {
            display: block;
            & > img {
              width: 32px;
              height: 32px;
              object-fit: cover;
            }
          }
        }

        & > div {
          display: flex;
          gap: 5px;
          margin-top: 10px;
          @media only screen and (max-width: 576px) {
            justify-content: center;
          }
          & > a {
            display: block;
          }
        }
      }

      & > div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media only screen and (max-width: 576px) {
          align-items: center;
          gap: 20px;
        }
        & > img {
          width: 120px;
          height: 46px;
        }
      }
    }
  }
`;
