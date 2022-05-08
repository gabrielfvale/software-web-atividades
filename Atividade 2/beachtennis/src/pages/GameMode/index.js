import { FaRedo, FaArrowLeft } from "react-icons/fa";

import ControlPanel from "components/ControlPanel";
import PageContainer from "components/PageContainer";
import Scoreboard from "components/Scoreboard";
import Spacer from "components/Spacer";

import { useMatch } from "providers/MatchProvider";

const GameMode = () => {
  const {
    matchSets,
    superTieBreak,
    gameState,
    addPoint,
    undoChange,
    resetGame,

    description,
    firstTeam,
    secondTeam,
  } = useMatch();

  const TextIcon = ({ text }) => (
    <span style={{ fontWeight: "bold" }}>{text}</span>
  );

  const controlButtons = [
    {
      icon: () => <TextIcon text="1+" />,
      onClick: () => addPoint(0),
    },
    {
      icon: () => <TextIcon text="2+" />,
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
      <Spacer />
      <Scoreboard
        description={description}
        matchSets={matchSets}
        teams={[firstTeam, secondTeam]}
        gameState={gameState}
      />
    </PageContainer>
  );
};

export default GameMode;
