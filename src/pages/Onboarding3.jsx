import React, { useState } from 'react';
import styled from 'styled-components';
import SliderImg from '../assets/slider/slider3.svg';
import Splash from '../shared/components/Splash'; // 스플래시 컴포넌트 import
import { useNavigate } from 'react-router-dom';
import Modal from '../shared/components/Modal'; // 모달 컴포넌트 import

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

  const [selectedTopics, setSelectedTopics] = useState([]); // 선택된 주제 상태 관리
  const [showSplash, setShowSplash] = useState(false); // 스플래시 화면 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 표시 상태 관리
  const navigate = useNavigate(); // 라우팅

  // 주제 클릭 핸들러
  const handleTopicClick = (topic) => {
    if (selectedTopics.includes(topic)) {
      // 이미 선택된 주제를 클릭하면 선택 해제
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else if (selectedTopics.length < 3) {
      // 3개 이하로 선택 가능
      setSelectedTopics([...selectedTopics, topic]);
    } else {
      // 선택한 값이 3개 초과 시 -> 모달을 열어서 안내
      setIsModalOpen(true);
    }
  };

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 버튼 클릭 시 스플래시 화면 표시 후 /exhibition으로 이동
  const handleStart = () => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
      navigate('/exhibition');
    }, 4000); // 4초 후 이동
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
      {/* 스플래시 화면 */}
      {showSplash && <Splash />} 
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          content="최대 3개의 주제만 선택 가능합니다."
        >
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
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
  grid-template-columns: repeat(5, 1fr); // 5열로 나열 (5*2)
  gap: 15px; // 주제 카드 간 간격
  width: 100%;
`;

const Topic = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? 'black' : 'white')};
  color: ${(props) => (props.selected ? 'white' : '#a8a7a7')};
  border: none;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
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
  width: 482px;
  border: none;

  // 버튼 활성화 여부에 따른 변경들
  background-color: ${({ disabled }) => (disabled ? '#D1D3D9' : 'black')}; // 버튼 활성화 여부에 따라 색상 변경
  box-shadow: ${({ disabled }) =>
    disabled ? 'none' : '1px 2px 8px #f3f3f3'}; // 비활성화 시 그림자 제거
  color: ${({ disabled }) => (disabled ? '#9C9C9C' : 'white')}; // 버튼 글자색
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Pretendard';
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')}; // 활성 시 손가락 모양 커서

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.01)')}; // 비활성화 시 효과 제거
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(0.995)')}; // 비활성화 시 효과 제거
    transition: transform 0.1s ease;
  }
`;
