import React, { useState, useEffect } from "react";
import "./App.less";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "containers/Home/Home";
import NotFound from "containers/NotFound/NotFound";
import Footer from "components/Layout/Footer/Footer";
// import Info from "containers/Info/Info";
import Hiring from "containers/Hiring/Hiring";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="info" element={<Info />} /> */}
        <Route path="hiring" element={<Hiring />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
