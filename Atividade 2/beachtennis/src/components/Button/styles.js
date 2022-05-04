import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.8rem 1.5rem;

  background-color: white;
  color: ${({ theme }) => theme.main};

  text-transform: uppercase;
  font-weight: bold;

  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    box-shadow: 2px 4px 2px 1px rgba(0, 0, 0, 0.1);
  }
`;
