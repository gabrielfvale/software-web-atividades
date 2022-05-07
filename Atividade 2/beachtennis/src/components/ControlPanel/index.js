import MainContainer from "../MainContainer";
import PanelButton from "../PanelButton";
import { FaPlus, FaRedo, FaArrowLeft } from "react-icons/fa";
import { External, ButtonContainer, TextContainer } from "./styles";
const ControlPanel = ({ matchSets, superTieBreak }) => {
  const controlButtons = [
    {
      icon: FaPlus,
      onClick: () => {},
    },
    {
      icon: FaPlus,
      onClick: () => {},
    },
    {
      icon: FaArrowLeft,
      onClick: () => {},
    },
    {
      icon: FaRedo,
      onClick: () => {},
    },
  ];

  return (
    <MainContainer>
      <External>
        <ButtonContainer>
          {controlButtons.map((button) => (
            <PanelButton {...button} />
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
