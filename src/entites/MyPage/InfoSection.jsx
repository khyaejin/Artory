import React from 'react';
import styled from 'styled-components';
// 설정 이미지
import IMG from '../../assets/config.svg';

export default function InfoSection() {
  const nickName = "니모"; //닉네임
  const oneLineIntroduction = "전시 보러다니는게 유일한 취미일지도"; // 한 줄 소개
  const profileTags = "#작가전시위주 #취미 #프로N잡러"; // 나의 키워드

  return (
    <MainLayout>
      {/* 설정 아이콘 */}
      <IconContainer>
        <img src={IMG} alt="설정" />
      </IconContainer>

      {/* 회원 정보 */}
      <UserInfoContainer>
        <Row>
          <Label>닉네임</Label>
          <Content>{nickName}</Content>
        </Row>

        <Row>
          <Label>한 줄 소개</Label>
          <Content>{oneLineIntroduction}</Content>
        </Row>

        <Row>
          <Label>나의 키워드</Label>
          <Content>{profileTags}</Content>
        </Row>
      </UserInfoContainer>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column; // 세로 방향으로 배치
  width: 60%;
  height: 100%;
  padding-top: 7.5rem;
  padding-right: 14rem; // 우측 여백 추가
  box-sizing: border-box; // width, height를 padding 포함 계산하도록 설정
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end; // 오른쪽 정렬
  margin: 0; // 모든 여백 제거
  margin-bottom: 1rem; // 아래쪽 간격만 추가
  cursor: pointer;

  img {
    width: 2.23725rem;
    height: 2.3rem;
    flex-shrink: 0; // 이미지 크기 유지
  }
`;

const UserInfoContainer = styled.div`
  margin-top : 1.2rem; // 설정 아이콘으로부터 마진 설정
  display: flex;
  flex-direction: column; // 항목 세로 정렬
  gap: 15px; 
  width: 100%; 
  overflow: hidden; // 내용이 영역을 벗어나지 않도록 설정
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between; // Label과 Content를 양 끝으로 정렬
  align-items: center; // 세로방향 중앙 정렬
`;

const Label = styled.div`
  color: var(--4, #5A5C62);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 133.072%; /* 1.99606rem */
`;

const Content = styled.div`
  color: #28292A;
  text-align: left;
  width: 21.5625rem;
  height: 1.5rem;
  flex-shrink: 0;
  background-color: #F4F5F7;
  padding: 10px 15px; // 내부 여백 추가
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); // 그림자 효과 추가

  // 폰트
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 133.072%; /* 1.33075rem */
  letter-spacing: 0.035rem;
`;
