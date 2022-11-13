import styled from "styled-components";

export const CategoryWrapper = styled.div`
  .category {
    & > ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      gap: 10px;
      flex-wrap: wrap;

      & > li {
        padding: 5px 10px;
        margin: 0;
        cursor: pointer;
        border-radius: 20px;
        transition: all 0.2 ease-in-out;

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
