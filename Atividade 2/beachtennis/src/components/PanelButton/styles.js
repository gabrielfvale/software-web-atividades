import styled from "styled-components";

export const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  border: none;

  font-size: large;

  background-color: white;
  color: ${({ theme }) => theme.primary};

  :hover {
    background-color: ${({ theme }) => theme.secondary};
    color: white;
  }

  transition: all 0.2s ease-in-out;

  cursor: pointer;
`;
