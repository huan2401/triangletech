import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  & > div.home-background {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100vh;
    top: 0;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  & > div.home-content {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100vh;
    /* overflow-y: auto; */

    .home-content-info-product {
      width: 100%;
      height: 1000px;
      background-color: #fff;
    }
  }
`;
