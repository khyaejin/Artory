import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';

export default function Splash({ onComplete }) {
  const navigate = useNavigate();

  useEffect(() => {
    // 스플래시 화면을 4초 동안 표시한 후 onComplete 함수 호출
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete(); // props로 받은 콜백 호출
      } else {
        navigate('/'); // 기본적으로 루트 경로로 이동
      }
    }, 4000);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 정리
  }, [onComplete, navigate]);

  return (
    <SplashContainer>
      {/* 로고와 텍스트 */}
      <SplashWrap>
        <SplashLogoImg src={LogoImg} alt="Logo" />
        <SplashRightWrap>
          <SplashFirstParagraph>나만의 문화일기</SplashFirstParagraph>
          <SplashSecondParagraph>ARTORY</SplashSecondParagraph>
        </SplashRightWrap>
      </SplashWrap>

      {/* 움직이는 애니메이션 */}
      <Wrapper>
        <Circle left="15%" delay="0s" />
        <Circle left="45%" delay="0.2s" />
        <Circle left="auto" style={{ right: '15%' }} delay="0.4s" />
        <Shadow left="15%" delay="0s" />
        <Shadow left="45%" delay="0.2s" />
        <Shadow left="auto" style={{ right: '15%' }} delay="0.4s" />
      </Wrapper>
    </SplashContainer>
  );
}

// 스플래시 화면 전체를 감싸는 컨테이너
const SplashContainer = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
`;

// 로고와 텍스트를 감싸는 css
const SplashWrap = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// 로고 이미지 스타일
const SplashLogoImg = styled.img`
  width: 64px;
  height: 99px;
  background-color: black;
  margin-top: 20px;
`;

// 텍스트를 감싸는 거
const SplashRightWrap = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
`;

// 나만의 문화일기 css
const SplashFirstParagraph = styled.div`
  color: #9ba0ae;
  font-size: 24px;
  font-weight: 600;
  padding-top: 22px;
  font-family: 'Pretendard';
  word-wrap: break-word;
`;

// Artory css 
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

// 애니메이션을 감싸는 컨테이너
const Wrapper = styled.div`
  width: 200px; // 애니메이션 전체 너비
  height: 60px; // 애니메이션 전체 높이
  position: absolute; // 부모 기준으로 위치 설정
  top: 60%; // 텍스트 아래로 배치
  left: 50%; // 가로 중앙 정렬
  transform: translate(-50%, 0); // 완벽한 중앙 정렬
`;

// 원이 움직이는 애니메이션
const CircleAnimation = keyframes`
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }
  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0%;
  }
`;

// 그림자 애니메이션
const ShadowAnimation = keyframes`
  0% {
    transform: scaleX(1.5);
    opacity: 0.4;
  }
  40% {
    transform: scaleX(1);
    opacity: 0.7;
  }
  100% {
    transform: scaleX(0.2);
    opacity: 0.4;
  }
`;

// 움직이는 원 스타일
const Circle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%; // 원 모양으로 설정
  background-color: #fff; // 흰색
  left: ${(props) => props.left || '15%'}; // 위치 조정(기본값: 15%)
  transform-origin: 50%; // 중심 축 기준으로 애니메이션
  animation: ${CircleAnimation} 0.5s alternate infinite ease; // 애니메이션 속도 유지
  animation-delay: ${(props) => props.delay || '0s'}; // 애니메이션 시작 시간 조정
`;

// 원 아래 그림자 스타일
const Shadow = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 50%; // 둥근 모양
  background-color: rgba(0, 0, 0, 0.9); // 검정색 반투명
  position: absolute;
  top: 62px; // 위아래 위치
  z-index: -1; // 원 뒤에 배치
  filter: blur(1px); // 흐림 효과
  left: ${(props) => props.left || '15%'}; // 위치 조정(기본값: 15%)
  animation: ${ShadowAnimation} 0.5s alternate infinite ease; // 애니메이션 속도 유지
  animation-delay: ${(props) => props.delay || '0s'}; // 애니메이션 시작 시간 조정
`;
