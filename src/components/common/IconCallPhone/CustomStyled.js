import styled from "styled-components";

export const IconCallPhoneWrapper = styled.div`
  position: fixed;
  top: 186px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;

  @media screen and (max-width: 576px) {
    top: 128px;
  }

  /* & > a:last-child {
    display: flex;
    gap: 10px;
    position: relative;
    & > div:last-child {
      display: block;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      width: 60px;
      height: 60px;
      padding: 5px;
      border-radius: 50%;
      background-color: #fff;
      box-sizing: border-box;

      position: relative;
      z-index: 2;
      &:hover {
        transform: scale(1.2);
      }
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    & > div:first-child {
      width: fit-content;
      height: 60px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      border-radius: 12px;

      position: absolute;
      z-index: 1;
      top: 0;
      right: 70px;

      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

      & > p {
        color: #000;
        font-size: 26px;
        font-weight: bold;
      }
    }
  }

  & > a:first-child {
    display: block;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    width: 60px;
    height: 60px;
    padding: 5px;
    border-radius: 50%;
    background-color: #fff;
    box-sizing: border-box;
    &:hover {
      transform: scale(1.2);
    }
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  } */

  .phone-call {
    width: 50px;
    height: 50px;
    top: 260px;
    right: 20px;
    background: #10b418;
    position: fixed;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    border-radius: 50%;
    z-index: 99;
    display: inline-block;
    line-height: 65px;
    animation: shake 1.5s ease-out infinite;
  }

  .phone-call:before {
    position: absolute;
    content: " ";
    z-index: -1;
    top: -15px;
    left: -15px;
    background-color: #10b418;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
    opacity: 0.6;
    -webkit-animation: pulse 1s ease-out;
    animation: pulse 1.8s ease-out;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .phone-call > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  .zalo-call {
    width: 50px;
    height: 50px;
    top: 186px;
    right: 20px;
    background: blue;
    position: fixed;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    border-radius: 50%;
    z-index: 99;
    display: inline-block;
    line-height: 65px;
    animation: shake 1.5s ease-out infinite;
  }

  .zalo-call:before {
    position: absolute;
    content: " ";
    z-index: -1;
    top: -15px;
    left: -15px;
    background-color: blue;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
    opacity: 0.6;
    -webkit-animation: pulse 1s ease-out;
    animation: pulse 1.8s ease-out;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .zalo-call > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    /* animation: shake 1.5s ease-out infinite; */
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(0);
      opacity: 0;
    }
    25% {
      -webkit-transform: scale(0.3);
      opacity: 1;
    }
    50% {
      -webkit-transform: scale(0.6);
      opacity: 0.6;
    }
    75% {
      -webkit-transform: scale(0.9);
      opacity: 0.3;
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    25% {
      transform: scale(0.3);
      opacity: 1;
    }
    50% {
      transform: scale(0.6);
      opacity: 0.6;
    }
    75% {
      transform: scale(0.9);
      opacity: 0.3;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;
