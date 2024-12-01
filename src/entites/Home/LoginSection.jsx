import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StandardButton from '../../shared/components/StandardButton';
import Modal from '../../shared/components/Modal'; // Modal 컴포넌트 임포트
import NaverLoginButtonImage from '../../assets/naver_login_large_narrow 2.svg';
import KakaoLoginButtonImage from '../../assets/kakao_login_large_narrow 2.svg';

export default function LoginSection() {
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  // 모달 열기
  const handleOpenModal = (title) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <MainLayout>
      <LoginBox>
        <InputField
          type="email"
          placeholder={isEmailFocus ? '' : '이메일을 입력해주세요'}
          onFocus={() => setIsEmailFocus(true)}
          onBlur={() => setIsEmailFocus(false)}
        />
        <InputField
          type="password"
          placeholder={isPasswordFocus ? '' : '비밀번호를 입력해주세요'}
          onFocus={() => setIsPasswordFocus(true)}
          onBlur={() => setIsPasswordFocus(false)}
        />

        <StandardButton text="로그인" width="100%" height="3.25rem" marginRight="0" />

        <BottomLinks>
          <LinkItem as="button" onClick={() => handleOpenModal('아이디 찾기')}>
            아이디 찾기
          </LinkItem>
          <LinkItem as="button" onClick={() => handleOpenModal('비밀번호 찾기')}>
            비밀번호 찾기
          </LinkItem>
          <LinkItem to="/signup">회원가입</LinkItem>
        </BottomLinks>

        <SocialLogin>
          <SocialButton>
            <img src={NaverLoginButtonImage} alt="네이버 로그인" />
          </SocialButton>
          <SocialButton>
            <img src={KakaoLoginButtonImage} alt="카카오 로그인" />
          </SocialButton>
        </SocialLogin>
      </LoginBox>

      {/* 모달 */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={modalTitle}>
        <p>{modalTitle} 기능은 백엔드 기능 구현 이후 작동할 예정입니다!</p>
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
  padding: 20rem 0; // 위아래 여백 추가

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
  cursor: pointer; // 클릭할 수 있는 손가락 모양으로 변경
  color: #9C9C9C;
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-weight: 400;
  text-decoration: none; // 기본 밑줄 제거
  background: none;
  border: none; // 기본 버튼 테두리 제거
  outline: none; // 클릭하거나 포커스 시 생기는 네모 제거
  padding: 0;

  &:focus {
    outline: none; // 포커스 시에도 테두리가 생기지 않도록 설정
  }

  &:hover {
    text-decoration: underline; // 마우스를 올리면 밑줄 표시
  }
`;


const SocialLogin = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const SocialButton = styled.div`
  flex: 1;
  max-width: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 135%;
    height: auto;
    object-fit: cover;
  }
`;
