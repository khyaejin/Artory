import React from 'react';
import styled from 'styled-components';

export default function SignUpInput({
  type = 'text',
  placeholder,
  value,
  onChange,
}) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

const Input = styled.input`
  width: 100%;
  height: 3.5rem;
  padding: 0 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  background-color: #fff;
  font-size: 1rem;
  color: #000;

  &::placeholder {
    color: #c4c4c4;
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
    border-color: #000;
  }
`;
