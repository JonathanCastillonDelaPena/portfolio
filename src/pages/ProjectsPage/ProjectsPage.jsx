import React from "react";
import ProjectsCarousel from "../../components/ProjectsCarousel/ProjectsCarousel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
  p: 1,
};

import projects from "../../components/ProjectsCarousel/projects";
import CarouselItem from "../../components/ProjectsCarousel/CarouselItem";

const ProjectsPage = () => {
  return (
    <Box sx={boxStyle}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={11} md={9}>
          <ProjectsCarousel />
          {/* <CarouselItem item={projects[1]}/>  */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectsPage;
