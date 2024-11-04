import React from 'react'
import styled from 'styled-components';
import face_g1 from '../../../assets/face/face_g1.svg';
import face_g2 from '../../../assets/face/face_g2.svg';
import face_g3 from '../../../assets/face/face_g3.svg';
import face_g4 from '../../../assets/face/face_g4.svg';
import face_g5 from '../../../assets/face/face_g5.svg';
import face_g6 from '../../../assets/face/face_g6.svg';
import face_g7 from '../../../assets/face/face_g7.svg';
import face_g8 from '../../../assets/face/face_g8.svg';
import face_g9 from '../../../assets/face/face_g9.svg';
import weather_g1 from '../../../assets/weather/weather_g1.svg';
import weather_g2 from '../../../assets/weather/weather_g2.svg';
import weather_g3 from '../../../assets/weather/weather_g3.svg';
import weather_g4 from '../../../assets/weather/weather_g4.svg';
import weather_g5 from '../../../assets/weather/weather_g5.svg';
import Select from './Select';

export default function TodaysExhibition() {
    const times = ["30분", "1시간", "1시간 30분", "2시간", "2시간 30분", "3시간~"]
    const weathers = [weather_g1, weather_g2, weather_g3, weather_g4, weather_g5];
    const faces = [face_g1, face_g2, face_g3, face_g4, face_g5, face_g6, face_g7, face_g8, face_g9]
    const companion = ["혼자","가족","친구","연인","단체"]
    const categorys = ["미디어","공예","디자인","사진","특별전시","조각","기획전","설치미술","회화","작가전"]

    return (
        <MainLayout>
            <span>오늘의 전시</span>

            <Select type="관람소요시간" value={times} />

            <Select type="만족도" value={faces} />

            <Select type="날씨" value={weathers} />

            <Select type="동행인" value={companion} />

            <Select type="카테고리" value={categorys} />

        </MainLayout>
    );
}

const MainLayout = styled.div`
width: 47.9375rem;
height: 22.4375rem;
display : flex;
flex-direction : column;
align-items : start;
justify-content : space-evenly;
margin-bottom : 10%;
padding-left : 2.56rem;
padding-right : 10.94rem;
background: #FFF;
box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.10);
span {
    color: var(--2, #28292A);
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 800;
    line-height: 133.072%; 
}
`;
