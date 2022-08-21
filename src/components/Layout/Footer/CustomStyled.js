import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;

  & > div.footer-banner {
    width: 100%;
    height: auto;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  & > div.footer-content {
    padding: 50px 24px;
    display: flex;
    justify-content: space-evenly;
    & > div.footer-content-left {
      display: flex;
      gap: 20px;

      & > div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > p {
          font-size: 24px;
          color: #ff8a00;
          font-weight: bold;
          transform: translateY(-24px);
        }
      }

      & > div:last-child {
        & > p {
          font-size: 17px;
          font-weight: 400;
          letter-spacing: 1px;
          color: #646b72;

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

      & > div:first-child {
        & > a {
          display: block;
          font-size: 17px;
          font-weight: 400;
          letter-spacing: 1px;
          color: #646b72;
          text-decoration: underline;
        }

        & > div {
            display: flex;
            gap: 5px;
            margin-top: 10px;
          & > a {
            display: block;
          }
        }
      }

      & > div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > img {
          width: 120px;
          height: 46px;
        }
      }
    }
  }
`;
