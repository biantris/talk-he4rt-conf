import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';
import { Flex } from 'rebass';

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

const IconImage = styled.img`
  max-height: 60px;
  max-width: 60px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const Me = styled.img`
  max-width: 150px;
  max-height: 150px; 
`;

const MeName = styled.span`
  font-size: 50px;
  color: #38CBA5;
  margin-left: 60px;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Root = styled.div([], {
  width: '50vw',
  height: '70vh',
});

const Username = styled.span`
  font-size: 14px;
  margin-left: 20px;
`;

const EntriaLogo = styled.img`
  max-width: 600px;
`;

const SocialMediaLink = ({ name, link, username }) => (
  <div>
    <Link href={link} target="_blank">
      <Row>
        <IconImage src={`./img/${name}`} />
        <Username>{username}</Username>
      </Row>
    </Link>
  </div>
);

export const Intro = () => (
  <Root>
    <Row>
      <Me src={'./img/me.jpg'} />
      <MeName>Beatriz Oliveira</MeName>
    </Row>
    <SpaceBetween>
      <SocialMediaLink
        name={'github.png'}
        link={'https://github.com/biantris'}
        username={'@biantris'}
      />
      <SocialMediaLink
        name={'twitter.png'}
        link={'https://twitter.com/biantris_'}
        username={'@biantris_'}
      />
    </SpaceBetween>
    <Center>
      <EntriaLogo src={'./img/entriaLogo.png'} />
    </Center>
    <Flex flex={1} alignItems='center' justifyContent='center' mt={30}>
      <MeName>Fullstack Developer</MeName>
    </Flex>
  </Root>
);