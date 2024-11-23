import React, { useState } from 'react';
import styled from 'styled-components';
import UserInfoSection from '../entites/MyPage/UserInfoSection';
import MyStory from '../entites/MyPage/MyStory';
import MyAlbum from '../entites/MyPage/MyAlbum';
import SavedUser from '../entites/MyPage/SavedUser';
import SavedStory from '../entites/MyPage/SavedStory';

export default function MyPage() {
  // 버튼 4개 중 어떤 게 눌렸는지 감지하는 상태 변수, 상태함수
  const [isButtonClicked, setIsButtonClicked] = useState(1);

  return (
    <MainLayout>
      {/* 회원 정보 섹션 */}
      <UserInfoSection />

      {/* 저장한 것들 모아보기 섹션 */}
      <TapContainer>
        <TabButton onClick={() => setIsButtonClicked(1)}>나의 스토리</TabButton>
        <TabButton onClick={() => setIsButtonClicked(2)}>나의 앨범</TabButton>
        <TabButton onClick={() => setIsButtonClicked(3)}>저장 유저</TabButton>
        <TabButton onClick={() => setIsButtonClicked(4)}>저장 스토리</TabButton>
      </TapContainer>

      {/* 상태 변수에 따라 렌더링 */}
      {isButtonClicked === 1 && <MyStory />}
      {isButtonClicked === 2 && <MyAlbum />}
      {isButtonClicked === 3 && <SavedUser />}
      {isButtonClicked === 4 && <SavedStory />}
    </MainLayout>
  );
}

const MainLayout = styled.div`
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; // 자식 요소들을 상단부터 정렬
`;

const TapContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 5%;
  width: calc(100% - 28rem); // 양쪽 14rem 여백을 고려해 너비 계산
  display: flex;
  position: sticky; // 스크롤 시 부모 컨테이너 내에서 고정
  margin: 20px;
  background-color:blue;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }
`;
