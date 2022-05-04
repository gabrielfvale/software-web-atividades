import { StyledButton } from "./styles";
const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
