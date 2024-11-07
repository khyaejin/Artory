import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Stories } from '../../shared/dummy/StoryDummy';
import StandardPoster from '../../shared/components/StandardPoster';
import { Users } from '../../shared/dummy/UserDummy';

import PREVARROW from '../../assets/prevarrow.svg';
import NEXTARROW from '../../assets/nextarrow.svg';

export default function Carousel({ title, type }) {
    // 작성 날짜 기준으로 정렬(최신 스토리)
    const sortedStories = [...Stories].sort((a, b) => new Date(b.작성날짜) - new Date(a.작성날짜));
    // 좋아요 수 기준 내림차순 정렬(인기 스토리)
    const popularStories = [...Stories].sort((a, b) => b.좋아요 - a.좋아요);
    // 랜덤으로 내림차순 정렬(추천 스토리)
    const recommendedStories = [...Stories].sort(() => 0.5 - Math.random()) // 무작위 정렬

    const data = type === 'user'
        ? Users
        : title === '인기 스토리'
            ? popularStories
            : title === '최근 스토리'
                ? sortedStories
                : recommendedStories; // 추천 스토리가 기본값

    const numItems = Stories.length;
    const infinite = numItems < (type === 'user' ? 6 : 4) ? false : true;
    const CustomPrevArrow = (props) => {
        const { style, onClick } = props;
        return (
            <PrevArrow
                style={{ ...style }}
                onClick={onClick}
            >
                <img src={PREVARROW} />
            </PrevArrow>
        )
    }
    const CustomNextArrow = (props) => {
        const { style, onClick } = props;
        return (
            <NextArrow
                style={{ ...style }}
                onClick={onClick}
            >
                <img src={NEXTARROW} />
            </NextArrow>
        )
    }
    const settings = {
        arrows: true,
        infinite: infinite,
        speed: 800,
        slidesToShow: type === 'user' ? 6 : 4,
        slidesToScroll: type === 'user' ? 6 : 4,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    }

    return (
        <CarouselStoryLayout>
            <StoryTItle>{title}</StoryTItle>
            <CarouselStoryContainer>
                <StyledSlider {...settings}>

                    {
                        data.map((item, i) => (
                            <SlideItem key={i}>
                                {type === 'user' ? (
                                    <UserProfileImg src={item.profile} alt={item.name} /> // 유저 이미지 컴포넌트 사용
                                ) : (
                                    <StandardPoster index={i} poster={item.포스터} />
                                )}
                            </SlideItem>
                        ))
                    }

                </StyledSlider>
            </CarouselStoryContainer>
        </CarouselStoryLayout>
    )
}

const CarouselStoryLayout = styled.div`
width: 70%;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
`;

const StoryTItle = styled.h3`
width: 100%;
`;

const CarouselStoryContainer = styled.div`
position: relative;
width: 100%;


`;
const PrevArrow = styled.div`
position: absolute;
top: 50%;
left: -25px; 
transform: translate(0, -50%);
cursor: pointer;
z-index: 1;
`;

const NextArrow = styled.div`
position: absolute;
top: 50%;
right: -25px;
transform: translate(0, -50%);
cursor: pointer;
z-index: 1;
`;

const SlideItem = styled.div`
width: 100%;
display: flex;
justify-content: center;

`;
const StyledSlider = styled(Slider)`

  .slick-track {
    display: flex;

        padding-bottom: 0;
    margin-bottom: 0;

  }

  .slick-slide {
    display: flex;
    justify-content: center;
        padding-bottom: 0;
    margin-bottom: 0;

  }

`;

const UserProfileImg = styled.img`
width: 129px;
height: 129px;
`;