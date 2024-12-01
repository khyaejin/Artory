import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SliderImg from '../assets/slider/slider2.svg';

export default function Onboarding2() {
  const [isButton1Clicked, setIsButton1Clicked] = useState(false); // 여성 버튼 상태
  const [isButton2Clicked, setIsButton2Clicked] = useState(false); // 남성 버튼 상태
  const [age, setAge] = useState(null); // 나이 상태

  // 성별(여성) 버튼 클릭 핸들러
  const handleButton1Click = () => {
    setIsButton1Clicked(true);
    setIsButton2Clicked(false);
  };
  // 성별(남성) 버튼 클릭 핸들러
  const handleButton2Click = () => {
    setIsButton2Clicked(true);
    setIsButton1Clicked(false);
  };
  
  // 연령대 선택 옵션 
  const startYear = 1940;
  const endYear = new Date().getFullYear();
  const yearArray = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => ({
      value: (startYear + index).toString(),
      label: (startYear + index).toString(),
    })
  );

  const isFormValid = (isButton1Clicked || isButton2Clicked) && age; // 성별과 나이 선택 여부 확인

  return (
    <Container>
      <Title>성별과 연령대를 선택해주세요</Title>
      <Subtitle>당신에게 맞는 전시를 추천해드려요</Subtitle>
      <ContentBox>
        {/* 성별 선택 */}
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
            defaultValue=""
            onChange={(e) =>
              setAge(new Date().getFullYear() - parseInt(e.target.value, 10) + 1)
            }
          >
            <option value="" disabled>
              출생 연도를 선택하세요
            </option>
            {yearArray.map((year) => (
              <option key={year.value} value={year.value}>
                {year.label}
              </option>
            ))}
          </Select>
        </SelectWrapper>

        {/* 다음 버튼 */}
        <Link to="/onboarding3">
          <StyledButton disabled={!isFormValid}>다음</StyledButton>
        </Link>
        <img src={SliderImg} alt="bar" style={{ marginTop: '30px' }} />
      </ContentBox>
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
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
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
  box-shadow: 1px 2px 8px #f3f3f3;
  color: #a8a7a7;
  font-weight: 500;
  cursor: pointer;
`;

const StyledButton = styled.button`
  height: 52px;
  width: 333px;
  border: none;
  font-size: 1rem;
  font-family: 'Pretendard';
  cursor: pointer;

  // 버튼 활성화 여부에 따라 스타일 변경
  background: ${({ disabled }) => (disabled ? 'var(--6, #D1D3D9)' : 'black')};
  box-shadow: ${({ disabled }) =>
    disabled
      ? '0px 2px 8px 0px rgba(243, 243, 243, 0.4)'
      : '0px 2px 8px rgba(0, 0, 0, 0.2)'};
  color: ${({ disabled }) => (disabled ? '#9C9C9C' : 'white')};

  &:hover {
    background: ${({ disabled }) => (disabled ? 'var(--6, #D1D3D9)' : '#333')};
  }
`;
