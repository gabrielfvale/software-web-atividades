import { FaRedo, FaArrowLeft } from "react-icons/fa";

import ControlPanel from "components/ControlPanel";
import PageContainer from "components/PageContainer";
import Scoreboard from "components/Scoreboard";
import Spacer from "components/Spacer";

import { useMatch } from "providers/MatchProvider";
import FlashingText from "components/FlashingText";

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

  const onSuperTieBreak = superTieBreak && gameState.sets.length === 2;

  const gameWon = Number(matchSets) === gameState.sets.length;

  const onTieBreak = gameState.team1_Won === 6 && gameState.team2_Won === 6;

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
      {onTieBreak && <FlashingText>TIEBREAK</FlashingText>}
      {onSuperTieBreak && <FlashingText>SUPERTIEBREAK</FlashingText>}
      {gameWon && <FlashingText>VENCEU!!</FlashingText>}
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
