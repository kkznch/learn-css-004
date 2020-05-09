import React from 'react';
import styled from 'styled-components';
import Sidebar from '../molecules/Sidebar';
import Content from '../molecules/Content';

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
border-right: solid 1px #292b2f;
`;

const Right = styled.div`
height: 100%;
width: calc(100% - ${leftWidthRem}rem);
`;

export default () => {
  return (
    <Wrapper>
      <Left>
        <Sidebar></Sidebar>
      </Left>
      <Right>
        <Content></Content>
      </Right>
    </Wrapper>
  );
}
