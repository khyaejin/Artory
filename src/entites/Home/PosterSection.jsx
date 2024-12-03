import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../css/posterSection.css'; // 스와이퍼 색상 커스텀한 css 파일 임포트 (파랑->흰)

import posterImg from '../../assets/poster/0.svg';
import posterImg1 from '../../assets/poster/1.svg';
import posterImg2 from '../../assets/poster/2.svg';
import posterImg3 from '../../assets/poster/3.svg';
import posterImg4 from '../../assets/poster/4.svg';
import posterImg5 from '../../assets/poster/5.svg';

export default function PosterSection() {
  // 슬라이더에 사용할 이미지 배열
  const posterImages = [
    posterImg,
    posterImg1,
    posterImg2,
    posterImg3,
    posterImg4,
    posterImg5,
  ];

  return (
    <MainPosterSection>
      <Swiper
        spaceBetween={30} // 슬라이드 간격
        centeredSlides={true} // 슬라이드가 중앙에 위치
        autoplay={{
          delay: 6000, // 6초마다 전환
          disableOnInteraction: false, // 상호작용해도 전환 유지
        }}
        pagination={{
          clickable: true, // 페이지네이션 클릭 가능
        }}
        modules={[Autoplay, Pagination, Navigation]} // 사용 모듈 등록
        className="posterSwiper"
      >
        {posterImages.map((image, index) => (
          <SwiperSlide key={index}>
            {/* 블러 처리된 배경 */}
            <BlurredBackground backgroundImage={image} />
            {/* 메인 포스터 이미지 */}
            <PosterImage src={image} alt={`Poster ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </MainPosterSection>
  );
}


// 메인 포스터 섹션 스타일
const MainPosterSection = styled.div`
  background: rgba(0, 0, 0, 0.40);
  width: 57%; // 부모 요소 너비
  height: 100%; // 부모 요소 높이
  flex-shrink: 0;
  position: relative; // 자식 요소들의 위치 설정을 위해 relative 사용
  overflow: hidden; // 부모 영역을 넘는 요소 숨김
  display: flex;
  justify-content: center; // 포스터 이미지를 가로 중앙 정렬
  
`;

// 블러 처리된 배경 스타일
const BlurredBackground = styled.div`
  position: absolute; // 부모 안에서 절대 위치
  top: 0;
  left: 0;
  width: 100%; // 부모 요소에 꽉 차도록 
  height: 100%; // 부모 요소에 꽉 차도록 
  background-image: url(${(props) => props.backgroundImage}); // 동적으로 배경 이미지 설정
  background-position: center; // 배경 이미지를 가운데에 맞춤
  filter: blur(8px); // 블러 효과 
  z-index: 1; // 제일 뒤로 배치 

   // 반투명 검정색 배경 추가 
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); // 40%의 검정색 반투명
    z-index: 2; //  블러 처리 앞,PosterImage 뒤 
  }
`;

// 메인 포스터 이미지 스타일
const PosterImage = styled.img`
  position: relative;
  width: auto;
  height: 80%; 
  padding-top:4rem;
  padding-left:15rem;
  // width: 25.6875rem; 
  // height: 33.6875rem; 
  flex-shrink: 0; // 부모 크기에 영향을 받지 않음
  position: relative; // 블러 배경과 독립적인 위치 설정
  z-index: 3; // 블러 처리, 검정 반투명 처리 앞 
`;