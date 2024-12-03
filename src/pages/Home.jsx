import React, { useState } from 'react';
import styled from 'styled-components';
import MainBannerSection from '../entites/Home/MainBannerSection';
import PosterSection from '../entites/Home/PosterSection';
import Footer from '../shared/components/Footer';

export default function Home({isLogin}) {
  // const [isClicked, setIsClicked] = useState(false);

  return (
    <MainLayout>
      <ContentArea>
        <MainBannerSection isLogin={isLogin} />
        <PosterSection />
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
