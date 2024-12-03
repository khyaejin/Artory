import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>웹프레임워크1</FooterText>
      <FooterTitle>ARTORY</FooterTitle>
      <FooterText>나야채소팀 : 김혜진, 이주연, 임혜정, 정예빈</FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 12.5rem; 
  flex-shrink: 0;
  background: #f4f4f4; // 배경색

  display: flex;
  flex-direction: column;
  align-items: flex-start; // 왼쪽 정렬

  box-sizing: border-box; // width, height를 padding 포함 계산하도록 설정
  padding-top: 2rem;
  padding-left: 14rem; // 내부 여백 추가
  gap: 1rem; // 내부 요소 간 간격

  const FooterContainer = styled.div
`;

const FooterText = styled.div`
  color: #717276;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.225rem; 
  margin-bottom: 2rem;
`;

const FooterTitle = styled.div`
  color: #717276;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.225rem; 
`;
