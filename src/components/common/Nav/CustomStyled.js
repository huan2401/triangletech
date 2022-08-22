import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 300px;
  height: 70px;
  background-color: #fff;
  border-radius: 50px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.collapse &&
    `
    position: fixed;
    z-index: 1000;
    top: 20px;
    width: 100%;
    right: 60px;
    width: calc(100% - 120px);
    box-shadow: 0 20px 20px rgb(103 128 155 / 20%);
  `};

  & > div.nav-left {
    display: ${(props) => (props.collapse ? "flex" : "none")};
    align-items: center;
    gap: 20px;

    & > a {
      margin: 0;
      font-size: 24px;
      color: #ff8a00;
      font-weight: bold;
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 210px;
      & > a {
        font-size: 18px;
        color: #000;
        font-weight: 500;
        &:hover {
          margin-bottom: 2px;
          color: blue;
        }
      }
    }
  }
  & > div.nav-right {
    display: flex;
    align-items: center;

    & > div:first-child {
      display: flex;
      align-items: center;

      & > div {
        display: flex;
        align-items: center;
        gap: 10px;
        & > img {
          width: 25px;
          height: 25px;
        }
      }
    }
    & > div:last-child {
      display: ${(props) => (props.collapse ? "flex" : "none")};
    }
  }
`;
