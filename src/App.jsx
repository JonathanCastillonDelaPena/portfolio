import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { BrowserRouter } from "react-router-dom";
import RoutesController from "./pageRouter/RoutesController";
import backgroundImage from "./assets/rectLight.svg";

const landingImageStyle = {
  minWidth: "100%",
  minHeight: "100%",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "fixed",
};

function App() {
  return (
    <BrowserRouter>
      <Box sx={landingImageStyle}>
        <Grid container>
          <NavBar />
          <RoutesController />
        </Grid>
      </Box>
    </BrowserRouter>
  );
}

export default App;
