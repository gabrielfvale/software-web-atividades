import ControlPanel from "components/ControlPanel";
import PageContainer from "components/PageContainer";

import { useMatch } from "providers/MatchProvider";

const GameMode = () => {
  const { matchSets, superTieBreak } = useMatch();

  return (
    <PageContainer>
      <ControlPanel matchSets={matchSets} superTieBreak={superTieBreak} />
    </PageContainer>
  );
};

export default GameMode;
