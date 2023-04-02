import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";
import ProjectsCarousel from "../../components/ProjectsCarousel/ProjectsCarousel";

const boxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
};

const ProjectsPage = () => {
  return (
    <Grid item xs={12}>
      <Box sx={boxStyle}>
        <ProjectsCarousel />
      </Box>
    </Grid>
  );
};

export default ProjectsPage;
