import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Search from '../entites/Story/Search';
import StandardPoster from '../shared/components/StandardPoster';

export default function ExhibitionSearch() {
  const location = useLocation();
  const initialResults = location.state?.searchResults || []; // 처음 로드 시 전달된 검색 결과
  const [searchExhibition, setSearchExhibitions] = useState(initialResults); // 검색 결과 저장

  // 검색 결과가 없을 때 텍스트 표시
  const displayedExhibitions = searchExhibition.length > 0 ? searchExhibition : [];

  return (
    <ExhibitionSearchLayout>
      <ExhibitionSearchWrpper>
        {/* 검색바 컴포넌트 */}
        <Search
        searchItems={searchExhibition}
        setSearchItems={setSearchExhibitions}
        placeholder="원하는 전시를 검색해보세요"
        type="exhibition"
        />

        {/* 검색 결과 부분 */}
        <SearchResultContainer>
          {displayedExhibitions.length > 0 ? (
            displayedExhibitions.map((exhibition) => (
              <PosterItem key={exhibition.아이디}>
                <StandardPoster id={exhibition.아이디} poster={exhibition.포스터} />
              </PosterItem>
            ))
          ) : (
            <NoResultsText>검색 결과가 없습니다.</NoResultsText>
          )}
        </SearchResultContainer>
      </ExhibitionSearchWrpper>
    </ExhibitionSearchLayout>
  );
}

const ExhibitionSearchLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 50px 0px;
`;

const ExhibitionSearchWrpper=styled.div`
  width:894px; // 계산된 크기
`;

const SearchResultContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  jusify-content: space-between;
  gap:50px;
`;

const PosterItem = styled.div`
`;

const NoResultsText = styled.div`
  padding:0px 40px;
  font-size: 13px;
  color: #888;
  text-align: center;
`;
