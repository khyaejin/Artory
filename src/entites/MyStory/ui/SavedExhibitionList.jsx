import React from 'react'
import styled from 'styled-components'
import { Exhibitions } from '../../../shared/dummy/ExhibitionDummy';
import StandardPoster from '../../../shared/components/StandardPoster';

export default function SavedExhibitionList() {
    return (
        <MainLayout>
            <Title>저장한 전시</Title>
            <ExhibitionContainer>
                {
                    Exhibitions.map((e, i) => (
                        <StandardPoster poster={e.포스터}/>
                    ))
                }
            </ExhibitionContainer>
        </MainLayout>
    )
}

const MainLayout = styled.div`
width : 70%;
justify-content : space-evenly;
margin-top : 8.44rem;
`;
const Title = styled.div`
color: #000;
font-family: Pretendard;
font-size: 1.875rem;
font-style: normal;
font-weight: 700;
line-height: 133.072%;
letter-spacing: 0.06563rem;
margin-bottom : 1.12rem;
`
const ExhibitionContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`