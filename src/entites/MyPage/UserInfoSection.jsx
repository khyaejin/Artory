import React,{useState} from 'react'
import styled from 'styled-components'
import ProfileSection from './ProfileSection';
import InfoSection from './InfoSection';

{/* 회원 정보 섹션 섹션 */}
export default function UserInfoSection() {

  return (
    <MainLayout>

        {/* 프로필과 버튼 섹션 */}
        <ProfileSection></ProfileSection>

        <InfoSection>정보 섹션</InfoSection>

        </MainLayout>
    );
}

const MainLayout = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;