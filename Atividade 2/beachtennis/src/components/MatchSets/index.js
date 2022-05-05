import { MatchSetsContainer, SetButtonContainer, SetButton } from "./styles";

const MatchSets = ({ activeSet, onChangeMatchSets }) => {
  return (
    <MatchSetsContainer>
      <span>Quantidade de Sets</span>
      <SetButtonContainer>
        <SetButton
          active={activeSet === "1"}
          onClick={() => onChangeMatchSets("1")}
        >
          1
        </SetButton>
        <SetButton
          active={activeSet === "3"}
          onClick={() => onChangeMatchSets("3")}
        >
          3
        </SetButton>
      </SetButtonContainer>
    </MatchSetsContainer>
  );
};

export default MatchSets;
