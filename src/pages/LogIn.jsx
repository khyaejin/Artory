import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StandardButton from '../shared/components/StandardButton'; 
import NaverLogin from '../components/SocialLogin/NaverLogin';
import KakaoLogin from '../components/SocialLogin/KakaoLogin';
import LockInput from '../entities/LogIn/LockInput';

export default function LogInPage() {
  const [idValid, setIDValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const handleLogin = () => {
    if (!idValid || !passwordValid) {
      alert('이메일과 비밀번호를 모두 입력해주세요');
      window.location.href = '/login';
    } else {
      // 로그인 처리 로직
    }
  };

  return (
    <HomeWrap>
      <HomeLeftWrap>
        <FirstParagraph>Story community</FirstParagraph>
        <SecondParagraph>나만의 문화이야기</SecondParagraph>
        <ThirdParagraph>ARTORY</ThirdParagraph>
      </HomeLeftWrap>
      <WrapLogin>
        {/* 이메일 입력 */}
        <LockInput
          type="email"
          placeholder="아이디를 입력해주세요"
          valid={idValid}
          setValid={setIDValid}
        />
        {/* 비밀번호 입력 */}
        <LockInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          valid={passwordValid}
          setValid={setPasswordValid}
        />
        {/* 로그인 버튼 */}
        <Link to="/">
          <StandardButton
            height="52px"
            width="345px"
            style={{ marginTop: '20px' }}
            onClick={handleLogin}
          >
            로그인
          </StandardButton>
        </Link>
        <WrapLink>
          <LinkStyle>아이디 찾기</LinkStyle>
          <LinkStyle>비밀번호 찾기</LinkStyle>
          <Link to="/signup" style={{ color: '#9C9C9C', textDecoration: 'none' }}>
            <LinkStyle>회원가입</LinkStyle>
          </Link>
        </WrapLink>
        <WrapSocialLogin>
          <NaverLogin />
          <KakaoLogin />
        </WrapSocialLogin>
      </WrapLogin>
    </HomeWrap>
  );
}

// 스타일 컴포넌트
const HomeWrap = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`;

const HomeLeftWrap = styled.div`
  display: block;
  margin-left: 17%;
  margin-top: 10%;
`;

const FirstParagraph = styled.div`
  color: #595959;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;
`;

const SecondParagraph = styled.div`
  color: #5d5d5d;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 500;
`;

const ThirdParagraph = styled.div`
  color: black;
  font-size: 80px;
  font-family: 'Pretendard';
  font-weight: 700;
`;

const WrapLogin = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16%;
  margin-top: 10%;
`;

const WrapLink = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
`;

const LinkStyle = styled.span`
  font-family: 'Pretendard';
  font-size: 13px;
  width: 100px;
`;

const WrapSocialLogin = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20%;
`;
