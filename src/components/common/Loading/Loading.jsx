import React from "react";
import { LoadingWrapper } from "./CustomStyled";

const Loading = () => {
  return (
    <LoadingWrapper>
      <section className="loading">
        <span className="loading__anim"></span>
      </section>
    </LoadingWrapper>
  );
};

export default Loading;
