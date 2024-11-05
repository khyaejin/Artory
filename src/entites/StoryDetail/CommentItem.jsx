import React, { useState } from 'react'
import styled from 'styled-components'
import { comments } from '../../shared/dummy/CommentDummy';

import DOWNBUTTON from '../../assets/downbutton-story.svg';
import UPBUTTON from '../../assets/upbutton-story.svg';
import CommentInput from './CommentInput';
import Reply from './Reply';

import USER1 from '../../assets/user/1.svg';

export default function CommentItem({profile, userName, emoji, comment, reply, commentItem}) {
    const [isOpenReply, setIsOpenReply] = useState(false);
    const [input, setInput] = useState('');

    const addReply = () => {
        if(input != '') {
            const newReply = {
                "프로필": USER1,
                "댓글": input
            }
            commentItem.대댓글.push(newReply);
            setInput('');

        }
    }

    return (
        <CommentItemContainer>
            <ProfileImg src={profile}/>
            <CommentWrapper>
                <UserNameText>{userName}</UserNameText>
                <CommentBox>
                    <img src={emoji}/>
                    {comment}
                </CommentBox>
                { reply ? (
                    reply.map((data, i) => (
                        <Reply
                        profile={data.프로필}
                        replyText={data.댓글}
                        />
                    ))
                ) : (null)}

                <ReplyButtonBox onClick={() => setIsOpenReply(!isOpenReply)}>
                    <img src={isOpenReply ? UPBUTTON : DOWNBUTTON}/>
                    댓글 달기
                </ReplyButtonBox>
                {isOpenReply ? (
                    <CommentInput
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    height={'42px'}
                    onSubmit={addReply}
                    />
                ) : ( null )}
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
`;