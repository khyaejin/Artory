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
        // 버튼이 클릭되지 않았을 시 버튼 보이지 않도록
        // 클릭할 경우 프스터 섹션 -> 로그인 섹션으로 이동하도록
        !isClicked && <MyStoryButton text = "MY STROY ▶" width="12.1875rem" height="3rem" onClick={()=>setIsClicked(true)}/> 
      }
    </MainLayout>
  );
}

const MainLayout = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white; /* 텍스트 색상 */
  font-size: 18px;
  font-family: Arial, sans-serif;
`;
