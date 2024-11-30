import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StandardButton from '../../shared/components/StandardButton';
import AgreementSection from './AgreementSection';
import SignUpInput from './SignUpInput';
import Modal from '../../shared/components/Modal';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [agreements, setAgreements] = useState({
    all: false,
    terms: false,
    personalInfo: false,
    marketing: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const handleOpenModal = (title) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
    password.length >= 8 &&
    passwordConfirm === password &&
    agreements.terms &&
    agreements.personalInfo;

  return (
    <MainLayout>
      {/* 이름 입력 */}
      <FieldWrapper>
        <Label>이름</Label>
        <SignUpInput
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FieldWrapper>

      {/* 아이디(이메일) 입력 */}
      <FieldWrapper>
        <Label>아이디(이메일)</Label>
        <InputWrapper>
          <SignUpInput
            type="email"
            placeholder="아이디(이메일)을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledButton
            text="인증하기"
            onClick={() => handleOpenModal('이메일 인증')}
          />
        </InputWrapper>
      </FieldWrapper>

      {/* 인증번호 입력 */}
      <FieldWrapper>
        <Label>인증번호</Label>
        <InputWrapper>
          <SignUpInput
            type="text"
            placeholder="인증번호를 입력해주세요"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <StyledButton
            text="인증완료"
            onClick={() => handleOpenModal('인증번호 확인')}
          />
        </InputWrapper>
      </FieldWrapper>

      {/* 비밀번호 입력 */}
      <FieldWrapper>
        <Label>비밀번호</Label>
        <SignUpInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FieldWrapper>

      {/* 비밀번호 확인 */}
      <FieldWrapper>
        <Label>비밀번호 확인</Label>
        <SignUpInput
          type="password"
          placeholder="위 비밀번호를 한번 더 입력해주세요"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </FieldWrapper>

      <AgreementSection
        agreements={agreements}
        onChange={handleAgreementChange}
      />

      {/* Link로 경로 이동 */}
      <StyledLink to="/onboarding">
        <CustomButton
          text="ARTORY 시작하기"
          disabled={!isFormValid}
          width="100%"
          height="3.5rem"
        />
      </StyledLink>

      {/* 모달 */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={modalTitle}>
          <p>{modalTitle} 기능은 백엔드 기능 구현 이후 작동할 예정입니다!</p>
        </Modal>
      )}
    </MainLayout>
  );
}

// 스타일 컴포넌트
const MainLayout = styled.div`
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: var(--1, #0E0E0F);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.04rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledButton = styled(StandardButton)`
  height: 3.5rem;
  font-size: 0.9rem;
  flex-shrink: 0;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none; // 링크 밑줄 제거
`;

const CustomButton = styled(StandardButton)`
  color: #fff; // 텍스트 색상
  text-align: center; // 텍스트 가운데 정렬
  font-family: Pretendard; // 폰트 설정
  font-size: 1.25rem; // 텍스트 크기
  font-style: normal;
  font-weight: 600; // 텍스트 두께
  line-height: normal;
  letter-spacing: -0.05rem; // 글자 간격 조정
`;
