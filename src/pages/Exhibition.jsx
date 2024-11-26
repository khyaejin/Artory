import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Banner from '../entites/Exibition/ui/Banner';
import { useNavigate, useLocation } from 'react-router-dom';
import Carousel from '../entites/Story/Carousel';
import Search from '../entites/Story/Search';

export default function Exhibition() {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchExhibition, setSearchExhibitions] = useState([]); // 검색 결과 저장

  // 페이지 렌더링 시 검색 상태를 초기화
  useEffect(() => {
    if (location.state?.fromSearch) {
      setSearchExhibitions([]); // 검색 상태 초기화
    }
  }, [location]);

  const handleSearch = (searchResults) => {
      setSearchExhibitions(searchResults); // 검색 결과 저장
      navigate('/exhibition/search', { state: { searchResults } }); // 검색 결과를 가지고 페이지 이동
  };

  return (
    <ExhibitionLayout>
      {/* 스와이퍼 배너 영역 */}
      <BannerWrapper>
        <Banner />
      </BannerWrapper>

      {/* 검색바 컴포넌트 */}
      <Search
        searchItems={searchExhibition}
        setSearchItems={handleSearch}
        placeholder="원하는 전시를 검색해보세요"
        type="exhibition"
      />

      {/* 캐러셀 */}
      <Carousel title={'인기 전시'} type={'exhibition'} />
      <Carousel title={'최근 전시'} type={'exhibition'} />
      <Carousel title={'추천 전시'} type={'exhibition'} />
      <Carousel title={'최근 추천 전시'} type={'exhibition'} />
      <Carousel title={'임박한 전시'} type={'exhibition'} />
    </ExhibitionLayout>
  );
}

const ExhibitionLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerWrapper = styled.div`
  width: 100%;
  height: 693px;
  background: var(--1, #0E0E0F);
  margin-bottom: 104px;
`;
