import React from 'react';
import styled from 'styled-components';
import WorkspaceSidebar from '../molecules/WorkspaceSidebar';
import WorkspaceContent from '../molecules/WorkspaceContent';

const leftWidthRem = 14;

const Wrapper = styled.div`
display: flex;
flex-direction: row;
height: 100%;
width: 100%;
`;

const Left = styled.div`
height: 100%;
width: ${leftWidthRem}rem;
background-color: #1b191f;
border-right: ridge 1px #292b2f;
`;

const Right = styled.div`
height: 100%;
width: calc(100% - ${leftWidthRem}rem);
`;


export default () => {
  return (
    <Wrapper>
      <Left>
        <WorkspaceSidebar></WorkspaceSidebar>
      </Left>
      <Right>
        <WorkspaceContent></WorkspaceContent>
      </Right>
    </Wrapper>
  );
}
