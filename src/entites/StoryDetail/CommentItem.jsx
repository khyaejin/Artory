import React from 'react'
import styled from 'styled-components'

export default function CommentItem({profile, userName, emoji, comment}) {
    return (
        <CommentItemContainer>
            <ProfileImg src={profile}/>
            <CommentWrapper>
                <UserNameText>{userName}</UserNameText>
                <CommentBox>
                    <img src={emoji}/>
                    {comment}
                </CommentBox>
                <div>댓글 달기</div>
            </CommentWrapper>
        </CommentItemContainer>
    )
}

const CommentItemContainer = styled.div`
display: flex;
gap: 16px;

`;

const ProfileImg = styled.img`
width: 50px;
height: 50px;
`;

const CommentBox = styled.div`
display:flex;
justify-content: center;
align-items: center;
gap: 5px;
font-size: 0.65rem;
`;

const UserNameText = styled.div`
font-weight: 700;
`;

const CommentWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;