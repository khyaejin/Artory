import React from 'react'
import styled from 'styled-components'
// 프로필 이미지
import IMG from '../../assets/profileImg.svg'


export default function ProfileSection() {
    const userName = "니모";

    return (
        <MainLayout>

            <ProfileContainer>
                <span>
                    {userName}님의 <br></br>
                    마이페이지
                </span>
                <ProfileImg src={IMG} />
            </ProfileContainer>

        </MainLayout>
    )
}


const MainLayout = styled.div`
display : flex;
width : 40%;
height: 100%;
justify-content : space-between;
`

const ProfileContainer = styled.div`
display : flex;
margin-top : 5.94rem; // 위쪽 간격 조정
margin-left : 13.31rem; // 좌측 간격 조정
flex-direction : column;
line-height: 133.072%; // 2.49513rem
letter-spacing: 0.06563rem;
gap : 1rem; // 글씨와 프로필 이미지 간의 거리 조정

color: #000;
font-family: Pretendard;
font-size: 1.875rem;
font-style: normal;
font-weight: 700;
`

const ProfileImg = styled.img`
width: 10.5625rem;
height: 10.75rem;
flex-shrink: 0;
`;

