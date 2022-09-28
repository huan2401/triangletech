import styled from "styled-components";

export const IconCallPhoneWrapper = styled.div`
  position: fixed;
  top: 186px;
  right: 10px;
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 10px; */
  z-index: 9999;

  @media screen and (max-width: 576px) {
    top: 128px;
  }

  & > a {
    display: flex;
    gap: 10px;
    position: relative;
    & > div:last-child {
      display: block;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      width: 40px;
      height: 40px;
      padding: 5px;
      border-radius: 50%;
      background-color: #fff;
      box-sizing: border-box;

      position: relative;
      z-index: 2;
      /* &:hover {
        transform: scale(1.2);
      } */
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    & > div:first-child {
      width: 100%;
      height: 40px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      border-radius: 12px;

      position: absolute;
      z-index: 1;
      top: 0;
      right: 46px;
      width: 120px;

      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

      & > p {
        color: #000;
      }
    }
  }

  & > a {
    /* display: block;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 50%;
    background-color: #fff;
    box-sizing: border-box; */
    /* &:hover {
      transform: scale(1.2);
    } */
    /* & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    } */
  }
`;
