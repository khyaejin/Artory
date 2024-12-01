import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
  const [modalContent, setModalContent] = useState('');

  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅 추가

  const handleOpenModal = (content) => {
    setModalContent(content);
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

  // ARTORY 시작하기 버튼 클릭(제출 시) 핸들러
  const handleSubmit = () => {
    const message = validateForm();
    if (message) {
      handleOpenModal(message); // 모달에 메시지 표시
    } else {
      // 모든 입력이 유효한 경우 진행
      navigate('/onboarding1');
    }
  };

  // 누락된 필드 확인 및 메시지 생성
  const validateForm = () => {
    let message = '';

    if (!name) {
      message = '이름을 입력해주세요.';
    } else if (!email) {
      message = '아이디(이메일)을 입력해주세요.';
    } else if (!verificationCode) {
      message = '인증번호를 입력해주세요.';
    } else if (!password) {
      message = '비밀번호를 입력해주세요.';
    } else if (!passwordConfirm) {
      message = '비밀번호 확인을 입력해주세요.';
    } else if (password && passwordConfirm && password !== passwordConfirm) {
      message = '비밀번호가 일치하지 않습니다.';
    } else if (!agreements.terms || !agreements.personalInfo) {
      message = '필수 약관에 동의해주세요.';
    }

    return message; // 누락된 필드 메시지 반환 (없으면 빈 문자열)
  };

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
            onClick={() => handleOpenModal('[이메일 인증] 기능은 백엔드 기능 구현 이후 추가될 계획입니다!')}
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
            onClick={() => handleOpenModal('[이메일 인증] 기능은 백엔드 기능 구현 이후 추가될 계획입니다!')}
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

      {/* 약관 동의 섹션 */}
      <AgreementSection
        agreements={agreements}
        onChange={handleAgreementChange}
      />

      {/* ARTORY 시작하기 버튼 */}
      <CustomButton
        text="ARTORY 시작하기"
        disabled={false}
        width="100%"
        height="3.5rem"
        onClick={handleSubmit}
      />

      {/* 모달 */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={modalContent}>
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
  color: var(--1, #0e0e0f);
  font-family: Pretendard;
  font-size: 1rem;
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

const CustomButton = styled(StandardButton)`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.05rem;
  margin-top: 20px;
`;

