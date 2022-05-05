import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GameMode from "./pages/GameMode";

import { MatchProvider } from "./providers/MatchProvider";

const theme = {
  primary: "#2A9D8F",
  secondary: "#ef476f",
};

function App() {
  const [route, setRoute] = useState(0);

  const routes = [
    {
      name: "Home",
      component: <Home />,
    },
    {
      name: "GameMode",
      component: <GameMode />,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <MatchProvider>{routes[route].component}</MatchProvider>
    </ThemeProvider>
  );
}

export default App;
