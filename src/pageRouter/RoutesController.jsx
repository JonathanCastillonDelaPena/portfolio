import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import AboutMePage from "../pages/AboutMePage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectsPage from "../pages/ProjectsPage";

const RoutesController = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about-me" element={<AboutMePage />} />
      </Route>
    </Routes>
  );
};

export default RoutesController;
