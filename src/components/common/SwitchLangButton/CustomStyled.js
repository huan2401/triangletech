import styled from "styled-components";

export const SwitchLangButtonWrapper = styled.div`
  .switch-lang {
    position: relative;
    &-preview {
      width: 36px;
      height: 36px;
      cursor: pointer;

      & > img {
        width: 100%;
        height: 100%;
      }
    }

    &-option {
      padding: 5px 10px;
      border-radius: 16px;
      background-color: #fff;
      position: absolute;
      left: -166%;
      /* width: 140px; */

      @media only screen and (max-width: 576px) {
        left: -318%;
      }
      &-en {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        & > p {
          margin: 0;
          white-space: nowrap;
        }
        & > div {
          width: 36px;
          height: 36px;

          & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      &-vi {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        & > p {
          margin: 0;
          white-space: nowrap;
        }
        & > div {
          width: 36px;
          height: 36px;

          & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`;
