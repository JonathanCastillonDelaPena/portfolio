import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import CardActionArea from "@mui/material/CardActionArea";
import Tooltip from "@mui/material/Tooltip";
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import Carousel from "react-material-ui-carousel";

import projects from "./projects";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Item = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cardStyle = {
    padding: 1,
  };

  return (
    <Card sx={cardStyle}>
      <Grid container>
        <Grid item md={10}>
          <Typography variant="h5">{props.item.title}</Typography>
          <Typography variant="h6">{props.item.subtitle}</Typography>
        </Grid>
        <Grid item md={2}>
          <Box
            sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
          >
            <Tooltip title={"Live Demo"} placement="left" arrow>
              <Fab size="small">
                <OpenInNewRoundedIcon />
              </Fab>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
      <Tooltip title={"Click for details"} followCursor >
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            alt="Project Preview"
            image={props.item.image}
          />
        </CardActionArea>
      </Tooltip>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {props.item.title}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {props.item.description}
            </Typography>
          </Box>
        </Fade>
      </Modal>

    </Card>
  );
};

const carouselStyle = {
  width: { xs: 480 },
};

const ProjectsCarousel = () => {
  return (
    <Carousel fullHeightHover={false} sx={carouselStyle}>
      {projects.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default ProjectsCarousel;
