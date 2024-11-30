import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Users } from '../../shared/dummy/UserDummy';

// 이미지
import DOWNBUTTON from '../../assets/downbutton-story.svg';
import UPBUTTON from '../../assets/upbutton-story.svg';
import CommentInput from './CommentInput';
import Reply from './Reply';

export default function CommentItem({ id, authorId, profile, userName, emoji, comment, reply, commentItem, setIsShowModal, setSaveCommentId, isClickDelete, setIsClickDelete }) {
    const [isOpenReply, setIsOpenReply] = useState(false);
    const [input, setInput] = useState('');
    const [loginUser, setLoginUser] = useState(Users[0]); // 현재 로그인된 사용자의 정보를 가져온다
    const [selectedFaceId, setSelectedFaceId] = useState(null);
    const [selectedFace, setSelectedFace] = useState(emoji);
    const [commentText, setCommentText] = useState(comment);
    const [isClickEditBtn, setIsClickEditBtn] = useState(false);
    const [replies, setReplies] = useState(reply || []);
    const [isClickDeleteBtn, setIsClickDeleteBtn] = useState(false);
    const [saveReplyId, setSaveReplyId] = useState(null);

    const setFace = (data) => {
        setSelectedFaceId(data.id);
        setSelectedFace(data.selectedSrc)
    }

    const addReply = () => {
        if (input !== '') {
            const lastIndex = replies.length > 0 ? replies[replies.length - 1].아이디 : 0; // replies가 빈 배열일 때 0으로 설정한다
            const newReply = {
                "아이디": lastIndex + 1,
                "작성자아이디": loginUser.id,
                "프로필": loginUser.profile,
                "댓글": input
            };
            
            setReplies(prevReplies => [...prevReplies, newReply]);
            setInput('');
        }
    };

    const handleEdit = () => {
        setIsClickEditBtn(!isClickEditBtn);
    }

    const handleDelete = (id) => {
        setIsClickDeleteBtn(!isClickDeleteBtn);
        setIsShowModal(true);
        setSaveCommentId(id);
    }

    useEffect(() => {
        if(isClickDelete && saveReplyId) {
            setReplies(prevReplies => prevReplies.filter(replies => replies.아이디 !== saveReplyId));
            setSaveCommentId(null);
            setIsShowModal(false);
            setIsClickDelete(false);
        } 
    },[isClickDelete])

    return (
        <CommentItemContainer>
            <ProfileImg src={profile} />
            <CommentWrapper>
                <UserNameText>{userName}</UserNameText>
                {!isClickEditBtn ? (
                    <CommentBox>
                        <img src={selectedFace} />
                        {commentText}
                        {loginUser.id === authorId && (
                            <ChangeBox>
                                <div onClick={handleEdit}>수정</div> | <div onClick={() => handleDelete(id)}>삭제</div>
                            </ChangeBox>
                        )}
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

                {replies && (
                    replies.map((data, i) => (
                        <Reply
                            key={i}
                            id={data.아이디}
                            authorId={data.작성자아이디}
                            profile={data.프로필}
                            replyText={data.댓글}
                            userId={loginUser.id}
                            commentItem={commentItem}
                            setIsShowModal={setIsShowModal}
                            setSaveReplyId={setSaveReplyId}
                        />
                    ))
                )}

                <ReplyButtonBox onClick={() => setIsOpenReply(!isOpenReply)}>
                    <img src={isOpenReply ? UPBUTTON : DOWNBUTTON} />
                    댓글 달기
                </ReplyButtonBox>
                {isOpenReply && (
                    <CommentInput
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        height={'50px'}
                        onSubmit={addReply}
                    />
                )}
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