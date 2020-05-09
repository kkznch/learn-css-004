import React from 'react';
import styled from 'styled-components';
import Workspace from './components/Workspace/pages/Workspace';
import Navigation from './components/Global/molecules/Navigation';
import Sidebar from './components/Global/molecules/Sidebar';

const headerHeightRem = 2.4;
const leftWidthRem = 3.6;

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
border-bottom: solid 1px #292b2f;
`;

const Content = styled.div`
display: flex;
flex-direction: row;
height: calc(100% - ${headerHeightRem}rem);
width: 100%;
`;

const Left = styled.div`
height: 100%;
width: ${leftWidthRem}rem;
background-color: #1b191f;
border-right: solid 1px #292b2f;
`;

const Right = styled.div`
height: 100%;
width: calc(100% - ${leftWidthRem}rem);
`;

export default () => {
  return (
    <App>
      <Header>
        <Navigation></Navigation>
      </Header>
      <Content>
        <Left>
          <Sidebar></Sidebar>
        </Left>
        <Right>
          <Workspace></Workspace>
        </Right>
      </Content>
    </App>
  );
}
