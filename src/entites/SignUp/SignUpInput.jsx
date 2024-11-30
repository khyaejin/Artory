import React from 'react';
import styled from 'styled-components';

export default function SignUpInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
}) {
  return (
    <FieldWrapper>
      {label && <Label>{label}</Label>} {/* 라벨 추가 */}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FieldWrapper>
  );
}

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column; // 라벨과 입력 필드를 세로로 정렬
  gap: 2rem; // 라벨과 입력 필드 사이 간격 두기
  width: 100%; 
`;

const Label = styled.label`
  color: var(--1, #0E0E0F);
  font-family: Pretendard; // 폰트 설정
  font-size: 1rem; // 글자 크기 설정
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.04rem;
`;
const Input = styled.input`
  width: 100%;
  height: 3.125rem;
  padding: 0 -3.5rem 0 2rem; // 왼쪽으로 이동
  border: 1px solid rgba(171, 171, 171, 0.02);
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  color: #a6a9af;

  &::placeholder {
    color: #c4c4c4;
    font-size: 0.8125rem;
  }

  &:focus {
    border: 1px solid #a6a9af;
  }

  // font
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.0325rem;
  outline: none;
`;
