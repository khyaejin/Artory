import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom';

//이미지
import LOGO from '../../assets/logo.svg'

export default function NavigationBar() {
  const location = useLocation();
  return (
    <MainLayout>

      {/* 로고 부분 */}
      <LogoSection>
        <StyledImg src={LOGO} />
        <div>Artroy</div>
      </LogoSection>

      {/* 페이지 이동 네비게이션바 */}
      <PageSection>
        <StyledLink
          to="/exhibition"
          selected={location.pathname === '/exhibition'}
        >
          <div>EXHIBITION</div>
        </StyledLink>

        <StyledLink
          to="/story"
          selected={location.pathname === '/story'}
        >
          <div>STORY</div>
        </StyledLink>

        <StyledLink
          to="/mystory"
          selected={location.pathname === '/mystory' || location.pathname === '/mystory/storywrite'}
        >
          <div>MY STORY</div>
        </StyledLink>

        <StyledLink
          to="/mypage"
          selected={location.pathname === '/mypage'}
        >
          <div>MY PAGE</div>
        </StyledLink>

        <Logout>LOGOUT</Logout>
      </PageSection>

    </MainLayout>
  )
}


const MainLayout = styled.div`
background-color : #000;
width : 100%;
height : 3.25rem;
display : flex;
justify-content : space-between;
`

const LogoSection = styled.div`
width : 2%;
display : flex;
justify-content : space-between;
align-items : center;
margin-left : 13.38rem;
color: #FFF;
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 500;
line-height: 133.072%; /* 1.16438rem */
letter-spacing: 0.03063rem;
`
const PageSection = styled.div`
width : 40%;
display : flex;
justify-content : space-between;
align-items : center;
margin-right: 13.38rem;
text-align: center;
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
line-height: 133.072%; /* 1.16438rem */
letter-spacing: 0.03063rem;
`

const StyledImg = styled.img`
width : 23px;
height : 25px;
margin-right : 0.38rem;
`
const Logout = styled.div`
color: var(--7, #A8A8B0);
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 500;
line-height: 133.072%; /* 1.16438rem */
letter-spacing: 0.03063rem;
background: var(--2, #28292A);
display: flex;
padding: 0.1875rem 0.375rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
`

const StyledLink = styled(Link)`
color: ${({ selected }) => (selected ? '#F5F5F5' : '#ABABAB')};
font-weight: ${({selected}) => (selected ? 800 : 500 )};
text-decoration: none;
`
