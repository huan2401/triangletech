import styled from "styled-components";

export const NavWrapper = styled.div`
  /* width: 300px; */
  height: 70px;
  background-color: #fff;
  border-radius: 50px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  ${(props) =>
    props.collapse &&
    `
    position: fixed;
    z-index: 10000;
    top: 20px;
    width: 100%;
    right: 40px;
    width: calc(100% - 80px);
    box-shadow: 0 20px 20px rgb(103 128 155 / 20%);
  `};

  @media only screen and (max-width: 576px) {
    width: 100%;
    height: 90px;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgb(103 128 155 / 40%);

    ${(props) =>
      props.collapse &&
      `
    top: 20px;
    width: calc(100% - 40px);
    height: 48px;
    right: 20px;
    padding: 0 20px;
    box-shadow: 0 20px 20px rgb(103 128 155 / 20%);
  `};
  }

  & > div.nav-left {
    display: ${(props) => (props.collapse ? "flex" : "none")};
    align-items: center;
    gap: 20px;

    & > div:first-child {
      display: flex;
      align-items: center;
      gap: 10px;

      & > img {
        width: 30px;
        height: 30px;
        object-fit: cover;
      }

      & > a {
        margin: 0;
        font-size: 24px;
        color: blue;
        font-weight: bold;

        @media only screen and (max-width: 576px) {
          font-size: 16px;
        }
      }
    }

    & > div.nav-left-navigation {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 210px;
      & > a {
        font-size: 18px;
        color: #000;
        font-weight: 500;
        text-transform: uppercase;
      }

      .nav-left-active {
        color: blue;
      }
    }
  }
  & > div.nav-right {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 576px) {
      width: 100%;
    }

    & > div:first-child {
      display: flex;
      align-items: center;

      @media only screen and (max-width: 576px) {
        flex-direction: column;
        width: 100%;
        .ant-divider-horizontal {
          margin: 10px 0;
        }
      }

      & > div {
        display: flex;
        align-items: center;
        cursor: pointer;

        & > a {
          font-size: 16px;
          white-space: nowrap;
          color: #000;
          font-weight: 600;
          display: flex;
          gap: 10px;
          align-items: center;

          & > img {
            width: 25px;
            height: 25px;
          }
        }
        & > p {
          font-size: 16px;
          white-space: nowrap;
        }
      }
    }
    & > div:last-child {
      display: ${(props) => (props.collapse ? "flex" : "none")};
    }
  }

  & > div.nav-right-mobile {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 576px) {
      width: 100%;
    }

    & > div.nav-right-mobile-1 {
      display: flex;
      align-items: center;

      @media only screen and (max-width: 576px) {
        flex-direction: column;
        width: 100%;
        .ant-divider-horizontal {
          margin: 10px 0;
        }
      }

      & > div {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        & > a {
          color: #000;
          font-size: 16px;
          white-space: nowrap;
        }
        & > img {
          width: 25px;
          height: 25px;
        }
      }
    }
    & > div.nav-right-mobile-2 {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;

      & > div.nav-right-mobile-2-home {
        display: flex;
        align-items: center;
        gap: 5px;

        & > a {
          padding: 5px;
          & > img {
            width: 25px;
            height: 25px;
          }
        }

        & > div {
          padding: 10px;
        }
      }
    }
  }

  & > div.nav-right-mobile-2-fullScreen {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 9999999;

    & > p {
      padding: 15px 32px;
      text-align: right;
      border-bottom: 2px solid #f4f4f4;
      & > span {
        text-transform: uppercase;
        margin-left: 10px;
        font-weight: 500;
        font-size: 14px;
      }
    }
    & > a {
      padding: 15px 32px;
      text-align: left;
      border-bottom: 2px solid #f4f4f4;
      text-transform: uppercase;
      color: #465059;
      font-weight: 600;
      font-size: 16px;
      display: block;
    }

    & > div {
      border-bottom: 2px solid #f4f4f4;
      padding: 0px 32px;

      & > p {
        padding: 15px 0px;
        text-align: left;
        text-transform: uppercase;
        color: #465059;
        font-weight: 600;
        font-size: 16px;
        display: block;
      }
    }

    & > div.fullScreen-lang {
      & > div {
        padding-left: 30px;
        & > div {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          & > div {
            width: 24px;
            height: 24px;
            & > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          & > p {
            padding: 15px 32px;
            padding-left: 0;
            text-align: left;
            text-transform: uppercase;
            color: #465059;
            font-weight: 500;
            font-size: 14px;
            display: block;
          }
        }

        & > div:first-child {
          border-top: 2px solid #f4f4f4;
          border-bottom: 2px solid #f4f4f4;
        }
      }
    }

    & > div.fullScreen-product {
      & > div {
        padding-left: 30px;
        & > div {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          & > div {
            width: 24px;
            height: 24px;
            & > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            & > a {
              color: #000;
            }
          }

          & > a {
            padding: 15px 32px;
            padding-left: 0;
            text-align: left;
            color: #465059;
            font-weight: 500;
            font-size: 14px;
            display: block;
            /* white-space: nowrap; */
          }
        }

        & > div:not(last-child) {
          border-top: 2px solid #f4f4f4;
        }
      }
    }
  }
`;
