import { StyledButton } from "./styles";

const PanelButton = (props) => {
  return (
    <StyledButton {...props}>
      <props.icon />
    </StyledButton>
  );
};

export default PanelButton;
