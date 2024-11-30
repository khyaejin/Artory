import React from 'react';
import styled from 'styled-components';
import { Exhibitions } from '../../../shared/dummy/ExhibitionDummy';
import { Link } from 'react-router-dom';

export default function Category() {
  const categories = [
    '미디어',
    '공예',
    '조각',
    '디자인',
    '기획전',
    '설치미술',
    '회화',
    '작가전',
    '사진',
    '특별전시',
  ];

  // 카테고리에 따른 포스터 이미지 가져오기
  const categoryData = categories.map((category) => {
    let poster;

    // 해당 카테고리의 전시를 필터링
    const exhibitions = Exhibitions.filter((exhibition) =>
      exhibition.카테고리.includes(category)
    );

    if (exhibitions.length > 0) {
      // 랜덤으로 하나의 전시 선택
      const randomExhibition =
        exhibitions[Math.floor(Math.random() * exhibitions.length)];
      poster = randomExhibition.포스터;
    } else {
      // 전시가 없을 경우 기본 이미지 설정
      poster = 'default_poster_url'; // 기본 포스터 이미지 URL로 변경하세요.
    }

    return {
      category,
      poster,
    };
  });

  // 3-2-3-2 형태로 데이터 분할
  const columns = [
    categoryData.slice(0, 3),
    categoryData.slice(3, 5),
    categoryData.slice(5, 8),
    categoryData.slice(8, 10),
  ];

  return (
    <CategoryLayout>
      <CategoryTitle>전시 카테고리</CategoryTitle>

      {/* 카테고리 */}
      <CategoryContainer>
        {columns.map((column, colIndex) => (
          <Column key={colIndex}>
            {column.map((item, index) => (
              <StyledLink key={index} to={`/exhibition/list/${item.category}`}>
              <Card key={index} bgImage={item.poster}>
                <CategoryText>{item.category}</CategoryText>
              </Card>
              </StyledLink>
            ))}
          </Column>
        ))}
      </CategoryContainer>
    </CategoryLayout>
  );
}

const CategoryLayout = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryTitle = styled.h2`
  width: 100%;
`;

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 17px;
`;

const Card = styled.div`
  width: 210px;
  height: 302px;
  background: ${(props) => `url(${props.bgImage}) no-repeat center/cover`};
  margin: 10px 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7); /* 투명도 조절 가능 */
  }
`;

const CategoryText = styled.div`
  position: absolute;
  width:67px;
  bottom: 139px;
  left: 67px;
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.8px;
  z-index: 1; /* 텍스트를 오버레이 위로 올리기 위해 추가 */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;