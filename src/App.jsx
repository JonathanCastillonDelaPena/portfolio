import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function App() {
  return (
    <Grid container>
      <NavBar />
      {/* <Box bgcolor={"red"} width={"100%"} height={20} /> */}
      <Outlet />
    </Grid>
  );
}

export default App;
