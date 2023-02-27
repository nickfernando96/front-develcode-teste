import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 15px;
`;

export const Button = styled.label`
  background-color:#1b75bb !important;
  color: #ffffff;
  border: 1px solid #1b75bb;
  font-size: 16px !important;
  text-transform: initial !important;
  padding: 5px;
  margin: 0px !important;
  box-shadow: none !important;
  border-radius: 5px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #ffffff !important;
    color: #1b75bb !important;
    border: 1px solid #1b75bb;
  }

  &:active {
    background-color: #ffffff !important;
    color: #444651 #1b75bb !important;
    border: 1px solid #cacddf #1b75bb !important;
    box-shadow: none !important;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const Legend = styled.div`
  font-size: 12px;
  font-weight: normal !important;
  padding-top: 22px;
`;
