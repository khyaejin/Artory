import React, { useState } from 'react'
import styled from 'styled-components'
import Carousel from '../entites/Story/Carousel';
import Search from '../entites/Story/Search';
import StandardPoster from '../shared/components/StandardPoster';

export default function Stroy() {
  const [searchStories, setSearchStories] = useState([]); // 검색하고자 하는 스토리를 저장하는 배열
  return (
    <StoryLayout>
      <Search searchStories={searchStories} setSearchStories={setSearchStories} /> {/* Exhibition 페이지에도 있기 때문에 shared에 해놔야할지 생각 */}
      {searchStories.length > 0 ? (
        <>
          {searchStories.map((data) => (
            <SearchPosterBox key={data.아이디}>
              <StandardPoster id={data.아이디} poster={data.포스터} />
            </SearchPosterBox>
          ))}
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
