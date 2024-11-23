import React from 'react'
import styled from 'styled-components';

{/* 저장한 것들 모아보기 섹션 */}
export default function MyStory() {
  return (
    <MainLayout>
        나의 스토리
    </MainLayout>
  )
}

const MainLayout = styled.div`
  height: 40%;
  background-color: red;
  width: calc(100% - 28rem); // 양쪽 14rem 여백을 고려해 너비 계산
  display: flex;
  margin: 0 auto; // 가운데 정렬
  box-sizing: border-box; // width와 height 계산에 padding 포함
`;

