import React from 'react';
import { useParams} from 'react-router-dom';
import styled from 'styled-components';
import { Exhibitions } from '../shared/dummy/ExhibitionDummy';
import ExhibitionInfo from '../entites/ExhibitionDetail/ExhibitionInfo';
import ExhibtionMap from '../entites/ExhibitionDetail/ExhibitionMap';
import Footer from '../entites/Home/Footer';

export default function ExhibitionDetail() {
  const { id } = useParams(); // useParmas로 URL에서 id 가져오기
  const exhibition = Exhibitions.find((exhibit) => exhibit.아이디 ===  Number(id)); // 아이디로 데이터 찾기

  return (
    <ExhibitionDetailLayout> 

      {/* 전시 정보 상단 영역 */}
      <ExhibitionTopContainer>
        {/* 전시 포스터 */}
        <ExhibitionPoster src={exhibition.포스터} alt={exhibition.제목} />
        {/* 전시 상세 정보 컴포넌트 */}
        <ExhibitionInfo exhibition={exhibition} />
      </ExhibitionTopContainer>

      {/* 전시 장소 영역 */}
      <ExhibitionLocationContainer>
          {/* 전시 장소 지도 컴포넌트 */}
          <ExhibtionMap address={exhibition.주소} place={exhibition.장소}/>
      </ExhibitionLocationContainer>
      <Footer />
    </ExhibitionDetailLayout>
  );
}

const ExhibitionDetailLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding : 135px 0px 0px 0px ;
`;

const ExhibitionTopContainer = styled.div`
  display: flex;
  gap: 154px;
  margin-bottom: 128px;
`;

const ExhibitionPoster = styled.img`
  width: 345px;
  height: 489px;
`;

const ExhibitionLocationContainer = styled.div`
display: flex;
  flex-direction: column;
  gap:15px;
`;
