import React from 'react'
import styled from 'styled-components'

export default function MainBanner() {
  return (
    <MainLayout>
        <ServiceIntro>
            Story community
        </ServiceIntro>
        <SubTitle>
            나만의 문화 이야기
        </SubTitle>
        <Title>
            ARTORY
        </Title>
    </MainLayout>
  )
}

const MainLayout = styled.div`
    width: 70%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`;

const Title = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 133.072%; /* 6.65363rem */
    letter-spacing: 0.175rem;
`;

const SubTitle = styled.div`
    color: #5D5D5D;
    font-family: Pretendard;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 133.072%; /* 3.32681rem */
    letter-spacing: -0.1rem;
`;

const ServiceIntro = styled.div`
    color: #595959;
    font-family: Pretendard;
    font-size: 0.93rem;
    font-style: normal;
    font-weight: 500;
    line-height: 133.072%; /* 1.16438rem */
    letter-spacing: 0.03063rem;
`;