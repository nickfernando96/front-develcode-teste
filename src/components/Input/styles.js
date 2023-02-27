import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const InputStyled = styled(Form.Control)`
  background-color: #f2f4f7;
  margin-right: 10px;
  color: #212529;
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  font-size: 16px;  
`;