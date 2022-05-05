import PageContainer from "../../components/PageContainer";
import InputGroup from "../../components/InputGroup";
import MainContainer from "../../components/MainContainer";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import Checkbox from "../../components/Checkbox";
import MatchSets from "../../components/MatchSets";

const Home = () => {
  const [activeTeam, setActiveTeam] = useState("1");
  const [matchSets, setMatchSets] = useState("1");

  useEffect(() => {
    console.log(activeTeam);
  }, [activeTeam]);

  return (
    <PageContainer>
      <MainContainer>
        <InputGroup
          label="Dupla 1"
          active={activeTeam === "1"}
          onStarClick={() => setActiveTeam("1")}
        />
        <InputGroup
          label="Dupla 2"
          active={activeTeam === "2"}
          onStarClick={() => setActiveTeam("2")}
        />
        <MatchSets activeSet={matchSets} onChangeMatchSets={setMatchSets} />
        <Checkbox label="SuperTieBreak" />

        <Button text="Iniciar" onClick={() => alert("laura linda princesa")} />
      </MainContainer>
    </PageContainer>
  );
};

export default Home;
