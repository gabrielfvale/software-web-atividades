import { createContext, useContext, useState } from "react";

const MatchContext = createContext();

const MatchProvider = ({ children }) => {
  const [activeTeam, setActiveTeam] = useState("1");
  const [matchSets, setMatchSets] = useState("1");

  const getActiveTeam = () => activeTeam;
  const getMatchSets = () => matchSets;

  const values = {
    getActiveTeam,
    setActiveTeam,
    getMatchSets,
    setMatchSets,
  };

  return (
    <MatchContext.Provider value={values}>{children}</MatchContext.Provider>
  );
};

const useMatch = () => useContext(MatchContext);

export { MatchProvider, useMatch };
