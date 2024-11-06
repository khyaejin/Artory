import React, { useState } from 'react';
import styled from 'styled-components';

import REPLYARROW from '../../assets/replyarrow.svg';
import CommentInput from './CommentInput';

export default function Reply({ authorId, id, profile, replyText, userId, commentItem, setIsShowModal, setSaveReplyId }) {
    const [reply, setReply] = useState(replyText);
    const [isClickEditBtn, setIsClickEditBtn] = useState(false);

    const handleEdit = () => {
        setIsClickEditBtn(!isClickEditBtn);
    }

    const handleDelete = () => {
        // const confirmed = window.confirm('정말 이 댓글을 삭제하시겠습니까?');
        // if (confirmed) {
        //     onDelete(id); // 부모에게 삭제 요청 전달
        // }
        setIsShowModal(true); // 삭제 확인 모달창을 연다
        //onDelete(id);
        setSaveReplyId(id);
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
            {userId === authorId  && !isClickEditBtn  && (
                <ChangeBox>
                    <div onClick={handleEdit}>수정</div> | <div onClick={() => handleDelete()}>삭제</div>
                </ChangeBox>
            )}

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

