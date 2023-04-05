import React from "react";
import Avatar from "@mui/material/Avatar";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "70%", sm: "60%", md: "40%", lg: "35%" },
  maxHeight: { xs: "95vh" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 3,
  boxShadow: 24,
  p: 1,
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
};

const ProjectDetailsModal = (props) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.modalState.open}
      onClose={props.modalState.handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={props.modalState.open}>
        <Box sx={boxStyle}>
          <Typography id="transition-modal-title" variant="h4" component="h2">
            {props.item.title}
          </Typography>
          <Typography id="transition-modal-subtitle" variant="h5">
            {props.item.subtitle}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {props.item.description}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Technologies Used
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {props.item.techStack.map((tech) => (
              <Tooltip
                key={tech.name}
                title={tech.name}
                placement="bottom"
                arrow
              >
                <Avatar alt={tech.name} src={tech.image} sx={{ marginX: 1 }} />
              </Tooltip>
            ))}
          </Box>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Team Members
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {props.item.team.map((member) => (
              <Tooltip
                key={member.name}
                title={member.name}
                placement="bottom"
                arrow
              >
                <Fab
                  size="medium"
                  onClick={() => window.open(member.link, "_blank")}
                  sx={{ margin: 1 }}
                >
                  <Avatar
                    alt={member.name}
                    src={member.image}
                  />
                </Fab>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ProjectDetailsModal;
