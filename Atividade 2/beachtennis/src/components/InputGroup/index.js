import { Container, InputContainer, StarButton } from "./styles";

import Input from "../Input";

const InputGroup = ({ label, team, active, onChange, onStarClick }) => {
  const [firstPlayer, secondPlayer] = team;

  return (
    <Container>
      <StarButton active={active} onClick={onStarClick} />
      <span>{label}</span>
      <InputContainer>
        <Input
          value={firstPlayer}
          onChange={(e) => onChange(0, e.target.value)}
        />
        <Input
          value={secondPlayer}
          onChange={(e) => onChange(1, e.target.value)}
        />
      </InputContainer>
    </Container>
  );
};

export default InputGroup;
