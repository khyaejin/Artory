import React from 'react';
import styled from 'styled-components';

import REPLYARROW from '../../assets/replyarrow.svg';

export default function Reply({id, profile, replyText}) {
    return (
        <ReplyContainer>
            <img src={REPLYARROW}/>
            <ProfileImg src={profile}/>
            <div>{replyText}</div>
        </ReplyContainer>
    )
}

const ReplyContainer = styled.div`
display:flex;
gap: 5px;
height: 40px;
align-items: center;
font-size: 0.65rem;
font-weight: 500;
`;

const ProfileImg = styled.img`
width: auto;
height: 100%;
`;

