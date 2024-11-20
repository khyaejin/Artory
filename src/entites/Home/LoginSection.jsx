import React from 'react';
import styled from 'styled-components';
import StandardButton from '../../shared/components/StandardButton';
import NaverLoginButtonImage from '../../assets/naver_login_large_narrow 2.svg';
import KakaoLoginButtonImage from '../../assets/kakao_login_large_narrow 2.svg';

export default function LoginSection() {
  return (
    <MainLayout>
      <LoginBox>
        <InputField type="email" placeholder="이메일을 입력해주세요" />
        <InputField type="password" placeholder="비밀번호를 입력해주세요" />

        <StandardButton text="로그인" width="100%" height="3.25rem" marginRight="0" />

        <BottomLinks>
          <LinkItem>아이디 찾기</LinkItem>
          <LinkItem>비밀번호 찾기</LinkItem>
          <LinkItem>회원가입</LinkItem>
        </BottomLinks>

        <SocialLogin>
          <SocialButton>
            <img src={NaverLoginButtonImage} alt="네이버 로그인" />
          </SocialButton>
          <SocialButton>
            <img src={KakaoLoginButtonImage} alt="네이버 로그인" />
          </SocialButton>
        </SocialLogin>
      </LoginBox>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 로그인 관련 전체
const LoginBox = styled.div`
  width: 35%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 이메일, 비밀번호 입력 필드
const InputField = styled.input`
  display: flex;
  width: 90%;
  height: 3.125rem;
  flex-shrink: 0;
  margin-bottom: 1rem;

  border: 1px solid rgba(171, 171, 171, 0.02);
  background: #FFF;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
  
  // 글씨
  color: #A6A9AF;
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.0325rem;
  padding: 0 1rem;
  outline: none;

  &:focus {
    border: 1px solid #A6A9AF;
  }
`;

// 찾기
const BottomLinks = styled.div`
	margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
  margin-bottom: 20px;
`;

// 찾기
const LinkItem = styled.a`
  cursor: pointer;
  color: #9C9C9C;
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0325rem;
  text-decoration: none;
`;

// 소셜 로그인 관련 전체
const SocialLogin = styled.div`
  width: 100%;
	height: 3rem; // 높이를 줄이기 위해 명시적으로 설정
  display: flex;
  justify-content: space-between; // 양쪽 끝에 버튼 배치
  gap: 1rem; // 버튼들 사이 간격
`;

// 소셜 로그인 버튼
const SocialButton = styled.div`
  flex: 1; // 버튼들이 동일한 넓이를 가지도록
  max-width: 48%; // 버튼 크기를 부모 대비 최대 제한
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; // 버튼 클릭 가능하게 설정
  overflow: hidden; // 이미지가 버튼 크기를 넘지 않도록 잘라내기

  img {
    width: 135%; 
		height: auto;
    object-fit: cover; // 이미지 비율 유지
  }
`;



