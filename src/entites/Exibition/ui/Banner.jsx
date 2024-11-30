import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Exhibitions } from '../../../shared/dummy/ExhibitionDummy';
import { useNavigate } from 'react-router-dom';

const PosterImg = styled.img`
  width: 339px;
  height: 489px;
  cursor: pointer; 
  object-fit: cover; 
`;

const BannerLayout = styled.div`
  text-align: center;
  margin : 90px 0px 0px 0px;
  overflow: hidden;
  .swiper-pagination-bullet-active {
    background: #ffffff;
  }
  .swiper-pagination {
    position: relative;
    top: 50px;
  }
  .swiper-pagination-bullet {
    background: #ffffff;
    width: 10px;
    height: 10px;
  }
    .swiper-slide-shadow-left {
    width : 300px;
  }
`;

export default function Banner() {
  const [randomExhibitionData, setRandomExhibitionData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { // Exhibitions를 랜덤하게 섞기
    const shuffledData = [...Exhibitions].sort(() => 0.5 - Math.random()).slice(0, 12);
    setRandomExhibitionData(shuffledData);
  }, []);

  const handlePosterClick = (id) => {
    navigate(`/exhibition/${id}`); // 클릭 시 해당 페이지로 이동
  };

  return (
    <BannerLayout>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        spaceBetween={1}
        initialSlide={6}
        loop={true} // 무한 로드
        loopedSlides={3} // 복사본 슬라이드
        loopAdditionalSlides={5} // 추가 슬라이드 생성
        lazy={true} // Lazy 로딩 활성화
        preloadImages={true} // 이미지 미리 로드
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {randomExhibitionData.slice(0, 11).map((item, index) => (
          <SwiperSlide key={index}>
            <PosterImg src={item.포스터} alt={item.제목} onClick={() => handlePosterClick(item.아이디)}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </BannerLayout>
  );
}