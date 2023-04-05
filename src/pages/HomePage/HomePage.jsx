import React from "react";
import Grid from "@mui/material/Grid";
import Slogan from "../../components/Slogan/Slogan";

const gridContainerStyle = {
  display: { xs: "flex-column", lg: "flex" },
  textAlign: { xs: "center", md: "left" },
};

const HomePage = () => {
  return (
    <Grid item xs={12}>
      <Grid container sx={gridContainerStyle}>
        <Grid item xs={12} lg={8}>
          <Slogan />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
