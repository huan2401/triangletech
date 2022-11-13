import React from "react";
import "./App.less";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "containers/Home/Home";
import NotFound from "containers/NotFound/NotFound";
import Hiring from "containers/Hiring/Hiring";
import Blog from "containers/Blog/Blog";
import BlogDetail from "containers/BlogDetail/BlogDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="blog" element={<Blog />}>
          <Route path=":id" element={<BlogDetail />} />
        </Route> */}
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="hiring" element={<Hiring />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
