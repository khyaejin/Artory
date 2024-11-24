import React from 'react'
import styled from 'styled-components'

export default function ExhibitionInfo({ exhibition }) {
  return (
    <ExhibitionInfoLayout>
      <Title>{exhibition.제목}</Title>
      <InfoContainer>
        <InfoWrapper>
          <Type>장소</Type>
          <TypeContent>{exhibition.장소}</TypeContent>
        </InfoWrapper>
        <InfoWrapper>
          <Type>주소</Type>
          <TypeContent>{exhibition.주소}</TypeContent>
        </InfoWrapper>
        <InfoWrapper>
          <Type>휴관</Type>
          <TypeContent>{exhibition.휴관일}</TypeContent>
        </InfoWrapper>
        <InfoWrapper>
          <Type>기간</Type>
          <TypeContent>{exhibition.기간}</TypeContent>
        </InfoWrapper>
        <InfoWrapper>
          <Type>시간</Type>
          <TypeContent>{exhibition.시간}</TypeContent>
        </InfoWrapper>
        <InfoWrapper>
          <Type>관람연령</Type>
          <TypeContent>{exhibition.관람연령}</TypeContent>
        </InfoWrapper>
        <InfoWrapper>
          <Type>가격</Type>
          <TypeContent>
            성인: {exhibition.가격.성인}원 / 청소년: {exhibition.가격.청소년}원 / 어린이: {exhibition.가격.어린이}원
          </TypeContent>
        </InfoWrapper>
      </InfoContainer>
    </ExhibitionInfoLayout>
  );
}

const ExhibitionInfoLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap:60px;
`;

const Title = styled.div`
color: var(--1, #0E0E0F);
font-family: Pretendard;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 133.072%;
letter-spacing: 1.05px;

`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:42px;
`;

const InfoWrapper = styled.div`
display: flex;
  flex-direction: row;
  gap:101px;
  

`;

const Type = styled.div`
color: var(--3, #505154);
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 133.072%; /* 21.292px */
letter-spacing: 0.56px;
min-width:57px;

`;

const TypeContent = styled.div`
color: var(--4, #5A5C62);
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 133.072%; /* 15.969px */
letter-spacing: 0.42px;
`;


