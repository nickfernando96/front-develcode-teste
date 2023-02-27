import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledButton = styled(Button)`
  margin-top: 10px;
  background-color: #1b75bb;
  border: 1px solid #1b75bb;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  box-shadow: none !important;
  
  &:hover {
    background-color: #ffffff !important;
    color: #1b75bb !important;
    border: 1px solid #1b75bb;
  }

  &:focus {
    background-color: #1b75bb;
    border: 1px solid #1b75bb;
  }
`;
