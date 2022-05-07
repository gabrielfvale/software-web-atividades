import { InputContainer, StyledInput } from "./styles";

const Input = ({ label, ...rest }) => {
  return (
    <InputContainer>
      <span>{label}</span>
      <StyledInput {...rest}></StyledInput>
    </InputContainer>
  );
};

export default Input;
