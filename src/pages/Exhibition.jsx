import React, { useState } from 'react'
import styled from 'styled-components'
import Banner from '../entites/Exibition/ui/Banner';
import Carousel from '../entites/Story/Carousel';
import Search from '../entites/Story/Search';
import StandardPoster from '../shared/components/StandardPoster';

export default function Exhibition() {
  const [searchExhibition, setSearchExhibitions] = useState([]); // 검색하고자 하는 전시를 저장하는 배열
  return (
    <ExhibitionLayout>
      {/* 스와이퍼 배너 영역 */}
      <BannerWrapper> 
        {/* 배너 컴포넌트 */}
        <Banner/>
      </BannerWrapper>

      {/* 검색바 컴포넌트 */}
      <Search searchItems={searchExhibition} setSearchItems={setSearchExhibitions} placeholder="원하는 전시를 검색해보세요" type="exhibition"/> {/* Story 페이지와는 다르게 placeholer 추가 */}
      {searchExhibition.length > 0 ? (
        <>
        <SearchResultLayout>
          {searchExhibition.map((data) => (
            <SearchPosterBox key={data.아이디}>
              <StandardPoster id={data.아이디} poster={data.포스터} />
            </SearchPosterBox>
          ))}
          </SearchResultLayout>
        </>
      ) : (
        <>
        {/* 캐러셀 */}
          <Carousel title={'인기 전시'} type={'exhibition'} />
          <Carousel title={'최근 전시'} type={'exhibition'} />
          <Carousel title={'추천 전시'} type={'exhibition'} />     
          <Carousel title={'최근 추천 전시'} type={'exhibition'} />
          <Carousel title={'임박한 전시'} type={'exhibition'} />
        </>
      )
      }

    </ExhibitionLayout>
  )
}

const ExhibitionLayout=styled.div`
display : flex;
flex-direction:column;
align-items : center;
`;

const BannerWrapper=styled.div`
width:100%;
height: 693px;
background: var(--1, #0E0E0F);
margin-bottom:104px;

`;

const SearchPosterBox = styled.div`
display:flex;

`;
const SearchResultLayout = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
`;