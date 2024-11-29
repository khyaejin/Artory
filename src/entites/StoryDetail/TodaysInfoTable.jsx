import React from 'react';
import styled from 'styled-components'

export default function TodaysInfoTable({ visitDate, totalTime, emotionImg, weatherImg, companion, categories }) {
    const tableHeaders = ['방문일', '관람소요시간', '만족도', '날씨', '동행인', '카테고리'];
    return (
        <TableLayout>
            <thead>
                <tr>
                    {tableHeaders.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <HighlightTagBox>{visitDate}</HighlightTagBox>
                    </td>
                    <td>
                        <HighlightTagBox>{totalTime}</HighlightTagBox>
                    </td>
                    <td>
                        <CommonImg src={emotionImg} alt="표정" />
                    </td>
                    <td>
                        <CommonImg src={weatherImg} alt="날씨" />
                    </td>
                    <td>
                        <HighlightTagBox>{companion}</HighlightTagBox>
                    </td>
                    <td>
                        <CategoryContainer>
                            {
                                categories.map((data, i) => (
                                    <HighlightTagBox key={i}>{data}</HighlightTagBox>
                                ))
                            }
                        </CategoryContainer>
                    </td>
                </tr>
            </tbody>
        </TableLayout>
    )
}

const TableLayout = styled.table`
max-width: 100%;
margin-top: 20px;

th, td {
width: fit-content;
padding-top: 5px;
vertical-align: middle;
padding-right: 20px;
}
th {
padding-right: 20px;

width: fit-content;

text-align: start;
vertical-align: middle;
color: #9ba0ae;
font-weight: 500;
min-width: 30px;
padding-bottom: 8px;
}
`;

const HighlightTagBox = styled.div`
background-color: #28292A;
padding: 3px;
color: white;
text-align: center;
`;

const CategoryContainer = styled.div`
display: flex;
gap: 5px;
`;

const CommonImg = styled.img`
height: 35px;
`;