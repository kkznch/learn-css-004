import React from 'react';
import styled from 'styled-components';
import Workspace from './components/pages/Workspace';
import TopNavigation from './components/molecules/TopNavigation';

const headerHeightRem = 2.4;
const sidebarWidthRem = 3.6;

const App = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
`;

const Header = styled.div`
height: ${headerHeightRem}rem;
width: 100%;
background-color: red;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: row;
height: calc(100% - ${headerHeightRem}rem);
width: 100%;
background-color: blue;
`;

const Sidebar = styled.div`
height: 100%;
width: ${sidebarWidthRem}rem;
background-color: pink;
`;

const Content = styled.div`
height: 100%;
width: calc(100% - ${sidebarWidthRem}rem);
background-color: yellow;
`;

export default () => {
  return (
    <App>
      <Header>
        <TopNavigation></TopNavigation>
      </Header>
      <Wrapper>
        <Sidebar></Sidebar>
        <Content>
          <Workspace></Workspace>
        </Content>
      </Wrapper>
    </App>
  );
}
