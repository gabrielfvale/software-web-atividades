import styled from "styled-components";

export const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  color: white;
  text-transform: uppercase;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: white;
    transition: all 0.2s ease-in-out;
  }

  input:checked ~ span {
    background-color: ${({ theme }) => theme.secondary};
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid ${(props) => props.theme.main};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
