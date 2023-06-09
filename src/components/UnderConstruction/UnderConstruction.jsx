import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Zoom from "@mui/material/Zoom";

const paperStyle = {
  backgroundColor: "transparent",
  width: { xs: 300, sm: 480 },
  height: { xs: 270, sm: 450 },
};

const UnderConstruction = () => {
  return (
    <Zoom in>
      <Card elevation={24} sx={paperStyle}>
        <CardMedia
          component="img"
          alt="Under Construction"
          image={"/assets/underConstruction.svg"}
        />
      </Card>
    </Zoom>
  );
};

export default UnderConstruction;
