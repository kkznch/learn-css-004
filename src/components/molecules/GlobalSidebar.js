import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
100% {
  box-shadow: 0 0 0 0.2rem rgba(255,255,255,0.6);
}
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
height: 100%;
width: 100%;
`;

const Workspace = styled.div`
background-color: white;
border-radius: 0.4rem;
height: 2.1rem;
width: 2.1rem;
margin-top: 1rem;
border: solid 0.1rem #1b191f;
&:hover {
  animation: ${fadeIn};
  animation-duration: 0.1s;
  animation-fill-mode: forwards;
}
`;

export default () => {
  return (
    <Wrapper>
      <Workspace></Workspace>
      <Workspace></Workspace>
    </Wrapper>
  );
}
