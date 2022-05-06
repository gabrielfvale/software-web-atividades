import { Container, InputContainer, StarButton } from "./styles";

import Input from "../Input";

const InputGroup = ({ label, team, active, onChange, onStarClick }) => {
  const [firstPlayer, secondPlayer] = team;

  return (
    <Container>
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
        <StarButton active={active} onClick={onStarClick} />
      </InputContainer>
    </Container>
  );
};

export default InputGroup;
