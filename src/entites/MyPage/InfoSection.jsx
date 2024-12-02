import React from 'react';
import styled from 'styled-components';
import { Users } from '../../shared/dummy/UserDummy';// UserDummy 데이터 가져오기

import IMG from '../../assets/config.svg'; // 설정 이미지

export default function InfoSection() {

  // Users에서 id=1 데이터 가져오기 -> 백엔드 로직 추가 이후 수정
  const userData = Users.find((user) => user.id === 1);

  const nickName = userData?.nickName || '닉네임 없음'; // 데이터가 없을 경우 
  const oneLineIntroduction = userData?.oneLineIntroduction || '소개 없음';
  const profileTags = userData?.profileTags || '키워드 없음'; 

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
  flex-direction: column;
  width: 60%;
  height: 100%;
  padding-top: 7.5rem;
  padding-right: 14rem;
  box-sizing: border-box;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  margin-bottom: 1rem;
  cursor: pointer;

  // 이미지
  img {
    width: 2.23725rem;
    height: 2.3rem;
    flex-shrink: 0;
  }
`;

const UserInfoContainer = styled.div`
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  color: var(--4, #5a5c62);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 133.072%;
`;

const Content = styled.div`
  color: #28292a;
  text-align: left;
  width: 21.5625rem;
  height: 1.5rem;
  flex-shrink: 0;
  background-color: #f4f5f7;
  padding: 10px 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  // 폰트
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 133.072%;
  letter-spacing: 0.035rem;
`;
