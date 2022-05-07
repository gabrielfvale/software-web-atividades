import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const Container = styled.div`
  span {
    color: white;
    text-transform: uppercase;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StarButton = styled(FaStar).attrs({
  size: "1rem",
})`
  color: ${({ active, theme }) => (active ? theme.secondary : "white")};
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    transform: scale(1.2);
  }

  transform: scale(${({ active }) => (active ? 1.2 : 1.0)});
`;
