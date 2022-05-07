import { useEffect, useState } from "react";

import ControlPanel from "components/ControlPanel";
import PageContainer from "components/PageContainer";
import Scoreboard from "components/Scoreboard";

import { useMatch } from "providers/MatchProvider";

const GameMode = () => {
  const { matchSets, superTieBreak } = useMatch();

  const [gameTime, setGameTime] = useState(0);

  const parseTime = (seconds) =>
    new Date(seconds * 1000).toISOString().substr(11, 8);

  useEffect(() => {
    const interval = setInterval(() => setGameTime((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageContainer>
      <ControlPanel matchSets={matchSets} superTieBreak={superTieBreak} />
      <span>{parseTime(gameTime)}</span>
      <Scoreboard />
    </PageContainer>
  );
};

export default GameMode;
