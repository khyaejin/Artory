import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import StandardPoster from '../shared/components/StandardPoster';
import { Exhibitions } from '../shared/dummy/ExhibitionDummy';
import Footer from '../shared/components/Footer';
import LeftArrow from '../assets/exhibition/leftPageArrow.svg';
import RightArrow from '../assets/exhibition/rightPageArrow.svg';

export default function ExhibitionList() {
  const { listType } = useParams(); // URL에서 listType을 가져옴
  const [sortedExhibitions, setSortedExhibitions] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const exhibitionsPerPage = 20; // 페이지당 전시 수

  const indexOfLast = currentPage * exhibitionsPerPage;
  const indexOfFirst = indexOfLast - exhibitionsPerPage;
  const currentExhibitions = sortedExhibitions.slice(indexOfFirst, indexOfLast);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(sortedExhibitions.length / exhibitionsPerPage);

  // 페이지 변경 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getTitle = (type) => {
    switch (type) {
      case 'recommend':
        return '추천 전시';
      case 'popular':
        return '인기 전시';
      case 'recent':
        return '최근 전시';
      default:
        return type;
    }
  };

  useEffect(() => {
    let sortedList = [];
    const selectedCategories = JSON.parse(localStorage.getItem('selectedTopics'));
    if (listType === 'recommend') {
      if (selectedCategories && selectedCategories.length > 0) {
        // 선택된 카테고리가 있을 경우 해당 카테고리 전시 필터링
        sortedList = Exhibitions.filter((exhibition) =>
          exhibition.카테고리.some((category) => selectedCategories.includes(category))
        );
      } else {
        // 선택된 카테고리가 없을 경우 모든 전시 불러오기
        sortedList = [...Exhibitions];
      }
    } else if (listType === 'popular') {
      sortedList = [...Exhibitions].sort((a, b) => b.좋아요 - a.좋아요);
    } else if (listType === 'recent') {
      sortedList = [...Exhibitions].sort((a, b) => {
        const startDateA = new Date(a.기간.split(' ~ ')[0]);
        const startDateB = new Date(b.기간.split(' ~ ')[0]);
        return startDateB - startDateA;
      });
    } else {
      sortedList = Exhibitions.filter((exhibition) =>
        exhibition.카테고리.includes(listType)
      );
    }
    setSortedExhibitions(sortedList);
  }, [listType]);

  return (
    <ExhibitionListLayout>
      {/* 리스트 종류 제목 */}
      <ExhibitionListType>{getTitle(listType)}</ExhibitionListType>

      {/* 전시 목록 */}
      <ExhibitionListWrapper>
        {currentExhibitions.map((exhibition) => (
          <PosterItem key={exhibition.아이디}>
            <StyledLink to={`/exhibition/${exhibition.아이디}`}>
              <StandardPoster id={exhibition.아이디} poster={exhibition.포스터} />
            </StyledLink>
          </PosterItem>
        ))}
      </ExhibitionListWrapper>

      {/* 페이지네이션 */}
      <Pagination>
        <ArrowIconContainer
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ArrowIcon src={LeftArrow} alt="이전 페이지" />
        </ArrowIconContainer>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageDot key={index + 1} isActive={currentPage === index + 1} onClick={() => handlePageChange(index + 1)} />
        ))}
        <ArrowIconContainer
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <ArrowIcon src={RightArrow} alt="다음 페이지" />
        </ArrowIconContainer>
      </Pagination>

      {/* 푸터 */}
      <Footer />
    </ExhibitionListLayout>
  );
}

const ExhibitionListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px 0px 0px;
`;

const ExhibitionListType = styled.div`
  text-align: left;
  width: 894px;
  color: #000;
  font-size: 30px;
  font-weight: 700;
  line-height: 133.072%;
  letter-spacing: 1.05px;
`;

const ExhibitionListWrapper = styled.div`
  width: 894px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 50px;
  margin: 50px 0px 10px 0px;
`;

const PosterItem = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const ArrowIconContainer = styled.button`
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0 5px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
  display: block;
`;

const PageDot = styled.button`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  padding: 0;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? '#000000' : '#D9D9D9')};
  border: none;
  cursor: pointer;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;
