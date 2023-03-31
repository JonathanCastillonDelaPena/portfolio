import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

const gridItemStyle = {
  display: { lg: "flex-column" },
  paddingLeft: { sm: 3 },
};

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Slogan = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={gridItemStyle}>
        <Grow in style={{ transformOrigin: '0 0 0' }} timeout={1000}>
          <Grid item>
            <Typography variant="h1" color="white">
              Let's Become The
            </Typography>
          </Grid>
        </Grow>
        <Grow in timeout={2000}>
          <Grid item>
            <Typography variant="h1" color="#1976D1">
              We
            </Typography>
          </Grid>
        </Grow>
        <Grow in timeout={3000}>
          <Grid item>
            <Typography variant="h1" color="white">
              In Your
            </Typography>
          </Grid>
        </Grow>
        <Grow in timeout={4000}>
          <Grid item>
            <Typography variant="h1" color="#1976D1">
              We
              <Typography variant="h1" component={"span"} color="white">
                bsite
              </Typography>
            </Typography>
          </Grid>
        </Grow>
      </Box>
    </ThemeProvider>
  );
};

export default Slogan;
