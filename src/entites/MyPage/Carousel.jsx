import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Stories } from '../../shared/dummy/StoryDummy';
import { Users } from '../../shared/dummy/UserDummy';
import BasicStoryImg from '../../assets/story/basic-story.svg';
import BasicUserImg from '../../assets/user/basic-user.svg';
import StandardPoster from '../../shared/components/StandardPoster';
import PREVARROW from '../../assets/prevarrow.svg';
import NEXTARROW from '../../assets/nextarrow.svg';

export default function Carousel({ type, currentUser }) {
    // 현재 유저가 작성한 스토리 필터링
    const myStories = Stories.filter(story => story.작성자 === currentUser);

    // 데이터 분류 함수
    const getData = () => {
        switch (type) {
            case 'story': // 나의 스토리: 각 스토리의 대표 이미지만 보여줌
                return myStories.map(story => ({
                    id: story.아이디,
                    poster: story.글내용.find(item => item.type === 'image')?.src || BasicStoryImg
                }));
            case 'album': // 나의 앨범: 작성한 스토리의 모든 이미지를 보여줌
                return myStories.flatMap(story => //myStories에서 검색
                    story.글내용
                        .filter(item => item.type === 'image')
                        .map(image => ({
                            id: story.아이디,
                            poster: image.src || BasicStoryImg
                        }))
                );
            case 'user': // 저장한 유저
                return Users.map(user => ({
                    id: user.id,
                    profile: user.profile || BasicUserImg
                }));
            case 'savedStory': // 저장한 스토리
                return Stories.map(story => ({ //Stories에서 검색
                    id: story.아이디,
                    poster: story.글내용.find(item => item.type === 'image')?.src || BasicStoryImg
                }));
            default:
                return [];
        }
    };

    const data = getData();

    // 캐러셀 설정
    const infinite = data.length > (type === 'user' ? 6 : 4); // 데이터 개수에 따라 무한 스크롤 여부 결정

    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <PrevArrow onClick={onClick}>
                <img src={PREVARROW} alt="prev" />
            </PrevArrow>
        );
    };

    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <NextArrow onClick={onClick}>
                <img src={NEXTARROW} alt="next" />
            </NextArrow>
        );
    };

    const settings = {
        arrows: true,
        infinite: infinite,
        speed: 800,
        slidesToShow: type === 'user' ? 6 : 4,
        slidesToScroll: type === 'user' ? 6 : 4,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    return (
        <CarouselLayout>
            <CarouselContainer>
                <StyledSlider {...settings}>
                    {data.map((item, i) => (
                        <SlideItem key={i}>
                            {type === 'user' ? (
                                <UserAvatar src={item.profile} alt={`User ${item.id}`} />
                            ) : (
                                <StandardPoster id={item.id} poster={item.poster} />
                            )}
                        </SlideItem>
                    ))}
                </StyledSlider>
            </CarouselContainer>
        </CarouselLayout>
    );
}


const CarouselLayout = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CarouselContainer = styled.div`
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

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

const SlideItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const UserAvatar = styled.img`
  width: 129px;
  height: 129px;
  object-fit: cover;
`;
