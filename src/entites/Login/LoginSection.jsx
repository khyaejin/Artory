import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import StandardButton from '../../shared/components/StandardButton';
import Modal from '../../shared/components/Modal';
import KakaoSocialLogin from './KakaoSocialLogin';

export default function LoginSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const navigate = useNavigate();
  
  // 모달 열기
  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 로그인 버튼 클릭 핸들러
  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      // 이메일과 비밀번호가 채워져 있으면 이동
      navigate('/exhibition');
    } else {
      handleOpenModal('이메일과 비밀번호를 입력해주세요.'); // 모달을 열고 경고 메시지를 표시
    }
  };

  return (
    <MainLayout>
      <LoginBox>
        <InputField
          type="email"
          placeholder={isEmailFocus ? '' : '이메일을 입력해주세요'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsEmailFocus(true)}
          onBlur={() => setIsEmailFocus(false)}
        />
        <InputField
          type="password"
          placeholder={isPasswordFocus ? '' : '비밀번호를 입력해주세요'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setIsPasswordFocus(true)}
          onBlur={() => setIsPasswordFocus(false)}
        />

        <StandardButton
          text="로그인"
          width="100%"
          height="3.25rem"
          marginRight="0"
          onClick={handleLogin} // 로그인 버튼 클릭 이벤트 추가
        />

        <BottomLinks>
          <LinkItem as="button" onClick={() => handleOpenModal('[아이디 찾기] 기능은 백엔드 기능 구현 이후 추가될 계획입니다!')}>
            아이디 찾기
          </LinkItem>
          <LinkItem as="button" onClick={() => handleOpenModal('[비밀번호 찾기] 기능은 백엔드 기능 구현 이후 추가될 계획입니다!')}>
            비밀번호 찾기
          </LinkItem>
          <LinkItem to="/signup">회원가입</LinkItem>
        </BottomLinks>

        <SocialLogin>
          <KakaoSocialLogin />
        </SocialLogin>
      </LoginBox>

      {/* 모달 */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={modalContent}>
      </Modal>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  width: 57%;
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  width: 50%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 0;
`;

const InputField = styled.input`
  display: flex;
  width: 90%;
  height: 3.125rem;
  flex-shrink: 0;
  margin-bottom: 1rem;
  border: 1px solid rgba(171, 171, 171, 0.02);
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  color: #a6a9af;
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.0325rem;
  padding: 0 1rem;
  outline: none;

  &:focus {
    border: 1px solid #a6a9af;
  }
`;

const BottomLinks = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
  margin-bottom: 20px;
`;

const LinkItem = styled(Link)`
  cursor: pointer;
  color: #9C9C9C;
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-weight: 400;
  text-decoration: none;
  background: none;
  border: none;
  outline: none;
  padding: 0;

  &:focus {
    outline: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLogin = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;