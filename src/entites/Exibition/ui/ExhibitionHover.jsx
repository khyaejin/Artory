import React from 'react';
import styled from 'styled-components';
import SectionBar from '../../../assets/exhibition/sectionBar.svg';
import { Link } from 'react-router-dom';

export default function ExhibitionHover() {
  const exhibitionTypes = [
    { label: '인기 전시', path: '/exhibition/list/popular' },
    { label: '추천 전시', path: '/exhibition/list/recommend' },
    { label: '최근 전시', path: '/exhibition/list/recent' },
  ];

  return (
    <ExhibitionHoverLayout>
      <ExhibitionTypeWrapper>
        {exhibitionTypes.map((type, index) => (
          <React.Fragment key={index}>
            <StyledLink to={type.path}>
              <ExhibitionType>{type.label}</ExhibitionType>
            </StyledLink>
            {index < exhibitionTypes.length - 1 && <StyledSectionBar src={SectionBar} alt="section bar" />}
          </React.Fragment>
        ))}
      </ExhibitionTypeWrapper>
    </ExhibitionHoverLayout>
  );
}

const ExhibitionHoverLayout = styled.div`
  width: 338px;
  height: 44px;
  flex-shrink: 0;
  border: 1px solid rgba(171, 171, 171, 0.02);
  background: #FFF;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
`;

const ExhibitionTypeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* 링크의 밑줄 제거 */
`;

const ExhibitionType = styled.div`
  margin: 12px 28px;
  color: #717276;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.072%;
  letter-spacing: 0.49px;

  &:hover {
    color: #000; /* 호버 시 색상 변경 */
  }
`;

const StyledSectionBar = styled.img`
  height: 23px;
`;
