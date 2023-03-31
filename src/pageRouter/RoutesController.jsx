import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMePage from "../pages/AboutMePage/AboutMePage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";

const RoutesController = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/about-me" element={<AboutMePage />} />
    </Routes>
  );
};

export default RoutesController;
