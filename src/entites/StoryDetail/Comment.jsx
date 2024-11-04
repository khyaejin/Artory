import React, { useState } from 'react'
import styled from 'styled-components'

// image
import DOWNBUTTON from '../../assets/downbutton-black.svg';
import FACE_G1 from '../../assets/face/face_g1.svg';
import FACE_G2 from '../../assets/face/face_g2.svg';
import FACE_G3 from '../../assets/face/face_g3.svg';
import FACE_G4 from '../../assets/face/face_g4.svg';
import FACE_G5 from '../../assets/face/face_g5.svg';
import FACE_G6 from '../../assets/face/face_g6.svg';
import FACE_G7 from '../../assets/face/face_g7.svg';
import FACE_G8 from '../../assets/face/face_g8.svg';
import FACE_G9 from '../../assets/face/face_g9.svg';

import FACE_B1 from '../../assets/face/face_b1.svg';
import FACE_B2 from '../../assets/face/face_b2.svg';
import FACE_B3 from '../../assets/face/face_b3.svg';
import FACE_B4 from '../../assets/face/face_b4.svg';
import FACE_B5 from '../../assets/face/face_b5.svg';
import FACE_B6 from '../../assets/face/face_b6.svg';
import FACE_B7 from '../../assets/face/face_b7.svg';
import FACE_B8 from '../../assets/face/face_b8.svg';
import FACE_B9 from '../../assets/face/face_b9.svg';

export default function Comment() {
    const [selectedFaceId, setSelectedFaceId] = useState(null);

    // 감정 이모티콘 목록
    const faces = [
        { id: 1, src: FACE_G1, selectedSrc: FACE_B1, label: "Happy" },
        { id: 2, src: FACE_G2, selectedSrc: FACE_B2, label: "Satisfied" },
        { id: 3, src: FACE_G3, selectedSrc: FACE_B3, label: "Neutral" },
        { id: 4, src: FACE_G4, selectedSrc: FACE_B4, label: "Sad" },
        { id: 5, src: FACE_G5, selectedSrc: FACE_B5, label: "Crying" },
        { id: 6, src: FACE_G6, selectedSrc: FACE_B6, label: "Love" },
        { id: 7, src: FACE_G7, selectedSrc: FACE_B7, label: "Sweat" },
        { id: 8, src: FACE_G8, selectedSrc: FACE_B8, label: "Sleepy" },
        { id: 9, src: FACE_G9, selectedSrc: FACE_B9, label: "Sleepy" },
    ];
    return (
        <CommonBox>
            <CommentTitleBox>
                <CommonTitleText>댓글작성</CommonTitleText>
                <img src={DOWNBUTTON} />
            </CommentTitleBox>
            <div style={{ color: '#5A5C62', fontSize: '0.6rem' }}>전시에 대한 공감 표시를 선택해주세요</div>
            <FaceListBox>
                {
                    faces.map((data,i) => (
                        <img
                        src={selectedFaceId === data.id ? data.selectedSrc : data.src}
                        onClick={() => setSelectedFaceId(data.id)}
                        alt={data.label}
                        style={{ cursor: 'pointer' }}
                        />
                    ))
                }
            </FaceListBox>
            <CommentInputBox>
                <CommentTextArea/>
                <SubmitButton>완료</SubmitButton>
            </CommentInputBox>
        </CommonBox>
    )
}

const CommonBox = styled.div`
  box-shadow: 1px 2px 8px #f3f3f3;
  border: none;
  font-size: small;
  font-weight: 600;
  padding: 14px;
  height: fit-content;
  margin-bottom: 16px;

`;

const CommonTitleText = styled.h3`
font-weight: 700;
`;

const CommentTitleBox = styled.div`
display: flex;
`;

const FaceListBox = styled.div`
display: flex;
gap: 18px;
margin: 13px 0 34px;
`;

const CommentInputBox = styled.div`
min-height: 130px;
padding: 14px;
position: relative;
background-color: #f4f5f7;
`;

const CommentTextArea = styled.textarea`
resize: none;
color: #28292a;
font-weight: 500;
background-color: #f4f5f7;
border: none;
outline: none;
width: 100%;
height: 100%;
min-height: 120px;
`;

const SubmitButton = styled.button`
position: absolute;
bottom: 8px;
right: 8px;
font-weight: 600;
font-size: medium;
border: none;
background-color: black;
color: white;
padding: 5px 32px;
`;