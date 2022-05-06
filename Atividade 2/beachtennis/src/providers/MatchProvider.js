import { createContext, useContext, useState } from "react";

const MatchContext = createContext();

const MatchProvider = ({ children }) => {
  const [route, setRoute] = useState(0);

  const [activeTeam, setActiveTeam] = useState("1");
  const [matchSets, setMatchSets] = useState("1");
  const [firstTeam, _setFirstTeam] = useState(["", ""]);
  const [secondTeam, _setSecondTeam] = useState(["", ""]);
  const [STB, setSTB] = useState(false);

  const getRoute = () => route;
  const getActiveTeam = () => activeTeam;
  const getMatchSets = () => matchSets;
  const getFirstTeam = () => firstTeam;
  const getSecondTeam = () => secondTeam;
  const getSuperTieBreak = () => STB;

  const setFirstTeam = (first, second) => _setFirstTeam([first, second]);
  const setSecondTeam = (first, second) => _setSecondTeam([first, second]);
  const setSuperTieBreak = setSTB;

  const setGame = (activeTeam, matchSets, firstTeam, secondTeam, stb) => {
    setActiveTeam(activeTeam);
    setMatchSets(matchSets);
    setFirstTeam(firstTeam);
    setSecondTeam(secondTeam);
    setSTB(stb);
  };

  const values = {
    getRoute,
    setRoute,

    getActiveTeam,
    setActiveTeam,

    getMatchSets,
    setMatchSets,

    getFirstTeam,
    setFirstTeam,

    getSecondTeam,
    setSecondTeam,

    getSuperTieBreak,
    setSuperTieBreak,

    setGame,
  };

  return (
    <MatchContext.Provider value={values}>{children}</MatchContext.Provider>
  );
};

const useMatch = () => useContext(MatchContext);

export { MatchProvider, useMatch };
