import { useEffect } from "react";

import ControlPanel from "components/ControlPanel";
import PageContainer from "components/PageContainer";
import Scoreboard from "components/Scoreboard";

import { useMatch } from "providers/MatchProvider";

const GameMode = () => {
  const { matchSets, superTieBreak, gameState } = useMatch();

  const parseTime = (seconds) =>
    new Date(seconds * 1000).toISOString().substr(11, 8);

  useEffect(() => console.log(gameState), []);

  return (
    <PageContainer>
      <ControlPanel matchSets={matchSets} superTieBreak={superTieBreak} />
      <span>{parseTime(gameState.timer)}</span>
      <Scoreboard />
    </PageContainer>
  );
};

export default GameMode;
