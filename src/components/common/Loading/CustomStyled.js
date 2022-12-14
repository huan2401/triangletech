import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: absolute;
  width: 100%;

  .loading {
    max-width: 100%;
    line-height: 1.4;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    display: flex;
    /* align-items: flex-start;
    justify-content: flex-start; */
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }

  .loading__anim {
    width: 60px;
    height: 60px;
    border: 5px solid rgba(189, 189, 189, 0.25);
    border-left-color: rgba(3, 155, 229, 1);
    border-top-color: rgba(3, 155, 229, 1);
    border-radius: 50%;
    display: inline-block;
    animation: rotate 600ms infinite linear;
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;
