import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Exhibitions } from '../shared/dummy/ExhibitionDummy';
import ExhibitionInfo from '../entites/Exibition/ui/\bExhibitionInfo';

export default function ExhibitionDetail() {
  const { id } = useParams(); // useParmas로 URL에서 id 가져오기

  const exhibition = Exhibitions.find((exhibit) => exhibit.아이디 ===  Number(id)); // 아이디로 데이터 찾기


  return (
    <ExhibitionDetailLayout>
      <ExhibitionTopContainer>
        <ExhibitionPoster src={exhibition.포스터} alt={exhibition.제목} />
        <ExhibitionInfo exhibition={exhibition} />
      </ExhibitionTopContainer>
      <ExhibitionLocationContainer>
        <ExhibtionMap />
        <ExhibitionLoactaion>
          {/* 카카오맵 연동 */}
        </ExhibitionLoactaion>
      </ExhibitionLocationContainer>
    </ExhibitionDetailLayout>
  );
}

const ExhibitionDetailLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExhibitionTopContainer = styled.div`
  display: flex;
  gap: 154px;
  margin: 134px 212px 128px 270px; // 피그마 규격
`;

const ExhibitionPoster = styled.img`
  width: 345px;
  height: 489px;
`;

const ExhibitionLocationContainer = styled.div``;

const ExhibtionMap = styled.div``;

const ExhibitionLoactaion = styled.div``;
