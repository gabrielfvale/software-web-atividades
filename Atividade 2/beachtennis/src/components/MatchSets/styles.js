import styled from "styled-components";

export const MatchSetsContainer = styled.div`
  span {
    color: white;
    text-transform: uppercase;
  }
`;

export const SetButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const SetButton = styled.button`
  padding: 1rem;
  border: none;

  font-weight: bold;

  width: 3rem;
  height: 3rem;

  border-radius: 5px;

  color: ${(props) => (!props.active ? props.theme.secondary : "white")};
  background-color: ${(props) =>
    props.active ? props.theme.secondary : "white"};

  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    box-shadow: 2px 4px 2px 1px rgba(0, 0, 0, 0.1);
  }
`;
