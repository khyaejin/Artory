import React from 'react';
import styled from 'styled-components';
import StandardButton from '../../shared/components/StandardButton';

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
          <SocialButton bgColor="#1E8C4E" color="white">네이버 로그인</SocialButton>
          <SocialButton bgColor="#FEE500" color="black">카카오 로그인</SocialButton>
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
    // background-color: red;
`;

const LoginBox = styled.div`
    width: 40%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InputField = styled.input`
    width: 20.375rem;
    height: 3.125rem;
    flex-shrink: 0;
    margin-bottom: 1rem; // 인풋 필드간 간격

    // box
    border: 1px solid rgba(171, 171, 171, 0.02);
    background: #FFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
    
    // font
    color: #A6A9AF;
    font-family: Pretendard;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.0325rem;
    padding: 0 1rem;
    outline: none;
    border-radius: 5px;

    &:focus {
        border: 1px solid #A6A9AF;
    }
`;

const BottomLinks = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-size: 14px;
    margin-bottom: 20px;
`;

const LinkItem = styled.a`
    color: #9C9C9C;
    font-family: Pretendard;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.0325rem;
    text-decoration: none;
`;

const SocialLogin = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SocialButton = styled.button`
  width: 48%;
  padding: 12px;
  font-size: 16px;
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
