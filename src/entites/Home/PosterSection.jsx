import React from 'react';
import styled from 'styled-components';
import posterImg from '../../assets/home-poster.svg';

export default function PosterSection() {
  return (
    <MainPosterSection>
      <BlurredBackground />
      <PosterImage src={posterImg} alt="Poster" />
    </MainPosterSection>
  );
}

const MainPosterSection = styled.div`
  width: 50%;
  height: 100%;
  flex-shrink: 0;
  position: relative; /* 부모 */
  overflow: hidden; /* 블러 처리된 배경이 섹션 밖으로 나가는 것 방지 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlurredBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${posterImg});
  background-size: cover;
  background-position: center;
  filter: blur(8px); /* 블러 효과 */
  z-index: 1; /* 제일 뒤로 배치 */

  /* 반투명 검정색 배경 추가 */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* 40%의 검정색 반투명 */
    z-index: 2; /*  블러 처리 앞,PosterImage 뒤  */
  }
`;

const PosterImage = styled.img`
  position: relative;
  z-index: 3; /* 블러 처리, 검정 반투명 처리 앞 */
  width: auto;
  height: 80%; 
`;
