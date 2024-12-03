import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Stories } from '../../shared/dummy/StoryDummy';
import StandardPoster from '../../shared/components/StandardPoster';
import { Users } from '../../shared/dummy/UserDummy';
import { Exhibitions } from '../../shared/dummy/ExhibitionDummy';

import PREVARROW from '../../assets/prevarrow.svg';
import NEXTARROW from '../../assets/nextarrow.svg';

export default function Carousel({ title, type }) {
    // 현재 날짜를 기준으로 임박한 전시 확인 위함
    const now = new Date();
    
    // 현재 날짜에서 세달 전 계산
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(now.getMonth() - 3);

    const selectedCategories = JSON.parse(localStorage.getItem('userSelectedTopics')) || [];

    // 인기 전시 : 좋아요 순으로 정렬 6개 보여주기
    const popularExhibitions = [...Exhibitions].sort((a, b) => b.좋아요 - a.좋아요).slice(0, 6);
    // 최근 전시 : 시작일 기준 내림차순으로 정렬하고 6개만 보여주기
    const recentExhibitions = [...Exhibitions].sort((a, b) => new Date(b.기간.split('~')[0]) - new Date(a.기간.split('~')[0])).slice(0, 6);
    // 추천 전시 : 로컬 스토리지에서 선택된 카테고리를 가져와 추천 전시를 6개 필터링
    const recommendedExhibitions = (exhibitions, selectedCategories, count = 6) => {
        if (!selectedCategories || selectedCategories.length === 0) {
            // 선택된 카테고리가 없으면 랜덤으로 추천
            return exhibitions
                .sort(() => Math.random() - 0.5)
                .slice(0, count);
        }
    
        // 선택된 카테고리가 있으면 해당 카테고리에 맞는 전시 필터링
        return exhibitions
            .filter((exhibition) =>
                exhibition.카테고리.some((category) => selectedCategories.includes(category))
            )
            .sort(() => Math.random() - 0.5) // 랜덤 정렬
            .slice(0, count); // 상위 count개 선택
    };
  
    // 최근 추천 전시 : 로컬 스토리지의 카테고리 및 기간 기준
    const recentRecommendedExhibitions = (exhibitions, selectedCategories, count = 6) => {
        const now = new Date();
        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(now.getMonth() - 3);
  
        const filteredExhibitions = exhibitions.filter((exhibition) => {
            const startDate = new Date(exhibition.기간.split('~')[0].trim());
            return startDate >= threeMonthsAgo && startDate <= now; // 3달 전부터 오늘까지 시작한 전시
        });
  
        if (!selectedCategories || selectedCategories.length === 0) {
            // 선택된 카테고리가 없으면 최근 전시 중 랜덤 선택
            return filteredExhibitions
            .sort(() => Math.random() - 0.5)
            .slice(0, count);
        }   
  
        // 선택된 카테고리가 있으면 필터링 후 랜덤 선택
        return filteredExhibitions
            .filter((exhibition) =>
                exhibition.카테고리.some((category) => selectedCategories.includes(category))
            )
            .sort(() => Math.random() - 0.5) // 랜덤 정렬
            .slice(0, count);
    };
    
    // 임박한 전시 : 종료일이 가장 임박한 순서로 정렬 후 6개 보여주기
    const upcomingExhibitions = [...Exhibitions]
        .filter(exhibition => new Date(exhibition.기간.split('~')[1]) >= now)
        .sort((a, b) => new Date(a.기간.split('~')[1]) - new Date(b.기간.split('~')[1]))
        .slice(0, 6);

    
    // 전시 목록 조회
    const getExhibition = (title) => {
        switch (title) {
            case '인기 전시':
                return popularExhibitions;
            case '최근 전시':
                return recentExhibitions;
            case '추천 전시':
                return recommendedExhibitions([...Exhibitions], selectedCategories);
            case '최근 추천 전시':
                return recentRecommendedExhibitions([...Exhibitions], selectedCategories);
            case '임박한 전시':
                return upcomingExhibitions;
            default:
                return Exhibitions;
        }
    };


    // 작성 날짜 기준으로 정렬(최신 스토리)
    const sortedStories = [...Stories].sort((a, b) => new Date(b.작성날짜) - new Date(a.작성날짜));
    // 좋아요 수 기준 내림차순 정렬(인기 스토리) 6개만 보여주기
    const popularStories = [...Stories].sort((a, b) => b.좋아요 - a.좋아요).slice(0,6);
    // 랜덤으로 내림차순 정렬(추천 스토리) 6개만 보여주기
    const recommendedStories = [...Stories].sort(() => 0.5 - Math.random()); // 무작위 정렬

    // 스토리 조회
    const getStory = (title) => {
        switch (title) {
            case '인기 Story':
                return popularStories;
            case '최근 Story':
                return sortedStories;
            default: // 추천 스토리가 기본 값
                return recommendedStories;
        }
    };

    const data = type === 'user'
    ? Users
    : type === 'exhibition'
        ? getExhibition(title)
        : getStory(title);

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
            <StoryTitle>{title}</StoryTitle>
            <CarouselStoryContainer>
                <StyledSlider {...settings}>

                    {
                        data.map((item, i) => (
                            <SlideItem key={i}>
                                {type === 'user' ? (
                                    <UserProfileImg src={item.profile} alt={item.name} /> // 유저 이미지 컴포넌트 사용
                                ) : (
                                    <StandardPoster id={item.아이디} poster={item.포스터} />
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

const StoryTitle = styled.h2`
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