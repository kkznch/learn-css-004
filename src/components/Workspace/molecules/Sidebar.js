import React from 'react';
import styled, { keyframes } from 'styled-components';

const topHeightRem = 3;

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

const Top = styled.div`
display: flex;
height: ${topHeightRem}rem;
width: 100%;
border-bottom: solid 1px #292b2f;
`;

const Middle = styled.div`
height: auto;
width: 100%;
border-bottom: solid 1px #292b2f;
`;

const Bottom = styled.div`
height: auto;
width: 100%;
border-bottom: solid 1px #292b2f;
`;

export default () => {
  return (
    <Wrapper>
      <Top></Top>
      <Middle></Middle>
      <Bottom></Bottom>
    </Wrapper>
  );
}
