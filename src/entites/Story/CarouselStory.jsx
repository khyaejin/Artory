import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Stories } from '../../shared/dummy/StoryDummy';
import StandardPoster from '../../shared/components/StandardPoster';

import PREVARROW from '../../assets/prevarrow.svg';
import NEXTARROW from '../../assets/nextarrow.svg';

export default function CarouselStory({ title }) {
    const numItems = Stories.length;
    const infinite = numItems < 4 ? false : true;
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
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    }

    return (
        <CarouselStoryLayout>
            <StoryTItle>{title}</StoryTItle>
            <CarouselStoryContainer>
                <StyledSlider {...settings}>

                    {
                        Stories.map((data, i) => (
                            <SlideItem >
                                <StandardPoster key={i} index={i} poster={data.포스터} />
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