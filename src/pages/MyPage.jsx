import React, { useState } from 'react';
import styled from 'styled-components';
import UserInfoSection from '../entites/MyPage/UserInfoSection'; // 회원 정보 섹션 컴포넌트
import Carousel from '../entites/MyPage/Carousel'; // Carousel 컴포넌트

export default function MyPage() {
  // 버튼 4개 중 어떤 게 눌렸는지 감지하는 상태 변수와 상태 업데이트 함수
  const [isButtonClicked, setIsButtonClicked] = useState(1);

  // 현재 로그인한 사용자
  const currentUser = "성공한덕후";

  // Carousel 컴포넌트에 전달할 title과 type을 결정하는 함수
  const getCarouselProps = (buttonIndex) => {
    switch (buttonIndex) {
      case 1:
        return { type: 'story', currentUser }; // "나의 스토리" 섹션
      case 2:
        return { type: 'album', currentUser }; // "나의 앨범" 섹션
      case 3:
        return { type: 'user' }; // "저장한 유저" 섹션
      case 4:
        return { type: 'exhibition' }; // "저장한 전시" 섹션
      default:
        return { type: 'story', currentUser }; // 기본: "나의 스토리" 섹션
    }
  };

  return (
    <MainLayout>
      {/* 상단 회원 정보 섹션 */}
      <UserInfoSection />

      {/* 저장한 것들 모아보기 탭 버튼 컨테이너 */}
      <TapContainer>
        <TabButton
          isActive={isButtonClicked === 1} // 현재 버튼이 활성화된 상태인지 확인
          onClick={() => setIsButtonClicked(1)} // 버튼 클릭 시 상태 업데이트를 위한 상태함수 호출
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
          저장한 스토리
        </TabButton>
      </TapContainer>

      {/* 선택된 버튼에 따라 적절한 데이터로 Carousel 렌더링 */}
      <Carousel {...getCarouselProps(isButtonClicked)} />
    </MainLayout>
  );
}

// 페이지 전체 레이아웃
const MainLayout = styled.div`
  height: 120vh; // 페이지 높이 설정
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; // 자식 요소를 상단부터 정렬
`;

// 탭 버튼을 포함하는 컨테이너
const TapContainer = styled.div`
  display: flex;
  justify-content: space-between; // 버튼 간격 동일하게 설정
  height: 4%;
  width: calc(100% - 28rem); // 양쪽 여백을 고려한 너비
  position: sticky; // 스크롤 시 컨테이너를 고정
  margin: 40px; // 컨테이너 외부 여백
`;

// 탭 버튼 스타일
const TabButton = styled.button`
  cursor: pointer; // 마우스 오버 시 포인터 표시
  border: 1px solid #ddd; // 버튼 테두리 색상
  width: 20%; // 부모 컨테이너 기준 버튼 너비 비율
  max-width: 13.625rem; // 버튼 최대 너비
  min-width: 8rem; // 버튼 최소 너비
  height: 2.1875rem; // 버튼 높이
  flex-shrink: 0; // 버튼 크기 고정

  // 활성화된 버튼의 배경 색상
  background-color: ${({ isActive }) => (isActive ? '#0E0E0F' : '#F4F5F7')};

  // 버튼 내 텍스트 스타일
  text-align: center;
  font-family: Pretendard; // 폰트
  font-size: 0.875rem; // 폰트 크기
  font-weight: 700; // 폰트 굵기
  line-height: 133.072%; // 줄 높이
  letter-spacing: 0.03063rem; // 글자 간격

  // 활성화된 버튼의 글자 색상
  color: ${({ isActive }) => (isActive ? '#FFF' : '#5A5C62')};
`;
