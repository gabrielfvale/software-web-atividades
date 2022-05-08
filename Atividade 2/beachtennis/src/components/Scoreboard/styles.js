import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const GameDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: white;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px ${({ theme }) => theme.secondary} solid;
  span {
    color: white;
    padding: 0.5rem;
  }
  margin-bottom: 1rem;
`;

export const PointBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PointColumn = styled.div`
  background-color: ${({ theme, isSet }) => (isSet ? theme.secondary : "#eee")};
`;

export const PointBox = styled.div`
  padding: 0.5rem;
  width: 1rem;
  height: 1.5rem;
  text-align: center;
`;

export const ActiveStar = styled(FaStar).attrs({ size: "1rem" })`
  color: ${({ theme }) => theme.secondary};
  margin-right: 0.5rem;
`;
