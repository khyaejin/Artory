import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image from '../assets/input_pic.svg';
import SliderImg from '../assets/slider/slider1.svg';

export default function Onboarding1() {
  const [nickname, setNickname] = useState('');
  // 닉네임 글자수 상태관리 변수, 함수
  const [length, setLength] = useState(0);
  // 프로필 이미지 상태 관리 변수,함수
  const [imageSrc, setImageSrc] = useState(Image);
  // 사용자 이미지를 업로드할 때 사용
  const fileInputRef = useRef(null);

  // useEffect로 로컬스토리지에서 데이터 불러오기
  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname'); // 저장된 닉네임 가져오기
    const storedProfileImage = localStorage.getItem('profileImage'); // 저장된 프로필 이미지 가져오기

    if (storedNickname) {
      setNickname(storedNickname); // 닉네임 상태 설정
      setLength(storedNickname.length); // 글자수 상태 설정
    }
    if (storedProfileImage) {
      setImageSrc(storedProfileImage); // 프로필 이미지 상태 설정
    }
  }, []); //의존성 배열 빈배열으로 설정

  // 프로필 이미지 클릭 시 -> 파일 업로드 창 열기
  const handleImageClick = () => {
    fileInputRef.current.click(); // 클릭 이벤트 트리거
  };

  // 사용자가 파일 업로드 시 -> 이미지 변경 처리
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // 업로드된 파일 가져오기
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result); // 미리보기 이미지 설정
      };
      reader.readAsDataURL(file); // 파일 읽기
    }
  };

  // 닉네임 입력 시 -> 상태 업데이트
  const handleNicknameChange = (e) => {
    const value = e.target.value;
    setLength(value.length > 10 ? 10 : value.length); // 글자수 제한
    setNickname(value); // 닉네임 업데이트
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
          style={{ display: 'none' }} // 파일 입력 필드
          onChange={handleFileChange}
        />
        <Nickname
          maxLength="10"
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={handleNicknameChange}
        />
        <Count>{length}/10자</Count> {/* 글자수 표시 */}
      </ContentBox>
      <Link to="/onboarding2">
        <StyledButton disabled={!nickname}>다음</StyledButton> {/* 닉네임 입력 여부에 따라 버튼 활성화 설정 */}
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
  font-size: 1rem;
  font-family: 'Pretendard';
  cursor: pointer;

  // 다음 온보딩 페이지로 넘어갈 수 있게 되면 회색 -> 검정색으로 색상 변경
  background: ${({ disabled }) => (disabled ? 'var(--6, #D1D3D9)' : 'black')};
  box-shadow: ${({ disabled }) =>
    disabled
      ? '0px 2px 8px 0px rgba(243, 243, 243, 0.40)'
      : '0px 2px 8px rgba(0, 0, 0, 0.2)'};
  color: ${({ disabled }) => (disabled ? '#9C9C9C' : 'white')};

  &:hover {
    background: ${({ disabled }) => (disabled ? 'var(--6, #D1D3D9)' : '#333')};
  }
`;
