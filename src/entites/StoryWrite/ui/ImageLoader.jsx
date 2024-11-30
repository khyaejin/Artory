import React from 'react';
import styled from 'styled-components';
import { useState, useRef } from 'react';
import PLUS from '../../../assets/plus.svg';

export default function ImageLoader({ setData }) {
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click(); // fileInputRef 객체(input 태그)를 클릭.
  };

  const handleFileChange = async (e) => {
    const files = e.target.files;
    if (files.length) {
      const fileUrls = []; // 각 이미지 URL을 저장할 배열

      for (const file of files) {
        try {
          const fileUrl = URL.createObjectURL(file); // URL 생성
          fileUrls.push(fileUrl); // fileUrl 배열에 추가

          setData((prevData) =>
            `${prevData}<img src="${fileUrl}" alt="Uploaded Image" />`
          );
        } catch (error) {
          console.log('handleFileChange error', error);
        }
      }
    }
  };

  return (
    <>
      <Btn onClick={handleImageClick}>
        <img
          style={{ verticalAlign: 'middle' }}
          src={PLUS}
          alt="이모지추가"
        />{' '}
        <span style={{ verticalAlign: 'middle' }}>사진</span>
      </Btn>
      <input
        type="file"
        accept="image/*"
        multiple //다중파일
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </>
  );
}

const Btn = styled.button`
  background-color: #f4f5f7;
  color: #9ba0ae;
  border: none;
  outline: none;
  z-index: 1003;
  font-weight: 500;
  font-size: 1.1rem;
  font-family: 'Pretendard';
  padding: 0 10px;
  width: 5.1875rem;
  height: 1.875rem;
`;
