import React from 'react';
import { StyledButton } from './styles';

function Button({ labelButton, ...rest }) {
  return <StyledButton {...rest} >{labelButton}</StyledButton>;
}

export default Button;
