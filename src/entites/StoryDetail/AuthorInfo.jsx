import React from 'react';
import styled from 'styled-components'

export default function AuthorInfo({ profileImage, authorName }) {
    return (
        <MainLayout>
            <AuthorImg src={profileImage} />
            <AuthorNameBox>
                <AuthorText>작성자</AuthorText>
                <AuthorName>{authorName}</AuthorName>
            </AuthorNameBox>
        </MainLayout>
    )
}

const MainLayout = styled.div`
display:flex;
margin: 67px 0 39px;

`;

const AuthorImg = styled.img`
width: 59px;
height: 59px;

`;

const AuthorNameBox = styled.div`
margin-top: 20px;
margin-left: 5px;
`;

const AuthorText = styled.div`
font-size: small;
font-weight: 300;
color: #9BA0AE;
`;
const AuthorName = styled.div`
margin-top: 3px;
font-weight: 700;
color: #717276;
`;
