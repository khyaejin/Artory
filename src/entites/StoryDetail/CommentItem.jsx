import React, { useState } from 'react'
import styled from 'styled-components'
import { comments } from '../../shared/dummy/CommentDummy';

import DOWNBUTTON from '../../assets/downbutton-story.svg';
import UPBUTTON from '../../assets/upbutton-story.svg';
import CommentInput from './CommentInput';
import Reply from './Reply';

import USER1 from '../../assets/user/1.svg';

export default function CommentItem({ id, profile, userName, emoji, comment, reply, commentItem }) {
    const [isOpenReply, setIsOpenReply] = useState(false);
    const [input, setInput] = useState('');
    const [userId, setUserId] = useState(1);
    const [selectedFaceId, setSelectedFaceId] = useState(null);
    const [selectedFace, setSelectedFace] = useState(emoji);
    const [commentText, setCommentText] = useState(comment);
    const [isClickEditBtn, setIsClickEditBtn] = useState(false);

    const setFace = (data) => {
        setSelectedFaceId(data.id);
        setSelectedFace(data.selectedSrc)
    }

    const addReply = () => {
        if (input != '') {
            const newReply = {
                "아이디": id,
                "프로필": USER1,
                "댓글": input
            }
            commentItem.대댓글.push(newReply);
            setInput('');

        }
    }

    const handleEdit = () => {
        setIsClickEditBtn(!isClickEditBtn);
    }

    const handleDelete = () => {

    }

    return (
        <CommentItemContainer>
            <ProfileImg src={profile} />
            <CommentWrapper>
                <UserNameText>{userName}</UserNameText>
                {!isClickEditBtn ? (
                    <CommentBox>
                        <img src={selectedFace} />
                        {commentText}
                        {userId === id ? (
                            <ChangeBox>
                                <div onClick={handleEdit}>수정</div> | <div onClick={handleDelete}>삭제</div>
                            </ChangeBox>
                        ) : (null)}
                    </CommentBox>
                ) : (
                    <CommentInput
                        type={'commentEdit'}
                        value={commentText}
                        onChange={e => setCommentText(e.target.value)}
                        height={'90px'}
                        onSubmit={handleEdit}
                        selectedFaceId={selectedFaceId}
                        onSetFace={setFace}
                    />
                )}
                {reply ? (
                    reply.map((data, i) => (
                        <Reply
                            id={data.아이디}
                            profile={data.프로필}
                            replyText={data.댓글}
                        />
                    ))
                ) : (null)}

                <ReplyButtonBox onClick={() => setIsOpenReply(!isOpenReply)}>
                    <img src={isOpenReply ? UPBUTTON : DOWNBUTTON} />
                    댓글 달기
                </ReplyButtonBox>
                {isOpenReply ? (
                    <CommentInput
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        height={'42px'}
                        onSubmit={addReply}
                    />
                ) : (null)}
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
align-items: center;
gap: 5px;
font-size: 0.65rem;
font-weight: 500;
`;

const UserNameText = styled.div`
font-weight: 700;
`;

const CommentWrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
gap: 10px;
`;

const ReplyButtonBox = styled.div`
display:flex;
gap: 5px;
cursor: pointer;
`;

const ChangeBox = styled.div`
display: flex;
gap: 7px;
color: #A6A9AF;
font-size: 0.65rem;
margin-left: 20px;
cursor: pointer;
`;