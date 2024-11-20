import React from 'react'
import styled from 'styled-components'
export default function MyStoryButton({ text, width, height,marginRight, onClick }) {
    return (
        <MainLayout
            width={width}
            height={height}
            marginRight={marginRight}
            onClick={onClick}
        >
            {text}
        </MainLayout>
    )
}

const MainLayout = styled.button`
    margin-top: 20px; /* 버튼이 나올 때 위에서 적당한 여백을 주어 배치 */
    width: ${({ width }) => (width  || "20.375rem")};
    height:${({ height }) => (height || "3.25rem")};
    background-color: #0E0E0F;
    color:  #FFF;
    border: none;
    display : flex;
    justify-content : center;
    align-items : center;
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 133.072%; /* 1.99606rem */
    letter-spacing: 0.0525rem;
    margin-right : ${({ marginRight }) => (marginRight || "0rem")};
`