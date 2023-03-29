import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMePage from "../pages/AboutMePage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectsPage from "../pages/ProjectsPage";

const RoutesController = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/about-me" element={<AboutMePage />} />
    </Routes>
  );
};

export default RoutesController;
