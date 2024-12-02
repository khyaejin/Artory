import React, { useState } from 'react'
import styled from 'styled-components'
import Carousel from '../entites/Story/Carousel';
import Search from '../entites/Story/Search';
import StandardPoster from '../shared/components/StandardPoster';
import Footer from '../entites/Home/Footer';

export default function Stroy() {
  const [searchStories, setSearchStories] = useState([]); // 검색하고자 하는 스토리를 저장하는 배열
  return (
    <StoryLayout>
      <Search
        searchItems={searchStories}
        setSearchItems={setSearchStories}
        type="story" />
      {searchStories.length > 0 ? (
        <>
          <SearchResultLayout>
            {searchStories.map((data) => (
              <SearchPosterBox key={data.아이디}>
                <StandardPoster id={data.아이디} poster={data.포스터} />
              </SearchPosterBox>
            ))}
          </SearchResultLayout>
        </>
      ) : (
        <>
          <Carousel title={'인기 Story'} type={'story'} />
          <Carousel title={'최근 Story'} type={'story'} />
          <Carousel title={'추천 Story'} type={'story'} />
          <Carousel title={'추천 유저'} type={'user'} />
        </>
      )
      }
      <div style={{width:'100%', height: '30px'}}></div>
      
      {/* 푸터 */}
      <Footer />
    </StoryLayout >
  )
}

const StoryLayout = styled.div`
width: 100%;
display:flex;
flex-direction:column;
align-items: center;
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
