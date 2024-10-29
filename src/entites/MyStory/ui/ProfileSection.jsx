import React from 'react'
import styled from 'styled-components'

//이미지
import IMG from '../../../assets/profileImg.svg'

//컴포넌트
import StandardButton from '../../../shared/components/StandardButton'

export default function ProfileSection() {
    return (
        <MainLayout>

            <ProfileContainer>
                <ProfileImg src={IMG} />
                <span>니모님의 기록</span>
            </ProfileContainer>

            <StandardButton text="스토리 작성하기" width="10.55669rem" height="2.1875rem" marginRight="13.38rem"/>

        </MainLayout>
    )
}

const MainLayout = styled.div`
display : flex;
width : 100%;
justify-content : space-between;
margin-top : 5.94rem;
`

const ProfileContainer = styled.div`
display : flex;
flex-direction : column;
color: #000;
font-family: Pretendard;
font-size: 1.875rem;
font-style: normal;
font-weight: 700;
line-height: 133.072%; /* 2.49513rem */
letter-spacing: 0.06563rem;
margin-left : 13.31rem;
`

const ProfileImg = styled.img`
width: 5.9375rem;
height: 5.9375rem;
flex-shrink: 0;
`;
