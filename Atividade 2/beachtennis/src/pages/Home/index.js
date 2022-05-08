import { useState } from "react";

import PageContainer from "components/PageContainer";
import InputGroup from "components/InputGroup";
import MainContainer from "components/MainContainer";
import Button from "components/Button";
import Checkbox from "components/Checkbox";
import MatchSets from "components/MatchSets";
import Input from "components/Input";

import { useMatch } from "providers/MatchProvider";

const Home = () => {
  const { setGame, setRoute } = useMatch();

  const [description, setDescription] = useState("");
  const [activeTeam, setActiveTeam] = useState("1");
  const [matchSets, setMatchSets] = useState("1");
  const [firstTeam, setFirstTeam] = useState(["", ""]);
  const [secondTeam, setSecondTeam] = useState(["", ""]);
  const [stb, setSTB] = useState(false);

  const onChangePlayer = (team, player, value) => {
    if (team === "1") {
      const newTeam = firstTeam;
      newTeam[player] = value;
      setFirstTeam([...newTeam]);
    } else {
      const newTeam = secondTeam;
      newTeam[player] = value;
      setSecondTeam([...newTeam]);
    }
  };

  const onSend = () => {
    let superTieBreak = stb;
    if (matchSets === "1") superTieBreak = false;
    setGame(
      description,
      activeTeam,
      matchSets,
      firstTeam,
      secondTeam,
      superTieBreak
    );
    setRoute(1);
  };

  return (
    <PageContainer>
      <MainContainer>
        <Input
          label="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputGroup
          label="Dupla 1"
          active={activeTeam === "1"}
          team={firstTeam}
          onChange={(player, value) => onChangePlayer("1", player, value)}
          onStarClick={() => setActiveTeam("1")}
        />
        <InputGroup
          label="Dupla 2"
          active={activeTeam === "2"}
          team={secondTeam}
          onChange={(player, value) => onChangePlayer("2", player, value)}
          onStarClick={() => setActiveTeam("2")}
        />
        <MatchSets activeSet={matchSets} onChangeMatchSets={setMatchSets} />
        {matchSets === "3" && (
          <Checkbox
            label="SuperTieBreak"
            checked={stb}
            onChange={(e) => setSTB(e.target.checked)}
          />
        )}

        <Button text="Iniciar" onClick={onSend} />
      </MainContainer>
    </PageContainer>
  );
};

export default Home;
