import React from 'react';
import styled from 'styled-components';
// 설정 이미지
import IMG from '../../assets/config.svg';

export default function InfoSection() {
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
          <Content>니모</Content>
        </Row>

        <Row>
          <Label>한 줄 소개</Label>
          <Content>전시 보러다니는게 유일한 취미일지도</Content>
        </Row>

        <Row>
          <Label>나의 키워드</Label>
          <Content>#작가전시 위주 #취미 #프로N잡러</Content>
        </Row>
      </UserInfoContainer>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column; // 세로 방향으로 배치
  width: 60%; // 레이아웃 너비 제한
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
  img {
    width: 2.23725rem;
    height: 2.3rem;
    flex-shrink: 0; // 이미지 크기 유지
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column; // 항목 세로 정렬
  gap: 15px; // 항목 간 간격
  width: 100%; // MainLayout 내부에 맞춤
  overflow: hidden; // 내용이 영역을 벗어나지 않도록 처리
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between; // Label과 Content를 양 끝 정렬
  align-items: center; // 세로 방향 중앙 정렬
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  width: 25%; // Label과 Content 간 비율 조정
`;

const Content = styled.div`
  font-size: 16px;
  color: #666;
  width: 70%; // Label과 Content 간 비율 조정
  text-align: left;
  background-color: #fff;
  padding: 10px 15px; // 내부 여백
  border-radius: 5px; // 모서리 둥글게 처리
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); // 약간의 그림자 효과
`;
