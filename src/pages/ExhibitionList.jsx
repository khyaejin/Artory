import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import StandardPoster from '../shared/components/StandardPoster';
import { Exhibitions } from '../shared/dummy/ExhibitionDummy';

export default function ExhibitionList() {
  const { listType } = useParams(); // URL에서 listType을 가져옴
  const [sortedExhibitions, setSortedExhibitions] = useState([]);

  // 영어 타입을 한글로 매핑
  const getTitle = (type) => {
    switch (type) {
      case 'recommend':
        return '추천 전시';
      case 'popular':
        return '인기 전시';
      case 'recent':
        return '최근 전시';
      default:
        return '전시 목록';
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
    }
    setSortedExhibitions(sortedList);
  }, [listType]);

  return (
    <ExhibitionListLayout>
      {/* 리스트 종류 */}
      <ExhibitionListType>{getTitle(listType)}</ExhibitionListType>
      <ExhibitionListWrpper>
        {sortedExhibitions.map((exhibition) => (
          <PosterItem key={exhibition.아이디}>
            <StandardPoster id={exhibition.아이디} poster={exhibition.포스터} />
          </PosterItem>
        ))}
      </ExhibitionListWrpper>
    </ExhibitionListLayout>
  );
}

const ExhibitionListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
`;

const ExhibitionListWrpper = styled.div`
  width: 894px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: space-between;
  gap: 50px;
`;

const ExhibitionListType = styled.div`
text-align: left;
width: 894px;
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.072%;
  letter-spacing: 1.05px;
`;

const PosterItem = styled.div``;
