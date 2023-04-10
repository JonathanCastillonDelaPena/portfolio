import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import resume from "/pdf/resume.pdf";

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  paddingTop: 3,
};

const AboutMePage = () => {
  return (
    <Container sx={boxStyle}>
      <Grid container>
        <Grid item xs={12} mb={"20px"}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1, height: "1px", backgroundColor: "white" }} />

            <Typography variant="h2" component={"h1"} color={"white"}>
              About Me
            </Typography>

            <div style={{ flex: 1, height: "1px", backgroundColor: "white" }} />
          </div>
        </Grid>
        <Grid item xs={2}>
          <Card sx={{ borderRadius: "50%" }}>
            <CardMedia
              component="img"
              alt="Jonathan"
              image="/assets/avatar/jonathan.jpg"
            />
          </Card>
          <Stack direction={"row"} spacing={2} pt={1} justifyContent={"center"}>
            <a
              href="https://github.com/JonathanCastillonDelaPena"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon fontSize="large" sx={{ color: "white" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-dela-pe%C3%B1a"
              target="_blank"
              rel="noopener"
            >
              <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
            </a>
          </Stack>
        </Grid>
        <Grid item xs={10} p={4}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h3" component={"h2"} color={"white"}>
              Jonathan Dela Pe&ntilde;a
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{ marginLeft: "10px" }}
              onClick={() =>
                window.open(resume, "_blank", "noopener,noreferrer")
              }
            >
              resume
            </Button>
          </Box>
          <Typography variant="body1" component={"p"} color={"white"} pt={1}>
            I recently finished KodeGo's Full Stack Web Development Bootcamp and
            gained knowledge of several different technologies, I feel most at
            ease working with ReactJS, Bootstrap 5, Node JS, and MySQL.
            Additionally, I appreciate the importance of working as a team to
            achieve an agreed-upon objective.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMePage;
