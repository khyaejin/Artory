import React from 'react';
import styled from 'styled-components';

export default function LoginSection() {
  return (
    <MainLayout>
      <p>로그인섹션</p>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  width: 50%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* 텍스트 색상 */
  font-size: 16px;
  font-family: Arial, sans-serif;
`