import React from 'react';
import styled from 'styled-components';
// 프로필 이미지 (기본 이미지 설정)
import DefaultIMG from '../../assets/user/basic-user.svg';

export default function ProfileSection() {
    // localStorage에서 데이터 가져오기
    const userName = localStorage.getItem('nickname') || '게스트'; // 닉네임 없을 경우 게스트로 설정
    const profileImg = localStorage.getItem('profileImage') || DefaultIMG; // 프로필 이미지 없을 경우 기본 이미지

    return (
        <MainLayout>
            <ProfileContainer>
                <Title>
                {userName}님의 <br />
                마이페이지
                </Title>
                <ProfileImg src={profileImg} alt="프로필 이미지" />
            </ProfileContainer>
        </MainLayout>
    );
}

const MainLayout = styled.div`
    display: flex;
    width: 40%;
    height: 100%;
    justify-content: space-between;
`;

const ProfileContainer = styled.div`
    display: flex;
    margin-top: 5.94rem; // 위쪽 간격 설정
    margin-left: 14rem; // 좌측 간격 설정
    flex-direction: column;
    line-height: 133.072%; // 2.49513rem
    letter-spacing: 0.06563rem;
    gap: 1rem; // 글씨와 프로필 이미지 간의 거리 설정

    color: #000;
    font-family: Pretendard;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
`;

const ProfileImg = styled.img`
    width: 10.5625rem;
    height: 10.75rem;
    flex-shrink: 0;
`;

const Title = styled.div`
color: #000;
font-family: Pretendard;
font-size: 1.875rem;
font-style: normal;
font-weight: 700;
line-height: 133.072%; /* 2.49513rem */
letter-spacing: 0.06563rem;
`;
