import React, { useState } from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate } from "react-router-dom";

//이미지
import LIKE from '../../assets/like.svg'
import FILLLIKE from '../../assets/filllike.svg'
import SAVE from '../../assets/save.svg'
import FILLSAVE from '../../assets/fillsave.svg'

export default function StandardPoster({index, poster}) {
    const [isLikeClick, setIsLikeClick] = useState(false)
    const [isSaveClick, setIsSaveClick] = useState(false)
    
    const navigate = useNavigate();
    const location = useLocation();

    const handlePoster = () => {
      if(location.pathname === '/story') {
        navigate(`/story/${index}`);
      } else if (location.pathname === '/exhibition') {
        navigate(`/exhibition/${index}`);
      } else {
        <></>
      }
    }

  return (
    <MainLayout>

        {/* 포스터 이미지 */}
        <StyledPoster src={poster}  onClick={handlePoster}/>
        <Linear onClick={handlePoster}/>

        {/* 좋아요와 저장 버튼 */}
        <Like src={isLikeClick ? FILLLIKE : LIKE} onClick={()=>{isLikeClick ? setIsLikeClick(false) : setIsLikeClick(true)}}/>
        <Save src={isSaveClick ? FILLSAVE : SAVE} onClick={()=>{isSaveClick ? setIsSaveClick(false) : setIsSaveClick(true)}}/>

    </MainLayout>
  )
}

const MainLayout = styled.div`
height: 268px;
width: 186px; 

position: relative;
margin-bottom : 20%;
`
const StyledPoster = styled.img`
height: 100%;
width: 100%; 

`
const Linear = styled.div`
position: absolute;
bottom: 0;
width: 100%;
height: 60%; 
background-image: linear-gradient(rgba(217, 217, 217, 0), rgba(0, 0, 0, 0.7));
display: flex;
justify-content: center;
align-items: center;
z-index: 1;

`;

const Like = styled.img`
position: absolute;
bottom: 4%;
left : 7%;
z-index: 2;
cursor: pointer;
`

const Save = styled.img`
position: absolute;
bottom: 4%;
right : 7%;
z-index: 2;
cursor: pointer;
`

