import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;

  background-color: white;
  color: ${({ theme }) => theme.primary};

  text-transform: uppercase;
  font-weight: bold;

  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    box-shadow: 2px 4px 2px 1px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.secondary};
    color: white;
  }
`;
