import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // useNavigate 사용
import MainBannerSection from '../entites/Home/MainBannerSection';
import Footer from '../entites/Home/Footer';
import LoginSection from '../entites/Login/LoginSection';

export default function Login({ setIsLogin }) {
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleLoginClick = () => {
    navigate('/login'); // 로그인 페이지로 이동
  };

  return (
    <MainLayout>
      <ContentArea>
        <MainBannerSection onLoginClick={handleLoginClick} />
        <LoginSection setIsLogin={setIsLogin} />
      </ContentArea>
      <Footer />
    </MainLayout>
  );
}

const MainLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column; // 위에서 아래로 정렬 (푸터 포함)
  justify-content: space-between; // 상단과 하단에 공간 분배
`;

const ContentArea = styled.div`
  height: 100vh; // 높이 고정
  flex: 1; // 푸터를 제외한 공간 차지
  display: flex;
  flex-direction: row; // 좌우 배치
  align-items: center;
`;
