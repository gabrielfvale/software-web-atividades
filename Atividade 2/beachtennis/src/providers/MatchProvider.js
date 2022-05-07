import { createContext, useContext, useState } from "react";

const MatchContext = createContext();

const MatchProvider = ({ children }) => {
  const [route, setRoute] = useState(0);

  const [description, setDescription] = useState("");
  const [activeTeam, setActiveTeam] = useState("1");
  const [matchSets, setMatchSets] = useState("1");
  const [firstTeam, _setFirstTeam] = useState(["", ""]);
  const [secondTeam, _setSecondTeam] = useState(["", ""]);
  const [superTieBreak, setSuperTieBreak] = useState(false);

  const setFirstTeam = (first, second) => _setFirstTeam([first, second]);
  const setSecondTeam = (first, second) => _setSecondTeam([first, second]);

  const setGame = (activeTeam, matchSets, firstTeam, secondTeam, stb) => {
    setActiveTeam(activeTeam);
    setMatchSets(matchSets);
    setFirstTeam(firstTeam);
    setSecondTeam(secondTeam);
    setSuperTieBreak(stb);
  };

  const values = {
    route,
    description,
    activeTeam,
    matchSets,
    firstTeam,
    secondTeam,
    superTieBreak,

    setRoute,
    setDescription,
    setActiveTeam,
    setMatchSets,
    setFirstTeam,
    setSecondTeam,
    setSuperTieBreak,
    setGame,
  };

  return (
    <MatchContext.Provider value={values}>{children}</MatchContext.Provider>
  );
};

const useMatch = () => useContext(MatchContext);

export { MatchProvider, useMatch };
