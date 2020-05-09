import React from 'react';
import styled from 'styled-components';
import Workspace from './components/pages/Workspace';
import GlobalNavigation from './components/molecules/GlobalNavigation';

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
background-color: #212124;
border-bottom: ridge 1px #292b2f;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: row;
height: calc(100% - ${headerHeightRem}rem);
width: 100%;
`;

const Sidebar = styled.div`
height: 100%;
width: ${sidebarWidthRem}rem;
background-color: #1b191f;
border-right: ridge 1px #292b2f;
`;

const Content = styled.div`
height: 100%;
width: calc(100% - ${sidebarWidthRem}rem);
`;

export default () => {
  return (
    <App>
      <Header>
        <GlobalNavigation></GlobalNavigation>
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
