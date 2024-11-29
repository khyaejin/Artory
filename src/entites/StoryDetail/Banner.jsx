import React from 'react';
import styled from 'styled-components'

export default function Banner({ image, title }) {
    return (
        <MainLayout>
            <BackgroundImage src={image} alt="" />
            <PosterImage>
                <img src={image} alt="" />
            </PosterImage>
            <Title>
                <p>{title}</p>
            </Title>
        </MainLayout>
    )
}


const MainLayout = styled.div`
width: 100%;
height: 268px;
display:flex;
justify-content:center;
position:relative;
overflow-y: hidden;
`;

const BackgroundImage = styled.img`
position: absolute;
z-index: 1;
width: 120%;
height: 120%;
object-fit: cover;
filter: blur(5px);
`;

const PosterImage = styled.div`
position: absolute;
z-index: 5;
top: 0;
background-color: rgba(0, 0, 0, 0.4);
text-align: center;
width: 100%;
height: 100%;
`;

const Title = styled.div`
position: absolute;
z-index: 6;
top: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.3);
color: #fff;
text-align: center;
font-size: 3rem;
font-weight: bold;

display: flex;
justify-content: center;
align-items: center;

`;

const BannerImg = styled.img`
position: absolute;
z-index: 5;

`;

const BannerTitle = styled.div`
position: absolute;
z-index: 6;
background-color: rgba(0, 0, 0, 0.65);
width: 100%;
height:100%;
color: white;
font-size: 4rem;
display:flex;
align-items:center;
justify-content: center;
font-weight: 700;

`;