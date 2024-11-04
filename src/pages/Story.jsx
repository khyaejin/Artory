import React from 'react'
import styled from 'styled-components'
import CarouselStory from '../entites/Story/CarouselStory';

export default function Stroy() {
  return (
    <StoryLayout>
      {/* <SearchExhibition></SearchExhibition> Exhibition 페이지에도 있기 때문에 shared에 해놔야할지 생각 */}
      <CarouselStory title={'인기 Story'}/>
      <CarouselStory title={'최근 Story'}/>
      <CarouselStory title={'추천 Story'}/>
    </StoryLayout>
  )
}

const StoryLayout = styled.div`
width: 100%;
display:flex;
flex-direction:column;
align-items: center;
`;
