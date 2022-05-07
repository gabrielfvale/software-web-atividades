import { TextareaContainer, StyledTextarea } from "./styles";

const Textarea = ({ label, ...rest }) => {
  return (
    <TextareaContainer>
      <span>{label}</span>
      <StyledTextarea {...rest} />
    </TextareaContainer>
  );
};

export default Textarea;
