import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Box from "@mui/material/Box";
import { BrowserRouter } from "react-router-dom";
import RoutesController from "./pageRouter/RoutesController";
import backgroundImage from "/assets/rectLight.svg";

const landingImageStyle = {
  minWidth: "100%",
  height: "100vh",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function App() {
  return (
    <Box sx={{ height: "100vh", overflowY: "auto" }}>
      <BrowserRouter>
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100%" }} >
          <NavBar />
          <RoutesController />
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
