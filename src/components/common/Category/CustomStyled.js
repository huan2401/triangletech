import styled from "styled-components";

export const CategoryWrapper = styled.div`
  max-width: 100%;
  .category {
    width: 100%;

    & > ul {
      list-style: none;

      display: flex;
      gap: 10px;

      position: relative;

      width: 100%;
      padding: 0;
      margin: 0;
      overflow-y: auto;
      /* flex-wrap: wrap; */

      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;

      ::-webkit-scrollbar {
        width: 0 !important;
        display: none;
      }

      & > li {
        padding: 5px 10px;
        margin: 0;
        cursor: pointer;
        border-radius: 20px;
        transition: 0.2 linear;

        &.active {
          background-color: #6097f0;
          color: #fff;
        }

        & > span {
          font-size: 16px;
        }
      }
    }
  }
`;
