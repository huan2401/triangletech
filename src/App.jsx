import React from "react";
import "./App.less";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "containers/Home/Home";
import NotFound from "containers/NotFound/NotFound";
import Footer from "components/Layout/Footer/Footer";
import Hiring from "containers/Hiring/Hiring";
import BLog from "containers/Blog/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<BLog />} />
        <Route path="hiring" element={<Hiring />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
