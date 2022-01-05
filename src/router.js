import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import TestPage from "./components/test_page/test_page";
import Result from "./components/result/result";
import QMbti from "./components/test_page/q_mbti";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/mbti" element={<QMbti />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
