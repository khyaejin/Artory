import React, { useState } from 'react';
import styled from 'styled-components';
import OPENLOCK from '../../assets/logIn/openlock.svg';
import LOCK from '../../assets/logIn/lock.svg';

export default function LockInput({ type, placeholder, valid, setValid }) {
  const [value, setValue] = useState('');
  const [isInputFocused, setInputFocused] = useState(false);

  const validateInput = (value) => {
    if (type === 'email') {
      const regex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      setValid(regex.test(value));
    } else if (type === 'password') {
      const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#*?!]).{8,}$/;
      setValid(regex.test(value));
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
    validateInput(value);
  };

  return (
    <div>
      <Input
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        placeholder={isInputFocused ? '' : placeholder}
        style={valid ? { color: '#28292A' } : {}}
      />
      <span>
        <LockStyle src={valid ? LOCK : OPENLOCK} />
      </span>
    </div>
  );
}

// 스타일 컴포넌트
const Input = styled.input`
  padding-left: 5%;
  font-family: 'Pretendard';
  margin-top: 15px;
  border: none;
  width: 325px;
  height: 50px;
  box-shadow: 1px 2px 8px #f3f3f3;
  color: #ababab;
  &:focus {
    outline: none;
  }
`;

const LockStyle = styled.img`
  position: relative;
  bottom: 40%;
  left: 90%;
`;
