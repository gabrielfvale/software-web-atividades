import MainContainer from "../MainContainer";
import PanelButton from "../PanelButton";
import { External, ButtonContainer, TextContainer } from "./styles";
const ControlPanel = ({ controlButtons, matchSets, superTieBreak }) => {
  return (
    <MainContainer>
      <External>
        <ButtonContainer>
          {controlButtons.map((button, index) => (
            <PanelButton key={index} {...button} />
          ))}
        </ButtonContainer>
        <TextContainer>
          <span>Quantidade de sets: {matchSets}</span>
          <span>SUPERTIEBREAK: {superTieBreak ? "SIM" : "NÃO"}</span>
        </TextContainer>
      </External>
    </MainContainer>
  );
};

export default ControlPanel;
