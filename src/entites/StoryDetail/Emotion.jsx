import React from 'react';
import styled from 'styled-components';

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

export default function Emotion({ selectedFaceId, setFace, size, margin }) {
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
        <FaceListBox margin={margin}>
            {
                faces.map((data, i) => (
                    <EmotionImage
                        key={data.id}
                        src={selectedFaceId === data.id ? data.selectedSrc : data.src}
                        onClick={() => setFace(data)}
                        alt={data.label}
                        size={size}
                    />
                ))
            }
        </FaceListBox>
    )
}

const FaceListBox = styled.div`
display: flex;
gap: 18px;
margin-bottom: ${props => props.margin || '34px'};
`;

const EmotionImage = styled.img`
cursor: pointer;
width: ${props => props.size || '30px'};
height: ${props => props.size || '30px'};
`;
