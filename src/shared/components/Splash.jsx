import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';

export default function Splash({ onComplete }) {
  const navigate = useNavigate();

  useEffect(() => {
    // 스플래시 화면을 1.5초 동안 표시한 후 onComplete 함수 호출
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete(); // props로 받은 콜백 호출
      } else {
        navigate('/'); // 기본적으로 루트 경로로 이동
      }
    }, 1500);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 정리
  }, [onComplete, navigate]);

  return (
    <SplashContainer>
      <SplashWrap>
        <SplashLogoImg src={LogoImg} alt="Logo" />
        <SplashRightWrap>
          <SplashFirstParagraph>나만의 문화일기</SplashFirstParagraph>
          <SplashSecondParagraph>ARTORY</SplashSecondParagraph>
        </SplashRightWrap>
      </SplashWrap>
    </SplashContainer>
  );
}

const SplashContainer = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
`;

const SplashWrap = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SplashLogoImg = styled.img`
  width: 64px;
  height: 99px;
  background-color: black;
  margin-top:20px;
`;

const SplashRightWrap = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
`;

const SplashFirstParagraph = styled.div`
  color: #9ba0ae;
  font-size: 24px;
  font-weight: 600;
  padding-top: 22px;
  font-family: 'Pretendard';
  word-wrap: break-word;
`;

const SplashSecondParagraph = styled.div`
  color: white;
  font-size: 45px;
  font-family: 'Pretendard';
  font-weight: 700;
  padding-top: 11px;
  line-height: 53.23px;
  letter-spacing: 2.8px;
  word-wrap: break-word;
`;
