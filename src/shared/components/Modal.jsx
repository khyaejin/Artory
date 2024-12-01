import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../assets/logo_black.svg';

export default function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <HeaderGroup>
            <LogoStyled src={LogoImg} alt="Logo" />
            <Title>안내</Title>
          </HeaderGroup>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>{content}</ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); // 반투명 배경
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 90%;
  max-width: 500px; // 더 넓게 설정
  max-height: 80vh; // 모달의 최대 높이를 제한하여 화면을 넘치지 않도록 설정
  padding: 30px; // 내부 여백 추가
  border-radius: 15px; // 둥근 모서리 추가
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25); // 더 부드러운 그림자
  overflow-y: auto; // 콘텐츠가 많을 경우 스크롤 활성화
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between; // X 버튼과 타이틀 로고를 양쪽 끝에 배치
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderGroup = styled.div`
  display: flex;
  align-items: center; // 로고와 타이틀을 세로로 정렬
  gap: 10px; // 로고와 타이틀 사이 간격 추가
`;

const LogoStyled = styled.img`
  width: 30px; // 로고 크기
  height: auto;
`;

const Title = styled.h2`
  font-family: Pretendard;
  margin: 0;
  font-size: 1.5rem; // 타이틀 크기
  font-weight: 500;
  color: #333;
`;

const CloseButton = styled.button`
  background: #d1d3d9;
  color: #000; // 글자색 변경
  border: none;
  padding: 8px 16px; // 버튼 크기를 약간 줄임
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #555; // 호버 시 진한 회색
    color: white; // 호버 시 글자색 변경
  }
`;

const ModalBody = styled.div`
  font-size: 1rem;
  line-height: 1.6; // 가독성을 위해 줄 간격 추가
  color: #333; // 본문 글자 색상 변경
  margin-top: 10px; // 본문과 헤더 사이 여백
`;
