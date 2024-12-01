import React from 'react';
import styled from 'styled-components';
import MainBanner from './MainBanner';
import MyStoryButton from './MyStroyButton';
import { useNavigate } from 'react-router-dom'; // React Router의 useNavigate 훅

export default function MainBannerSection() {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅

  const handleButtonClick = () => {
    navigate('/login'); // 로그인 페이지로 이동
  };

  return (
    <MainLayout>
      {/* 메인 배너 컴포넌트 렌더링 */}
      <MainBanner /> 
      <MyStoryButton
        text="MY STORY ▶"
        width="12.1875rem"
        height="3rem"
        onClick={handleButtonClick} // 버튼 클릭 시 페이지 이동 처리
      />
    </MainLayout>
  );
}

const MainLayout = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column; // 버튼이 없어도 MainBanner 위치 고정
  justify-content: flex-start;
  margin-left: 170px;
  margin-top: 27%;
  font-size: 18px;
  font-family: Arial, sans-serif;
`;
