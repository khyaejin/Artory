import React, { useState } from 'react';
import styled from 'styled-components';
import StandardButton from '../../shared/components/StandardButton';
import AgreementSection from './AgreementSection';
import SignUpInput from './SignUpInput'; // SignUpInput 컴포넌트 불러오기

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreements, setAgreements] = useState({
    all: false,
    terms: false,
    personalInfo: false,
    marketing: false,
  });

  const handleAgreementChange = (name) => {
    const newAgreements = { ...agreements, [name]: !agreements[name] };
    if (name === 'all') {
      newAgreements.terms = !agreements.all;
      newAgreements.personalInfo = !agreements.all;
      newAgreements.marketing = !agreements.all;
    }
    newAgreements.all =
      newAgreements.terms && newAgreements.personalInfo && newAgreements.marketing;
    setAgreements(newAgreements);
  };

  const isFormValid =
    name &&
    email &&
    verificationCode &&
    password &&
    confirmPassword === password &&
    agreements.terms &&
    agreements.personalInfo;

  return (
    <MainLayout>
      <SignUpInput
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputWrapper>
        {/* 이메일 입력 필드와 버튼을 같은 줄에 배치 */}
        <SignUpInput
          type="email"
          placeholder="아이디(이메일)을 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* 버튼이 입력 필드 오른쪽에 자연스럽게 붙도록 스타일 조정 */}
        <StyledButton text="인증하기" />
      </InputWrapper>
      <InputWrapper>
        <SignUpInput
          type="text"
          placeholder="인증번호를 입력해주세요"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <StyledButton text="인증완료" />
      </InputWrapper>
      <SignUpInput
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SignUpInput
        type="password"
        placeholder="위 비밀번호를 한번 더 입력해주세요"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <AgreementSection
        agreements={agreements}
        onChange={handleAgreementChange}
      />
      <StandardButton
        text="ARTORY 시작하기"
        disabled={!isFormValid}
        width="100%"
        height="3.5rem"
      />
    </MainLayout>
  );
}

const MainLayout = styled.div`
  width: 100%;
  max-width: 66rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputWrapper = styled.div`
  display: flex; // 가로로 나란히 배치
  align-items: center; // 입력 필드와 버튼의 수직 정렬
  gap: 10px; // 입력 필드와 버튼 사이의 간격
`;

const StyledButton = styled(StandardButton)`
  height: 3rem; // 버튼 높이를 입력 필드 높이보다 약간 작게 설정
  font-size: 0.9rem; // 버튼 텍스트 크기 조정
  padding: 0 1rem; // 버튼의 좌우 여백
  flex-shrink: 0; // 버튼이 입력 필드에 의해 크기가 줄어들지 않도록 설정
`;
