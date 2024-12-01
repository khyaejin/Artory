import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom';
import ExhibitionHover from '../../entites/Exibition/ExhibitionHover';

//이미지
import LOGO from '../../assets/logo.svg'

export default function NavigationBar() {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false); // 로그인 안되어있는 상태가 디폴트, 추후에 수정 필요

  return (
    <MainLayout>

      {/* 로고 부분 */}
      <LogoSection>
        <LogoLink
          to="/"
          selected={location.pathname === '/'}
        >

          <StyledImg src={LOGO} />
          <LogoText>ARTORY</LogoText>
        </LogoLink>
      </LogoSection>

      {/* 페이지 이동 네비게이션바 */}
      <PageSection>
      <ExhibitionWrapper>
          <StyledLink
            to="/exhibition"
            selected={location.pathname.startsWith('/exhibition')}
          >
            <div>EXHIBITION</div>
          </StyledLink>

          {/* Exhibition Hover 영역 */}
          <ExhibitionHoverWrapper>
            <ExhibitionHover />
          </ExhibitionHoverWrapper>
        </ExhibitionWrapper>

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

        {isLogin ? (
          <StyledLink
            to="/"
            selected={location.pathname === '/'}
          >
            <SignBox> {/* 클릭하면 로그아웃되어 로그인으로 바뀌는 이벤트 함수 필요 */}
              LOGOUT
            </SignBox>
          </StyledLink>
        ) : (
          <StyledLink
            to="/signin"
            selected={location.pathname === '/signin'}
          >
            <SignBox>
              LOGIN
            </SignBox>
          </StyledLink>
        )}

      </PageSection>

    </MainLayout >
  )
}


const MainLayout = styled.div`
background-color : #000;
width : 100%;
height : 3.25rem;
display : flex;
justify-content : space-between;
position: relative; // Hover를 위치시키기 위한
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
const SignBox = styled.div`
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
font-weight: ${({ selected }) => (selected ? 800 : 500)};
text-decoration: none;
display:flex;
justify-content: center;
algin-items: center;
position: relative;
`
const LogoLink = styled(Link)`
text-decoration: none;
display:flex;
justify-content: center;
algin-items: center;
color: #F5F5F5;

`;
const LogoText = styled.div`
display:flex;
align-items: center;
font-weight: 800;
`;

const ExhibitionHoverWrapper = styled.div`
  position: absolute; // MainLayout 아래 배치
  top: 100%;
  right: -8rem;
  z-index: 10;
  width: 338px;
  display: none; // 호버는 기본 값으로 숨김
`;

const ExhibitionWrapper = styled.div`
  position: relative;
  &:hover > div,
  &:hover {
    display: block;
  }

`;