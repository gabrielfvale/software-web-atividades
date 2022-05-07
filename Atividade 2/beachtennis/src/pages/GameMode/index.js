import { FaPlus, FaRedo, FaArrowLeft } from "react-icons/fa";

import ControlPanel from "components/ControlPanel";
import PageContainer from "components/PageContainer";
import Scoreboard from "components/Scoreboard";

import { useMatch } from "providers/MatchProvider";

const GameMode = () => {
  const {
    matchSets,
    superTieBreak,
    gameState,
    addPoint,
    undoChange,
    resetGame,
  } = useMatch();

  const parseTime = (seconds) =>
    new Date(seconds * 1000).toISOString().substr(11, 8);

  const pointMap = [0, 15, 30, 40, 60];

  const controlButtons = [
    {
      icon: FaPlus,
      onClick: () => addPoint(0),
    },
    {
      icon: FaPlus,
      onClick: () => addPoint(1),
    },
    {
      icon: FaArrowLeft,
      onClick: undoChange,
    },
    {
      icon: FaRedo,
      onClick: resetGame,
    },
  ];

  return (
    <PageContainer>
      <ControlPanel
        controlButtons={controlButtons}
        matchSets={matchSets}
        superTieBreak={superTieBreak}
      />
      <span>{parseTime(gameState.timer)}</span>
      <Scoreboard />
      <p>{gameState.team1_Points}</p>
      <p>{gameState.team2_Points}</p>
      <p>Team 1 won: {gameState.team1_Won}</p>
      <p>Team 2 won: {gameState.team2_Won}</p>
      <p>Active Team: {gameState.activeTeam}</p>
      <p>Total sets: {gameState.sets.length}</p>
    </PageContainer>
  );
};

export default GameMode;
