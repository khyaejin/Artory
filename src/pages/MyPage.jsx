import React from 'react'
import styled from 'styled-components'
import UserInfoSection from '../entites/MyPage/UserInfoSection';
import MyCollectionsSection from '../entites/MyPage/MyCollectionsSection';

export default function MyPage() {
  return (
    <MainLayout>

        {/* 회원 정보 섹션 섹션 */}
        <UserInfoSection></UserInfoSection>

        {/* 저장한 것들 모아보기 섹션 */}
        <MyCollectionsSection></MyCollectionsSection>

    </MainLayout>
  )
}

const MainLayout = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
