import { createContext, useContext, useState, useEffect } from "react";

const MatchContext = createContext();

const MatchProvider = ({ children }) => {
  const [route, setRoute] = useState(0);

  const [description, setDescription] = useState("");
  const [activeTeam, setActiveTeam] = useState("1");
  const [matchSets, setMatchSets] = useState("1");
  const [firstTeam, _setFirstTeam] = useState(["", ""]);
  const [secondTeam, _setSecondTeam] = useState(["", ""]);
  const [superTieBreak, setSuperTieBreak] = useState(false);

  const initialGameState = {
    gameStarted: false,
    timer: 0,
    activeTeam: 0,
    team1: 0,
    team2: 0,
    games: [{ team1: 0, team2: 0 }],
    sets: [{ team1: 0, team2: 0 }],
  };

  const [gameState, setGameState] = useState(initialGameState);
  const [prevGameState, setPrevGameState] = useState(initialGameState);

  const setFirstTeam = (first, second) => _setFirstTeam([first, second]);
  const setSecondTeam = (first, second) => _setSecondTeam([first, second]);

  const setGame = (activeTeam, matchSets, firstTeam, secondTeam, stb) => {
    setActiveTeam(activeTeam);
    setMatchSets(matchSets);
    setFirstTeam(firstTeam);
    setSecondTeam(secondTeam);
    setSuperTieBreak(stb);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameState.gameStarted) {
        setGameState((prev) => ({
          ...prev,
          timer: prev.timer + 1,
        }));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const undoChange = () => setGameState(prevGameState);

  const resetGame = () => {
    setGameState(initialGameState);
    setPrevGameState(initialGameState);
  };

  const addPoint = (team) => {};

  const values = {
    route,
    description,
    activeTeam,
    matchSets,
    firstTeam,
    secondTeam,
    superTieBreak,

    gameState,

    setRoute,
    setDescription,
    setActiveTeam,
    setMatchSets,
    setFirstTeam,
    setSecondTeam,
    setSuperTieBreak,
    setGame,

    undoChange,
    resetGame,
  };

  return (
    <MatchContext.Provider value={values}>{children}</MatchContext.Provider>
  );
};

const useMatch = () => useContext(MatchContext);

export { MatchProvider, useMatch };
