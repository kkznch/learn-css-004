import React from 'react';
import styled, { keyframes } from 'styled-components';

const hovered = keyframes`
100% {
  background-color: #26242b;
  color: #d2d2d2;
}
`;

const Wrapper = styled.div`
display: flex;
flex-direction: row;
height: 100%;
width: 100%;
`;

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
width: 100%;
`;

const Right = styled.div`
flex: 1;
height: 100%;
width: 100%;
`;

const Top = styled.div``;

const WorkspaceName = styled.div`

`;

const Username = styled.div`

`;

const NewMessage = styled.div`

`;

export default () => {
  return (
    <Wrapper>
      <Left>
        <WorkspaceName>けけずんスペース</WorkspaceName>
        <Username>けけずん</Username>
      </Left>
      <Right>aa</Right>
    </Wrapper>
  );
}
