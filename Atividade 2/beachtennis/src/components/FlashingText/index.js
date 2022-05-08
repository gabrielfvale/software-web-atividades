import styled from "styled-components";

const FlashingText = styled.span`
  font-weight: bold;
  text-transform: uppercase;

  animation: flash 1s infinite;

  @keyframes flash {
    0% {
      color: ${({ theme }) => theme.primary};
    }
    50% {
      color: ${({ theme }) => theme.secondary};
    }
    100% {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export default FlashingText;
