import Home from "../pages/Home";
import GameMode from "../pages/GameMode";

import { useMatch } from "../providers/MatchProvider";
const Router = () => {
  const { getRoute } = useMatch();

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

  return routes[getRoute()].component;
};

export default Router;
