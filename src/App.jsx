import React, { useState, useEffect } from "react";
import "./App.less";
import { useSelector, useDispatch } from "react-redux";
import { checkLogin } from "slices/authSlice";
import AuthLayout from "components/Layout/AuthLayout/AuthLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "containers/Home/Home";
import NotFound from "containers/NotFound/NotFound";
import Footer from "components/Layout/Footer/Footer";
import Blog from "containers/Blog/Blog";
import Hiring from "containers/Hiring/Hiring";

function App() {
  const dispatch = useDispatch();
  // const isLogin = useSelector((state) => state.auth.login);
  // console.log("isLogin", isLogin);
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     dispatch(checkLogin(true));
  //   }
  // }, [isLogin]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            // <AuthLayout isAllowed={isLogin}>
            <Home />
            // </AuthLayout>
          }
        />
        <Route path="blog" element={<Blog />} />
        <Route path="hiring" element={<Hiring />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
