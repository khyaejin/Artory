import React, { useState } from 'react';
import styled from 'styled-components';
import UserInfoSection from '../entites/MyPage/UserInfoSection';
import MyStory from '../entites/MyPage/MyStory';
import MyAlbum from '../entites/MyPage/MyAlbum';
import SavedUser from '../entites/MyPage/SavedUser';
import SavedExhibition from '../entites/MyPage/SavedExhibition';

export default function MyPage() {
  // 버튼 4개 중 어떤 게 눌렸는지 감지하는 상태 변수, 상태함수
  const [isButtonClicked, setIsButtonClicked] = useState(1);

  return (
    <MainLayout>
      {/* 회원 정보 섹션 */}
      <UserInfoSection />

      {/* 저장한 것들 모아보기 섹션 */}
      <TapContainer>
        <TabButton
          isActive={isButtonClicked === 1} // 버튼 클릭 시 색 변경을 위해 상태변수 넘겨주기
          onClick={() => setIsButtonClicked(1)} // 하단 랜더링을 위한 상태함수
        >
          나의 스토리
        </TabButton>
        <TabButton
          isActive={isButtonClicked === 2}
          onClick={() => setIsButtonClicked(2)}
        >
          나의 앨범
        </TabButton>
        <TabButton
          isActive={isButtonClicked === 3}
          onClick={() => setIsButtonClicked(3)}
        >
          저장한 유저
        </TabButton>
        <TabButton
          isActive={isButtonClicked === 4}
          onClick={() => setIsButtonClicked(4)}
        >
          저장한 전시
        </TabButton>
      </TapContainer>

      {/* 상태 변수에 따라 다르게 렌더링 */}
      {isButtonClicked === 1 && <MyStory />}
      {isButtonClicked === 2 && <MyAlbum />}
      {isButtonClicked === 3 && <SavedUser />}
      {isButtonClicked === 4 && <SavedExhibition />}
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
  justify-content: space-between;
  height: 4%;
  width: calc(100% - 28rem); // 양쪽 14rem 여백을 고려해 너비 계산
  display: flex;
  position: sticky; // 스크롤 시 부모 컨테이너 내에서 고정
  margin: 40px;
`;

const TabButton = styled.button`
  cursor: pointer;
  border: 1px solid #ddd;
  width: 13.625rem;
  height: 2.1875rem;
  flex-shrink: 0;
  // 버튼 누르면 배경 색 변경
  background-color: ${(props) => (props.isActive ? '#0E0E0F' : '#F4F5F7')};

  // 폰트 관련 css 
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 133.072%; /* 1.16438rem */
  letter-spacing: 0.03063rem;
  // 버튼 누르면 폰트 색 변경
  color: ${(props) => (props.isActive ? '#FFF' : '#5A5C62')};

`;
