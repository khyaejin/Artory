import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Search from '../entites/Story/Search';
import StandardPoster from '../shared/components/StandardPoster';
import Footer from '../shared/components/Footer';
import LeftArrow from '../assets/exhibition/leftPageArrow.svg';
import RightArrow from '../assets/exhibition/rightPageArrow.svg'

export default function ExhibitionSearch() {
  const location = useLocation();
  const initialResults = location.state?.searchResults || []; // 처음 로드 시 전달된 검색 결과
  const [searchExhibition, setSearchExhibitions] = useState(initialResults); // 검색 결과 저장

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const exhibitionsPerPage = 20; // 페이지당 전시 수

  const indexOfLast = currentPage * exhibitionsPerPage;
  const indexOfFirst = indexOfLast - exhibitionsPerPage;
  const currentExhibitions = searchExhibition.slice(indexOfFirst, indexOfLast);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(searchExhibition.length / exhibitionsPerPage);

  // 페이지 변경 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 검색 결과가 없을 때 텍스트 표시
  const displayedExhibitions = searchExhibition.length > 0 ? currentExhibitions : [];

  return (
    <ExhibitionSearchLayout>
      {/* 검색 영역 */}
      <ExhibitionSearchWrapper>
        {/* 검색바 컴포넌트 */}
        <Search
          searchItems={searchExhibition}
          setSearchItems={setSearchExhibitions}
          placeholder="원하는 전시를 검색해보세요"
          type="exhibition"
        />

        {/* 검색 결과 부분 */}
        <SearchResultContainer>
          {searchExhibition.length > 0 ? (
            <>
              <PostersContainer>
                {displayedExhibitions.map((exhibition) => (
                  <PosterItem key={exhibition.아이디}>
                    <StandardPoster id={exhibition.아이디} poster={exhibition.포스터} />
                  </PosterItem>
                ))}
              </PostersContainer>

              {/* 페이지네이션 */}
              <Pagination>
              <ArrowIconContainer disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage - 1)}>
                  <ArrowIcon src={LeftArrow} alt="이전 페이지" />
                </ArrowIconContainer>
                {Array.from({ length: totalPages }, (_, index) => (
                  <PageDot
                  key={index + 1}
                  isActive={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  />
                ))}
                <ArrowIconContainer disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
                  <ArrowIcon src={RightArrow} alt="다음 페이지" />
                </ArrowIconContainer>
              </Pagination>
            </>
          ) : (
            <NoResultsText>검색 결과가 없습니다.</NoResultsText>
          )}
        </SearchResultContainer>
      </ExhibitionSearchWrapper>

      {/* 푸터 */}
      <Footer />
    </ExhibitionSearchLayout>
  );
}

const ExhibitionSearchLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 50px 0px 0px 0px;
`;

const ExhibitionSearchWrapper = styled.div`
  width: 894px; // 계산된 크기
  margin-bottom: 50px;
`;

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const PostersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 50px;
`;

const PosterItem = styled.div`
`;

const NoResultsText = styled.div`
  padding: 0px 40px;
  font-size: 13px;
  color: #888;
  text-align: center;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top: 30px;
`;

const ArrowIconContainer = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  &:disabled {
    cursor: not-allowed;
  }
`;

const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
`;


const PageDot = styled.button`
  width: 10px;
  height: 10px;
   margin: 0 5px;
  padding: 0;
  border-radius: 100%;
  background-color: ${(props) => (props.isActive ? '#000000' : '#D9D9D9c')};
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
