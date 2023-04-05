import React from "react";

import Carousel from "react-material-ui-carousel";

import projects from "./projects";
import CarouselItem from "./CarouselItem";
import { Box, Typography } from "@mui/material";

const carouselStyle = {
  width: { xs: "70%" },
};

const ProjectsCarousel = () => {
  return (
    // <Carousel fullHeightHover={false} sx={carouselStyle}>
    //   {projects.map((item, i) => (
    //     <CarouselItem key={i} item={item} />
    //   ))}
    // </Carousel>
    <Carousel fullHeightHover={false}>
      {["Item 1", "Item 2", "Item 3"].map((item, i) => (
        <Box key={i}>
          <Typography variant="h1">
            {item}
          </Typography>
        </Box>
      ))

      }
    </Carousel>
  );
};

export default ProjectsCarousel;
