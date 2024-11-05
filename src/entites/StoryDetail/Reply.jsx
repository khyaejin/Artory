import React, { useState } from 'react';
import styled from 'styled-components';

import REPLYARROW from '../../assets/replyarrow.svg';
import CommentInput from './CommentInput';

export default function Reply({ id, profile, replyText, userId }) {
    const [reply, setReply] = useState(replyText);
    const [isClickEditBtn, setIsClickEditBtn] = useState(false);

    const handleEdit = () => {
        setIsClickEditBtn(!isClickEditBtn);
    }

    const handleDelete = () => {

    }

    return (
        <ReplyContainer>
            <img src={REPLYARROW} />
            {isClickEditBtn ? (
                <CommentInput 
                value={reply}
                onChange={e => setReply(e.target.value)}
                height={'42px'}
                onSubmit={handleEdit}
                />
            ) : (
                <>
                    <ProfileImg src={profile} />
                    <div>{reply}</div>
                </>
            )}
            {userId === id  && !isClickEditBtn  ? (
                <ChangeBox>
                    <div onClick={handleEdit}>수정</div> | <div onClick={handleDelete}>삭제</div>
                </ChangeBox>
            ) : (null)}

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

const ChangeBox = styled.div`
display: flex;
gap: 7px;
color: #A6A9AF;
font-size: 0.65rem;
margin-left: 20px;
cursor: pointer;
`;

