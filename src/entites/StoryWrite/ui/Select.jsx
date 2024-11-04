import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import face_b1 from '../../../assets/face/face_b1.svg';
import face_b2 from '../../../assets/face/face_b2.svg';
import face_b3 from '../../../assets/face/face_b3.svg';
import face_b4 from '../../../assets/face/face_b4.svg';
import face_b5 from '../../../assets/face/face_b5.svg';
import face_b6 from '../../../assets/face/face_b6.svg';
import face_b7 from '../../../assets/face/face_b7.svg';
import face_b8 from '../../../assets/face/face_b8.svg';
import face_b9 from '../../../assets/face/face_b9.svg';

import weather_b1 from '../../../assets/weather/weather_b1.svg';
import weather_b2 from '../../../assets/weather/weather_b2.svg';
import weather_b3 from '../../../assets/weather/weather_b3.svg';
import weather_b4 from '../../../assets/weather/weather_b4.svg';
import weather_b5 from '../../../assets/weather/weather_b5.svg';

export default function Select({ type, value }) {
    const [isText, setIsText] = useState();
    const [isClicked, setIsClicked] = useState();
    const selectedFace = [face_b1,face_b2,face_b3,face_b4,face_b5,face_b6,face_b7,face_b8,face_b9]
    const selectedWeather = [weather_b1,weather_b2,weather_b3,weather_b4,weather_b5]

    useEffect(() => {
        switch(type) {
            case "관람소요시간":
            case "동행인":
            case "카테고리":
                setIsText(true);
                break;
            case "날씨":
            case "만족도":
                setIsText(false);
                break;
            default:
                break;
        }
    }, [type]);
    
    return (
        <MainLayout>

            <Type>{type}</Type>

            <Values>
                {
                    isText ?
                    value.map((v, i) => (
                        <Value key={i} onClick={()=>setIsClicked(i)} isSelected={i === isClicked} >{v}</Value>
                    ))

                    :

                    value.map((v,i) => (
                        <Icon 
                            key={i} 
                            onClick={()=>setIsClicked(i)} 
                            src={(isClicked === i && type === "만족도") 
                            ? selectedFace[i] 
                            : (isClicked === i && type === "날씨") 
                            ? selectedWeather[i] 
                            : v}/>
                    ))

                }
            </Values>

        </MainLayout>
    );
}

const MainLayout = styled.div`
display : flex;
justify-content : space-between;
width : 75%;
`;

const Type = styled.div`
color: #5A5C62;
font-family: Pretendard;
font-size: 0.8rem;
font-style: normal;
font-weight: 600;
line-height: 133.072%; /* 1.16438rem */
`;

const Values = styled.div`
display : flex;
width : 80%;
`;

const Value = styled.div`
width: 4.5rem;
height: 1.1875rem;
margin-right : 0.25rem;
color: ${({isSelected})=> (isSelected ? "#FFF" : "#A6A9AF")};
background-color : ${({isSelected})=> (isSelected ? "#0E0E0F" : "#F4F5F7")};
font-family: Pretendard;
font-size: 0.65rem;
font-style: normal;
font-weight: 400;
line-height: 133.072%; /* 0.99806rem */
display : flex;
justify-content : center;
align-items : center;
`;

const Icon = styled.img`
width: 1.926rem;
height: 1.92669rem;
margin-right : 1.12rem;
`
