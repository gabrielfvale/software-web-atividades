import { Container, InputContainer, StarButton } from "./styles";

import Input from "../Input";

const InputGroup = ({ label, active, onStarClick }) => {
  return (
    <Container>
      <span>{label}</span>
      <InputContainer>
        <Input />
        <Input />
        <StarButton active={active} onClick={onStarClick} />
      </InputContainer>
    </Container>
  );
};

export default InputGroup;
