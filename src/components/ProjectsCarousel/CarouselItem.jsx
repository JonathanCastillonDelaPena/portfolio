import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import ProjectDetailsModal from "./ProjectDetailsModal";
import { Box } from "@mui/material";

const cardStyle = {
  padding: 1,
  borderRadius: 4,
  height: { xs: 250, sm: 390, md: 480 },
  // height: "100%",
  display: "flex",
  flexDirection: "column",
};

const CarouselItem = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Grid container>
          <Grid item xs={10}>
            <Typography variant="h5">{props.item.title}</Typography>
            <Typography variant="h6">{props.item.subtitle}</Typography>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Tooltip title={"Live Demo"} placement="left" arrow>
              <Fab
                size="small"
                onClick={() => window.open(props.item.link, "_blank", "noopener")}
              >
                <OpenInNewRoundedIcon />
              </Fab>
            </Tooltip>
          </Grid>
        </Grid>
      </CardContent>
      <Tooltip title={"Click for details"} followCursor sx={{ flexGrow: 1 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            alt="Project Preview"
            image={props.item.image}
            sx={{ height: "100%", borderRadius: 2 }}
          />
          {/* <img
            src={props.item.image}
            alt="Project Preview"
            style={{ height: "100%", borderRadius: 2 }}
          /> */}
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
