import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";

const boxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
};

const AboutMePage = () => {
  return (
    <Grid item xs={12}>
      <Box sx={boxStyle}>
        <UnderConstruction />
      </Box>
    </Grid>
  );
};

export default AboutMePage;
