import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SliderImg from '../assets/slider/slider2.svg'

export default function Onboarding2() {
  const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const [isButton2Clicked, setIsButton2Clicked] = useState(false);
  const [age, setAge] = useState(25);

  const handleButton1Click = () => {
    setIsButton1Clicked(true);
    setIsButton2Clicked(false);
  };

  const handleButton2Click = () => {
    setIsButton2Clicked(true);
    setIsButton1Clicked(false);
  };

  // 연령대 선택 옵션 생성
  const startYear = 1940;
  const endYear = new Date().getFullYear();
  const yearArray = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => ({
      value: (startYear + index).toString(),
      label: (startYear + index).toString(),
    })
  );

  return (
    <Container>
      <Title>성별과 연령대를 선택해주세요</Title>
      <Subtitle>당신에게 맞는 전시를 추천해드려요</Subtitle>
      <ContentBox>
        <GenderWrapper>
          {isButton1Clicked ? (
            <GenderButtonSelected>여성</GenderButtonSelected>
          ) : (
            <GenderButton onClick={handleButton1Click}>여성</GenderButton>
          )}
          {isButton2Clicked ? (
            <GenderButtonSelected>남성</GenderButtonSelected>
          ) : (
            <GenderButton onClick={handleButton2Click}>남성</GenderButton>
          )}
        </GenderWrapper>
        {/* 연령대 선택 */}
        <SelectWrapper>
            <Select
                defaultValue="2000" // 기본값 : 2000년
                onChange={(e) =>
                setAge(new Date().getFullYear() - parseInt(e.target.value, 10) + 1)
                }
            >
                {yearArray.map((year) => (
                <option key={year.value} value={year.value}>
                    {year.label}
                </option>
                ))}
            </Select>
        </SelectWrapper>
        <Link to="/onboarding3">
          <StyledButton>다음</StyledButton>
        </Link>
        <img src={SliderImg} alt="bar" style={{ marginTop: '30px' }} />
      </ContentBox>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1.8rem;
`;

const Subtitle = styled.p`
  color: #a6a9af;
  margin-top: 20px;
`;

const ContentBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const GenderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 334px;
  margin-bottom: 20px;
`;

const GenderButton = styled.button`
  width: 45%;
  height: 55px;
  border: none;
  background-color: white;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
  color: #a8a7a7;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const GenderButtonSelected = styled(GenderButton)`
  background-color: black;
  color: white;
`;

const SelectWrapper = styled.div`
  margin: 20px 0 86px;
  width: 333px;
`;

const Select = styled.select`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  background: white;
  border: none;
  background-color: white;
  box-shadow: 1px 2px 8px #f3f3f3;
  color: #a8a7a7;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;

const StyledButton = styled.button`
  height: 52px;
  width: 333px;
  border: none;
  background-color: black;
  color: white;
  font-size: 1rem;
  font-family: 'Pretendard';
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;
