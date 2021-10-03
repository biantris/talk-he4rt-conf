import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';

import { Root } from './Intro';

const Img = styled.img`
  ${width}
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 50px;
  ${space}
`;

const Subtitle = styled.span`
  font-size: 40px;
  color: #FDAA4C;
  ${space}
`;

const MeName = styled.span`
  font-size: 30px;
  color: #38CBA5;
  ${space} 
`;

export const Cover = () => (
  <Root>
    <Center>
      <Img src={"./img/img-bg.png"} width={850} />
      <Title mt={20}>FullStack Journey for Junior Developers</Title>
      <Subtitle mt={20}>Talk for He4rt Conf</Subtitle>
      <MeName mt={100}>Beatriz Oliveira</MeName>
    </Center>
  </Root>
);