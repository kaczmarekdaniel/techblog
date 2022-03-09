import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  min-height: 75vh;
  width: 100%;
  justify-content: flex-start;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Skeleton = styled.div`
  min-height: 75vh;
  width: 90%;
  margin: 20px;
  @media (min-width: 1024px) {
    width: 25%;
    min-width: 500px;
    min-height: 600px;
    height: 45vh;
  }

  &.pulse {
    animation: pulse-animation 1s infinite;
  }

  @keyframes pulse-animation {
    0% {
      background-color: grey;
    }
    100% {
      background-color: lightgrey;
    }
  }
`;
