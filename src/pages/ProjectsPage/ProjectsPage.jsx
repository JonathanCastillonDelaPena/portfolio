import React from "react";
import Grid from "@mui/material/Grid";
import ProjectsCarousel from "../../components/ProjectsCarousel/ProjectsCarousel";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // minHeight: "90vh",
};

const ProjectsPage = () => {
  return (
    <Grid item xs={12} sx={style}>
        <ProjectsCarousel />
    </Grid>
  );
};

export default ProjectsPage;
