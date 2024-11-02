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
        const {style, onClick} = props;
        return (
            <PrevArrow
            style={{ ...style }}
            onClick={onClick}
            >
                <img src={PREVARROW}/>
            </PrevArrow>
        )
    }
    const CustomNextArrow = (props) => {
        const {style, onClick} = props;
        return (
            <NextArrow
            style={{ ...style }}
            onClick={onClick}
            >
                <img src={NEXTARROW}/>
            </NextArrow>
        )
    }
    const settings = {
        arrows: true,
        infinite: infinite,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow/>

    }
    
    return (
        <CarouselStoryLayout>
            <StoryTItle>{title}</StoryTItle>
            <CarouselStoryContainer>
                <Slider {...settings}>
                    {
                        Stories.map((data, i) => (
                            <StandardPoster key={i} poster={data.포스터} />
                        ))
                    }
                </Slider>
            </CarouselStoryContainer>
        </CarouselStoryLayout>
    )
}

const CarouselStoryLayout = styled.div`
width: 80%;

`;

const StoryTItle = styled.h3`

`;

const CarouselStoryContainer = styled.div`
position: relative;
`;
const PrevArrow = styled.div`
position: absolute;
top: 50%;
left: -25px; /* 원하는 위치로 조정 */
transform: translate(0, -50%);
cursor: pointer;
z-index: 1;
`;

const NextArrow = styled.div`
position: absolute;
top: 50%;
right: -25px; /* 원하는 위치로 조정 */
transform: translate(0, -50%);
cursor: pointer;
z-index: 1;
`;
