import React from 'react'
import styled from 'styled-components'
import Carousel from '../entites/Story/Carousel';

export default function Stroy() {
  return (
    <StoryLayout>
      {/* <SearchExhibition></SearchExhibition> Exhibition 페이지에도 있기 때문에 shared에 해놔야할지 생각 */}
      <Carousel title={'인기 Story'} type={'story'}/>
      <Carousel title={'최근 Story'} type={'story'}/>
      <Carousel title={'추천 Story'} type={'story'}/>
      <Carousel title={'추천 유저'} type={'user'}/>
    </StoryLayout>
  )
}

const StoryLayout = styled.div`
width: 100%;
display:flex;
flex-direction:column;
align-items: center;
`;
