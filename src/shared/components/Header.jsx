import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ExhibitionHover from '../../entites/Exibition/ExhibitionHover';
import Modal from './Modal';

//이미지
import LOGO from '../../assets/logo.svg';

export default function NavigationBar({ isLogin, setIsLogin }) {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate 추가
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const handleLogout = () => {
    setIsLogin(false); // 로그인 상태를 false로 변경
    localStorage.removeItem('userToken'); // 로컬 스토리지에서 토큰 삭제
    setIsModalOpen(true); // 모달 열기

    setTimeout(() => {
      setIsModalOpen(false); // 모달 닫기
      navigate('/'); // Home 페이지로 리다이렉트
    }, 2000); // 2초 동안 모달 표시 후 이동
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <MainLayout>
      {/* 로고 부분 */}
      <LogoSection>
        <LogoLink to="/" selected={location.pathname === '/'}>
          <StyledImg src={LOGO} />
          <LogoText>ARTORY</LogoText>
        </LogoLink>
      </LogoSection>

      {/* 페이지 이동 네비게이션바 */}
      <PageSection>
        <ExhibitionWrapper>
          <StyledLink to="/exhibition" selected={location.pathname.startsWith('/exhibition')}>
            <div>EXHIBITION</div>
          </StyledLink>

          {/* Exhibition Hover 영역 */}
          <ExhibitionHoverWrapper>
            <ExhibitionHover />
          </ExhibitionHoverWrapper>
        </ExhibitionWrapper>

        <StyledLink to="/story" selected={location.pathname === '/story'}>
          <div>STORY</div>
        </StyledLink>

        <StyledLink
          to="/mystory"
          selected={location.pathname === '/mystory' || location.pathname === '/mystory/storywrite'}
        >
          <div>MY STORY</div>
        </StyledLink>

        <StyledLink to="/mypage" selected={location.pathname === '/mypage'}>
          <div>MY PAGE</div>
        </StyledLink>

        {isLogin ? (
          <SignBox onClick={handleLogout}>LOGOUT</SignBox>
        ) : (
          <StyledLink to="/login" selected={location.pathname === '/login'}>
            <SignBox>LOGIN</SignBox>
          </StyledLink>
        )}
      </PageSection>

      {/* 모달 컴포넌트 */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content="로그아웃 되었습니다." // 모달 내용
      />
    </MainLayout>
  );
}

const MainLayout = styled.div`
  background-color: #000;
  width: 100%;
  height: 3.25rem;
  display: flex;
  justify-content: space-between;
  position: relative; // Hover를 위치시키기 위한
`;

const LogoSection = styled.div`
  width: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 13.38rem;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 133.072%; /* 1.16438rem */
  letter-spacing: 0.03063rem;
`;

const PageSection = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 13.38rem;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  line-height: 133.072%; /* 1.16438rem */
  letter-spacing: 0.03063rem;
`;

const StyledImg = styled.img`
  width: 23px;
  height: 25px;
  margin-right: 0.38rem;
`;

const SignBox = styled.div`
  color: var(--7, #a8a8b0);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 133.072%; /* 1.16438rem */
  letter-spacing: 0.03063rem;
  background: var(--2, #28292a);
  display: flex;
  padding: 0.1875rem 0.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

const StyledLink = styled(Link)`
  color: ${({ selected }) => (selected ? '#f5f5f5' : '#ababab')};
  font-weight: ${({ selected }) => (selected ? 800 : 500)};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f5f5f5;
`;

const LogoText = styled.div`
  display: flex;
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
