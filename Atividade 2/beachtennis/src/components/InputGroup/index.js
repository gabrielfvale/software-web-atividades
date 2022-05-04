import { Container, InputContainer } from "./styles";
import { FaStar } from "react-icons/fa";

import Input from "../Input";

const InputGroup = ({ label }) => {
  return (
    <Container>
      <span>{label}</span>
      <InputContainer>
        <Input />
        <Input />
        <FaStar size="3rem" color="white" />
      </InputContainer>
    </Container>
  );
};

export default InputGroup;
