import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as ArrowLeftSvg } from '../../assets/images/arrow_left.svg';
import { ReactComponent as ArrowRightSvg } from '../../assets/images/arrow_right.svg';
import { ReactComponent as ClockSvg } from '../../assets/images/clock.svg';
import { ReactComponent as SearchSvg } from '../../assets/images/search.svg';
import { ReactComponent as HelpSvg } from '../../assets/images/help.svg';

const iconFadeIn = keyframes`
100% {
  fill: #c3c4c6;
  background-color: #5a5a5a;
}
`;

const searchBarFadeIn = keyframes`
100% {
  border-color: #c3c4c6;
  fill: #c3c4c6;
  color: #c3c4c6;
}
`;

const Wrapper = styled.div`
display: flex;
flex-direction: row;
height: 100%;
width: 100%;
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
`;

const Center = styled.div`
flex: 1;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const Right = styled.div`
flex: 1;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
`;

const ArrowLeftIcon = styled(ArrowLeftSvg)`
fill: #7e7f80;
object-fit: contain;
height: 1rem;
width: 1rem;
padding: 0.4rem;
border-radius: 0.4rem;
&:hover {
  animation: ${iconFadeIn};
  animation-duration: 0.1s;
  animation-fill-mode: forwards;
}
`;

const ArrowRightIcon = styled(ArrowRightSvg)`
margin-left: 0.6rem;
//fill: #555557;
fill: #7e7f80;
object-fit: contain;
height: 1rem;
width: 1rem;
padding: 0.4rem;
border-radius: 0.4rem;
&:hover {
  animation: ${iconFadeIn};
  animation-duration: 0.1s;
  animation-fill-mode: forwards;
}
`;

const ClockIcon = styled(ClockSvg)`
margin-left: 0.6rem;
margin-right: 1.6rem;
fill: #7e7f80;
object-fit: contain;
height: 1.2rem;
width: 1.2rem;
padding: 0.4rem;
border-radius: 0.4rem;
&:hover {
  animation: ${iconFadeIn};
  animation-duration: 0.1s;
  animation-fill-mode: forwards;
}
`;

const SearchBar = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 1.4rem;
width: 100%;
background-color: #29292c;
border: solid 1px #3f3e41;
border-radius: 0.4rem;
color: #7f8182;
fill: #7f8182;
&:hover {
  animation: ${searchBarFadeIn};
  animation-duration: 0.1s;
  animation-fill-mode: forwards;
}
`;

const SearchIcon = styled(SearchSvg)`
fill: currentColor;
object-fit: contain;
height: 0.8rem;
width: 0.8rem;
`;

const SearchText = styled.p`
margin-left: 0.4rem;
color: inherit;
font-size: 0.8rem;
`;

const HelpIcon = styled(HelpSvg)`
margin-right: 1rem;
fill: #555557;
object-fit: contain;
height: 1.2rem;
width: 1.2rem;
padding: 0.4rem;
border-radius: 0.4rem;
&:hover {
  animation: ${iconFadeIn};
  animation-duration: 0.1s;
  animation-fill-mode: forwards;
}
`;

export default () => {
  return (
    <Wrapper>
      <Left>
        <ArrowLeftIcon></ArrowLeftIcon>
        <ArrowRightIcon></ArrowRightIcon>
        <ClockIcon></ClockIcon>
      </Left>
      <Center>
        <SearchBar>
          <SearchIcon></SearchIcon>
          <SearchText>Workspace 内を検索する</SearchText>
        </SearchBar>
      </Center>
      <Right>
        <HelpIcon></HelpIcon>
      </Right>
    </Wrapper>
  );
}
