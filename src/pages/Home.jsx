import React, { useState } from 'react'
import styled from 'styled-components'
import MainBannerSection from '../entites/Home/MainBannerSection'
import PosterSection from '../entites/Home/PosterSection'
import LoginSection from '../entites/Home/MainBanner'

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <MainLayout>
      {/* 좌측 제목 섹션 */}
      <MainBannerSection  isClicked={isClicked} setIsClicked={setIsClicked}></MainBannerSection>

      {/* 우측 포스터 섹션 */}
      {
        isClicked ? 
        <LoginSection/> :  // 로그인 버튼 클릭 후 : 로그인 섹션
        <PosterSection></PosterSection> //로그인 버튼 클릭 전 : 포스터 섹션
      }

    </MainLayout>
  )
}

const MainLayout = styled.div`
height : 85vh;
display : flex;
align-items : center;
// background-color :green;
`