import React from "react";

import Carousel from "react-material-ui-carousel";

import projects from "./projects";
import CarouselItem from "./CarouselItem";

const ProjectsCarousel = () => {
  return (
    <Carousel fullHeightHover={false} sx={{ height: { xs: 280, sm: 420, md: 530 } }}>
        {projects.map((item, i) => (
          <CarouselItem key={i} item={item} />
        ))}
    </Carousel>
  );
};

export default ProjectsCarousel;
