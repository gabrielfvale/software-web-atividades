import ControlPanel from "components/ControlPanel";
import PageContainer from "components/PageContainer";

import { useMatch } from "providers/MatchProvider";

const GameMode = () => {
  const { getMatchSets, getSuperTieBreak } = useMatch();

  return (
    <PageContainer>
      <ControlPanel
        matchSets={getMatchSets()}
        superTieBreak={getSuperTieBreak()}
      />
    </PageContainer>
  );
};

export default GameMode;
