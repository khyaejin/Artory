import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image from '../assets/input_pic.svg'
import SliderImg from '../assets/slider/slider1.svg'

export default function Onboarding1() {
  const [nickname, setNickname] = useState('');
  const [length, setLength] = useState(0);
  const [imageSrc, setImageSrc] = useState(Image); // 이부분 제대로 잘 한건가?
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result); // 이미지 미리보기
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    setLength(value.length > 10 ? 10 : value.length);
    setNickname(value);
  };

  return (
    <Container>
      <Title>사용할 이름과 프로필을 설정해주세요</Title>
      <ContentBox>
        <ImgStyled src={imageSrc} alt="사진첨부" onClick={handleImageClick} />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <Nickname
          maxLength="10"
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={handleNicknameChange}
        />
        <Count>{length}/10자</Count>
      </ContentBox>
      <Link to="/onboarding2">
        <StyledButton>다음</StyledButton>
      </Link>
      <img src={SliderImg} alt="bar" style={{ marginTop: '30px' }} />
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

const ContentBox = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ImgStyled = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
`;

const Nickname = styled.input`
  margin-top: 40px;
  padding-left: 20px;
  border: none;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
  width: 65%;
  height: 50px;
  font-weight: 500;
  font-family: 'Pretendard';
  outline: none;

  &::placeholder {
    color: #a6a9af;
  }
`;

const Count = styled.div`
  color: #ababab;
  text-align: end;
  padding-left: 20px;
  padding-top: 5px;
  width: 65%;
  margin: 0;
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
