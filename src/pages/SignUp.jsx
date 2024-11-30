import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../entites/Home/SignUpForm';

export default function SignUp() {
  return (
    <SignUpLayout>
      <Title>회원가입</Title>
      <SignUpForm />
    </SignUpLayout>
  );
}

const SignUpLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;
