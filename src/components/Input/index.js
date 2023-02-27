import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { InputStyled } from './styles';

function Input({
  id,
  label,
  onChange,
  max,
  defaultValue,
  value,
  type,
  name,
  required,
  onBlur,
  placeholder,
  formGroup = true,
  ...rest
}) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);


  return (<>
    {label && <label style={{color:'#FFFFFF'}}>{label}</label>}
    <Form.Group {...rest} style={{display: 'flex'}}>
      <InputStyled
        id={!id ? name : id}
        key={id}
        name={name}
        type={type}
        value={value}
        max={max}
        defaultValue={defaultValue}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </Form.Group>
  </>
  );
}

export const InputDate = ({ max = '9999-12-31', ...props }) => {
  return <Input {...props} type="date" max={max} />;
};

export default Input;
