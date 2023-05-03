import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Pizza from "./components/Pizza";
import Sandwich from "./components/Sandwich";
import ClubSandwich from "./components/ClubSandwich";
import Layout1 from "./screen/Layout1";
import { useEffect } from "react";
import Cart from "./components/Cart";
import AbautUs from "./components/AbautUs";

import "./App.css";
import { Box, Stack } from "@mui/system";

function App() {
 console.log("first")
  return (
    <div className="App">
      <Box sx={{ width: "100%", height: "100%" }}>
        <Stack sx={{ height: "100%", width: "100%" }}>
          <Router>
            <Routes onUpdate={() => window.scrollTo(0, 0)}>
              <Route path="/mr-row" element={<Layout1 />} />
              <Route path="/pizza" element={<Pizza />} />
              <Route path="/sandwich" element={<Sandwich />} />
              <Route path="/clubSandwich" element={<ClubSandwich />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/About" element={<AbautUs />} />
            </Routes>
            {/* <Stack
            //   sx={{
            //     height: "90px",
            //     width: "100%",
            //     bgcolor: "red",
            //     position: "fixed",
            //     bottom: "0",
            //     zIndex:"1"
            //   }}
            //   justifyContent="center"
            // >
            //   <Navbar className="" />
            // </Stack> */}
          </Router>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
