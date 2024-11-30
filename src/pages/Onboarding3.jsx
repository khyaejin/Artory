import React, { useState } from 'react';
import styled from 'styled-components';
import SliderImg from '../assets/slider/slider3.svg';
import Splash from './Splash'; // 스플래시 컴포넌트 import

export default function Onboarding3() {
  // 주제 목록
  const topics = [
    '미디어',
    '공예',
    '디자인',
    '사진',
    '특별전시',
    '조각',
    '기획전',
    '설치미술',
    '회화',
    '작가전',
  ];

  // 선택된 주제를 저장하는 상태
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [showSplash, setShowSplash] = useState(false); // 스플래시 화면 상태

  // 주제 클릭 핸들러
  const handleTopicClick = (topic) => {
    if (selectedTopics.includes(topic)) {
      // 이미 선택된 주제를 클릭하면 선택 해제
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else if (selectedTopics.length < 3) {
      // 3개 이하로 선택 가능
      setSelectedTopics([...selectedTopics, topic]);
    } else {
      alert('최대 3개의 주제만 선택 가능합니다.');
    }
  };

  // 버튼 클릭 시 스플래시 화면 표시
  const handleStart = () => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
      alert('스플래시 화면이 종료되었습니다.');
    }, 1500); // 1.5초 동안 스플래시 화면 표시
  };

  return (
    <Container>
      <Title>관심있는 주제를 선택해주세요</Title>
      <Subtitle>
        관심있는 주제를 <Highlight>3가지</Highlight> 이하로 선택해주세요
        <br />
        당신에게 맞는 전시를 추천해 드릴게요
      </Subtitle>
      <ContentBox>
        {topics.map((topic, index) => (
          <Topic
            key={index}
            onClick={() => handleTopicClick(topic)}
            selected={selectedTopics.includes(topic)}
          >
            {topic}
          </Topic>
        ))}
      </ContentBox>
      <StyledButton onClick={handleStart} disabled={selectedTopics.length === 0}>
        ARTORY 시작하기
      </StyledButton>
      <img src={SliderImg} alt="bar" style={{ marginTop: '30px' }} />
      {showSplash && <Splash />} {/* 스플래시 화면 컴포넌트 표시 */}
    </Container>
  );
}

// 스타일 정의
const Container = styled.div`
  min-height: 100vh;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px; // 전체 화면 너비
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
`;

const Subtitle = styled.div`
  color: #a6a9af;
  text-align: center;
  margin-top: 20px;
  line-height: 1.5;
`;

const Highlight = styled.span`
  color: #616161;
  font-weight: bold;
`;

const ContentBox = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5개씩 한 줄
  gap: 15px; // 버튼 간격
  width: 100%;
`;

const Topic = styled.div`
  width: 150px; // 버튼 너비
  height: 100px; // 버튼 높이 2배로 증가
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? 'black' : 'white')};
  color: ${(props) => (props.selected ? 'white' : '#a8a7a7')};
  border: none;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const StyledButton = styled.button`
  margin-bottom: 20px;
  height: 52px;
  width: 482px; // 버튼 너비를 더 넓게 설정
  border: none;
  background-color: black;
  box-shadow: 1px 2px 8px #f3f3f3;
  color: white;  
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Pretendard';
  cursor: pointer;

  &:hover {
    // 마우스를 올렸을 때 약간 강조
    transform: scale(1.01);
  }

  &:active {
    // 클릭했을 때 살짝 눌리는 효과
    transform: scale(0.995);
    transition: transform 0.1s ease;
  }

`;
