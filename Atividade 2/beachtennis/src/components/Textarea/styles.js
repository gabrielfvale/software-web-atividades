import styled from "styled-components";

export const TextareaContainer = styled.div`
  span {
    color: white;
  }
  text-transform: uppercase;
`;

export const StyledTextarea = styled.textarea.attrs({
  rows: 4,
})`
  width: 100%;
  border: 1px #ccc solid;
  border-radius: 5px;

  outline: none;
  resize: none;
`;
