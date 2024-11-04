import React from 'react'
import styled from 'styled-components'

export default function Banner({ image, title }) {
    return (
      <MainLayout>

        <img src={image} alt="" style={{ width: '100%', filter: 'blur(5px)' }} />

        <Poster>
          <img src={image} alt="" />
        </Poster>

        <Title>
          <p>{title}</p>
        </Title>
        
      </MainLayout>
    );
  }
  const MainLayout = styled.div`
    position: relative;
    width: 100%;
    height: 27.1875rem;
    overflow-y: hidden;
  `;
  const Poster = styled.div`
    z-index: 5;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    text-align: center;
    width: 100%;
    height: 100%;
    & img {
      height: 100%;
    }
  `;
  const Title = styled.div`
    z-index: 6;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content : center;
    p {
      width: 820px;
      line-height: normal;
    }
  `;
