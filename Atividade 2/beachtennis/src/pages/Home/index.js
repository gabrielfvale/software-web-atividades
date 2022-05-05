import PageContainer from "../../components/PageContainer";
import InputGroup from "../../components/InputGroup";
import MainContainer from "../../components/MainContainer";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import MatchSets from "../../components/MatchSets";

import { useMatch } from "../../providers/MatchProvider";

const Home = () => {
  const { getActiveTeam, setActiveTeam, getMatchSets, setMatchSets } =
    useMatch();

  return (
    <PageContainer>
      <MainContainer>
        <InputGroup
          label="Dupla 1"
          active={getActiveTeam() === "1"}
          onStarClick={() => setActiveTeam("1")}
        />
        <InputGroup
          label="Dupla 2"
          active={getActiveTeam() === "2"}
          onStarClick={() => setActiveTeam("2")}
        />
        <MatchSets
          activeSet={getMatchSets()}
          onChangeMatchSets={setMatchSets}
        />
        <Checkbox label="SuperTieBreak" />

        <Button text="Iniciar" onClick={() => alert("laura linda princesa")} />
      </MainContainer>
    </PageContainer>
  );
};

export default Home;
