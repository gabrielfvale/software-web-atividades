import MainContainer from "components/MainContainer";

import {
  GameDetails,
  Row,
  PointBoxContainer,
  PointColumn,
  PointBox,
  ActiveStar,
} from "./styles";

const Scoreboard = ({ description, matchSets, teams, gameState }) => {
  const {
    gameActive,
    timer,
    activeTeam,
    team1_Points,
    team2_Points,
    team1_Won,
    team2_Won,
    sets,
  } = gameState;

  const parseTime = (seconds) =>
    new Date(seconds * 1000).toISOString().substr(11, 8);

  const points = [team1_Points, team2_Points];
  const pointMap = [0, 15, 30, 40, 60];
  const amountOfSets = Number(matchSets);
  const activeIndex = activeTeam === "1" ? 0 : 1;

  return (
    <MainContainer>
      <GameDetails>
        <span>{description}</span>
        <span>{parseTime(timer)}</span>
      </GameDetails>
      <GameDetails>
        <span>Games</span>
        <span>
          {team1_Won} / {team2_Won}
        </span>
      </GameDetails>

      {teams.map((team, index) => {
        const teamKey = index === 0 ? "team1" : "team2";
        return (
          <Row key={index}>
            <span>
              {team[0]}/{team[1]}
            </span>
            <PointBoxContainer>
              {activeIndex === index && <ActiveStar />}
              {sets.map((set, index) => (
                <PointColumn key={index} isSet>
                  <PointBox>{set[teamKey]}</PointBox>
                </PointColumn>
              ))}
              <PointColumn>
                <PointBox>{pointMap[points[index]]}</PointBox>
              </PointColumn>
            </PointBoxContainer>
          </Row>
        );
      })}
    </MainContainer>
  );
};

export default Scoreboard;
