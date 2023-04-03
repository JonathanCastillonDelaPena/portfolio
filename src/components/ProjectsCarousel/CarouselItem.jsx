import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import ProjectDetailsModal from "./ProjectDetailsModal";

const cardStyle = {
  padding: 1,
  borderRadius: 4,
};

const CarouselItem = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={cardStyle}>
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="h5">{props.item.title}</Typography>
          <Typography variant="h6">{props.item.subtitle}</Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Tooltip title={"Live Demo"} placement="left" arrow>
            <Fab size="small" onClick={() => window.open(props.item.link, "_blank")}>
              <OpenInNewRoundedIcon />
            </Fab>
          </Tooltip>
        </Grid>
      </Grid>
      <Tooltip title={"Click for details"} followCursor>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            alt="Project Preview"
            image={props.item.image}
            sx={{ borderRadius: 2 }}
          />
        </CardActionArea>
      </Tooltip>
      <ProjectDetailsModal
        modalState={{ open, handleClose }}
        item={props.item}
      />
    </Card>
  );
};

export default CarouselItem;
