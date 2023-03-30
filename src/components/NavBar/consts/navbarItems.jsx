import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

const navbarItems = [
  { id: 0, icon: <HomeRoundedIcon />, label: "Home", route: "home" },
  { id: 1, icon: <WorkRoundedIcon />, label: "Projects", route: "projects" },
  { id: 2, icon: <InfoRoundedIcon />, label: "About Me", route: "about-me" },
];

export default navbarItems;