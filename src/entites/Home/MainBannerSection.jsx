import React from 'react';
import styled from 'styled-components';
import MainBanner from './MainBanner';
import MyStoryButton from './MyStroyButton';

export default function MainBannerSection({isClicked,setIsClicked}) {
  return (
    <MainLayout>
      {/* 제목 */}
      <MainBanner/>
      {/* 버튼 */}
      {
        // 버튼 클릭 x -> 버튼 보이지 않도록
        // 버튼 클릭 : 프스터 섹션 -> 로그인 섹션 이동
        !isClicked && <MyStoryButton text = "MY STORY ▶" width="12.1875rem" height="3rem" onClick={()=>setIsClicked(true)}/> 
      }
    </MainLayout>
  );
}

const MainLayout = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 버튼이 없어도 MainBanner 위치 고정 */
  // align-items: center;
  margin-left: 170px;
  margin-top: 27%;
  font-size: 18px;
  font-family: Arial, sans-serif;
`;
