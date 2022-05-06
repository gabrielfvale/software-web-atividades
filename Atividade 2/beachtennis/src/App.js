import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GameMode from "./pages/GameMode";

import { MatchProvider } from "./providers/MatchProvider";

import Router from "./router";

const theme = {
  primary: "#2A9D8F",
  secondary: "#ef476f",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <MatchProvider>
        <Router />
      </MatchProvider>
    </ThemeProvider>
  );
}

export default App;
