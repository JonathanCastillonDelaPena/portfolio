import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import React from "react";
import landingImage from "../assets/landingPage.jpg";
import Grid from "@mui/material/Grid";

const landingImageStyle = {
  // height: 300,
  // width: 300,
  // height: "100vh",
  // width: "100vw",
  // height: { sm: 480, lg: "100vh" },
  minWidth: "100%",
  minHeight: "100%",
  backgroundImage: `url(${landingImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "fixed",
};

const sloganStyle = {
  fontSize: { xs: 24, sm: 28, md: 32, lg: 36, xl: 42 },
};

const HomePage = () => {
  return (
    <Grid item xs={12}>
      <Box sx={landingImageStyle}>
        <Typography variant="h1" sx={sloganStyle}>
          Let's Become The "
          <Typography
            variant="h1"
            component="span"
            color="blue"
            sx={sloganStyle}
          >
            We
          </Typography>
          " In Your{" "}
          <Typography
            variant="h1"
            component="span"
            color="blue"
            sx={sloganStyle}
          >
            We
          </Typography>
          bsite
        </Typography>
      </Box>
    </Grid>
  );
};

export default HomePage;
