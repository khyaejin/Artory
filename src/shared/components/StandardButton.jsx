import React from 'react'
import styled from 'styled-components'
export default function StandardButton({ text, width, height,marginRight, onClick,marginBottom }) {
    return (
        <MainLayout
            width={width}
            height={height}
            marginRight={marginRight}
            onClick={onClick}
            marginBottom={marginBottom}
        >
            {text}
        </MainLayout>
    )
}

const MainLayout = styled.button`
width: ${({ width }) => (width  || "20.375rem")};
height:${({ height }) => (height || "3.25rem")};
cursor: pointer;
background-color: #0E0E0F;
color:  #FFF;
border: none;
display : flex;
justify-content : center;
align-items : center;
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 600;
line-height: 133.072%; /* 1.16438rem */
letter-spacing: 0.03063rem;
margin-right : ${({ marginRight }) => (marginRight || "0rem")};
margin-bottom : ${({ marginBottom }) => (marginBottom || "0rem")};
`