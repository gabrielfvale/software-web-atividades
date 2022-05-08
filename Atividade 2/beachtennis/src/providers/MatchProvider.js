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
    gameActive: false,
    timer: 0,
    activeTeam,
    team1_Points: 0,
    team2_Points: 0,
    team1_Won: 0,
    team2_Won: 0,
    sets: [],
  };

  const [gameState, setGameState] = useState(initialGameState);
  const [prevGameState, setPrevGameState] = useState(initialGameState);

  const setFirstTeam = (team) => _setFirstTeam([...team]);
  const setSecondTeam = (team) => _setSecondTeam([...team]);

  const setGame = (
    description,
    activeTeam,
    matchSets,
    firstTeam,
    secondTeam,
    stb
  ) => {
    setDescription(description);
    setActiveTeam(activeTeam);
    setMatchSets(matchSets);
    setFirstTeam(firstTeam);
    setSecondTeam(secondTeam);
    setSuperTieBreak(stb);
  };

  useEffect(() => {
    const interval = gameState.gameActive
      ? setInterval(() => {
          setGameState((prev) => ({
            ...prev,
            timer: prev.timer + 1,
          }));
        }, 1000)
      : null;
    return () => clearInterval(interval);
  }, [gameState.gameActive]);

  const undoChange = () => setGameState(prevGameState);

  const resetGame = () => {
    setGameState({ ...initialGameState });
    setPrevGameState({ ...initialGameState });
  };

  // In production apps, it's better to use lodash
  const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

  const addPoint = (team) => {
    console.log("add point called");

    if (
      (matchSets === "1" && gameState.sets.length === 1) ||
      (matchSets === "3" && gameState.sets.length === 3)
    ) {
      console.log("Game already won");
      return;
    }

    // Get team and adversary team keys
    const teamKey = team === 0 ? "team1" : "team2";
    const advTeamKey = teamKey === "team1" ? "team2" : "team1";

    // Set previous game state
    setPrevGameState({ ...gameState });
    const newGameState = deepCopy(gameState);

    // Start game if not started
    if (!newGameState.gameActive) newGameState.gameActive = true;

    // Get games won
    const teamGamesWon = teamKey + "_Won";
    const advTeamGamesWon = advTeamKey + "_Won";

    const teamPoints = teamKey + "_Points";
    const advTeamPoints = advTeamKey + "_Points";

    const toogleActiveTeam = () =>
      (newGameState.activeTeam = newGameState.activeTeam === "1" ? "2" : "1");

    const addSet = () => {
      newGameState.sets.push({
        team1: newGameState.team1_Won,
        team2: newGameState.team2_Won,
      });
      newGameState[teamGamesWon] = 0;
      newGameState[advTeamGamesWon] = 0;
      console.log({ sets: newGameState.sets });
    };

    const isInTieBreak =
      newGameState[teamGamesWon] === 6 && newGameState[advTeamGamesWon] === 6;
    const isInSuperTieBreak = superTieBreak && newGameState.sets.length === 2;

    if (!(isInTieBreak || isInSuperTieBreak)) {
      // Normal game logic
      // If team points is less than 3 (40), add point.
      // Otherwise, win game.
      if (newGameState[teamPoints] < 3) {
        newGameState[teamPoints] += 1;
      } else {
        // Increment won games and toggle active team
        newGameState[teamGamesWon] += 1;
        toogleActiveTeam();
        // Reset points
        newGameState[teamPoints] = 0;
        newGameState[advTeamPoints] = 0;
        // Check if won a set
        if (
          newGameState[teamGamesWon] >= 6 && // won at least 6 games
          newGameState[teamGamesWon] - newGameState[advTeamGamesWon] >= 2 // games diff at least 2
        ) {
          addSet();
        }
      }
    } else {
      // Tiebreak game logic
      // Tiebreak: 7 points, STB: 10 points
      const maxPoints = isInTieBreak ? 7 : 10;
      newGameState[teamPoints] += 1;
      // Check if won tiebreak
      if (
        newGameState[teamPoints] >= maxPoints &&
        newGameState[teamPoints] - newGameState[advTeamPoints] >= 2
      ) {
        // Increment won games and toggle active team
        newGameState[teamGamesWon] += 1;
        toogleActiveTeam();
        // If in supertiebreak, add points to set instead of games won
        if (isInSuperTieBreak) {
          newGameState[teamGamesWon] = newGameState[teamPoints];
          newGameState[advTeamGamesWon] = newGameState[advTeamPoints];
        }
        // Add set and reset points
        addSet();
        newGameState[teamPoints] = 0;
        newGameState[advTeamPoints] = 0;
      }
    }

    if (
      (matchSets === "1" && newGameState.sets.length === 1) ||
      (matchSets === "3" && newGameState.sets.length === 3)
    ) {
      console.log("Game won");
      newGameState.gameActive = false;
    }

    setGameState(deepCopy(newGameState));
  };

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
    addPoint,
  };

  return (
    <MatchContext.Provider value={values}>{children}</MatchContext.Provider>
  );
};

const useMatch = () => useContext(MatchContext);

export { MatchProvider, useMatch };
