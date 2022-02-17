import React from 'react';
import { TitleContainer, TitleTop, TittleBottom } from './TitleElements';

const Title = ({ children, span, svg }) =>{

  return (
    <TitleContainer>
        <TitleTop svg={svg}>{span}</TitleTop>
        <TittleBottom>{children}</TittleBottom>
    </TitleContainer>
  );
};

export default Title;