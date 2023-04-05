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
};

const ProjectsPage = () => {
  return (
    <Box sx={boxStyle}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={11} md={9}>
          <ProjectsCarousel />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectsPage;
