import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom'; // Link 임포트 추가
import StandardPoster from '../shared/components/StandardPoster';
import { Exhibitions } from '../shared/dummy/ExhibitionDummy';

export default function ExhibitionList() {
  const { listType } = useParams(); // URL에서 listType을 가져옴
  const [sortedExhibitions, setSortedExhibitions] = useState([]);

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
    if (listType === 'recommend') { // 랜덤으로 정렬
      sortedList = [...Exhibitions].sort(() => Math.random() - 0.5);
    } else if (listType === 'popular') { // 좋아요 많은 순으로 정렬
      sortedList = [...Exhibitions].sort((a, b) => b.좋아요 - a.좋아요);
    } else if (listType === 'recent') { // 전시 시작일 기준 최신 순으로 정렬
      sortedList = [...Exhibitions].sort((a, b) => {
        const startDateA = new Date(a.기간.split(' ~ ')[0]);
        const startDateB = new Date(b.기간.split(' ~ ')[0]);
        return startDateB - startDateA;
      });
    } else { // 카테고리가 포함된 전시 나열
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
        {sortedExhibitions.map((exhibition) => (
          <PosterItem key={exhibition.아이디}>
            <StyledLink to={`/exhibition/${exhibition.아이디}`}>
              <StandardPoster id={exhibition.아이디} poster={exhibition.포스터} />
            </StyledLink>
          </PosterItem>
        ))}
      </ExhibitionListWrapper>
    </ExhibitionListLayout>
  );
}

const ExhibitionListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
`;

const ExhibitionListWrapper = styled.div`
  width: 894px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: flex-start;
  gap: 50px;
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

const PosterItem = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
