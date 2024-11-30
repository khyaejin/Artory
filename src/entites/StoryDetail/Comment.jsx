import React, { useEffect, useState } from 'react'
import { Stories } from '../../shared/dummy/StoryDummy';
import { Users } from '../../shared/dummy/UserDummy';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import Emotion from './Emotion';
import styled from 'styled-components'

// image
import DOWNBUTTON from '../../assets/downbutton-black.svg';
import UPBUTTON from '../../assets/upbutton-black.svg';

export default function Comment({ storyId, setIsShowModal, isClickDelete, setIsClickDelete }) {
    const [isOpenCommentInput, setIsOpenCommentInput] = useState(false);
    const [selectedFaceId, setSelectedFaceId] = useState(null);
    const [selectedFace, setSelectedFace] = useState(null);
    const [input, setInput] = useState('');
    const [loginUser, setLoginUser] = useState(Users[0]); // 현재 로그인된 사용자의 정보를 가져온다
    const [commentList, setCommentList] = useState(Stories[storyId]?.댓글 || []); 
    const [saveCommentId, setSaveCommentId] = useState(null);

    const setFace = (data) => {
        setSelectedFaceId(data.id);
        setSelectedFace(data.selectedSrc)
    }

    // 댓글 추가 기능
    const addComment = () => {
        if (input !== '') {
            const lastIndex = commentList.length;
            const newComment = {
                "아이디": lastIndex+1,
                "작성자아이디": loginUser.id,
                "프로필": loginUser.profile,
                "작성자": loginUser.name,
                "이모지": selectedFace,
                "댓글": input,
            };
            setCommentList([...commentList, newComment]); // 더미데이터 배열 복사본을 생성하고 새로운 댓글 추가
            setInput('');
        }
    }
    // 댓글 삭제 기능
    useEffect(() => {
        if (isClickDelete && saveCommentId) { // 삭제 '예'버튼을 누르고 && 선택한 해당 댓글 아이디가 있을 경우에 실행한다
            setCommentList(prevComments => prevComments.filter(comment => comment.아이디 !== saveCommentId));
            setSaveCommentId(null); // 다음 호출을 방지하기 위해 ID 초기화
            setIsShowModal(false); // 모달 닫기
            setIsClickDelete(false); // 다시 삭제 모달이 뜨도록. 이렇게 설정하지 않으면 삭제 버튼 누를시 모달창이 뜨지 않고 바로 삭제된다.
        }
    }, [isClickDelete, saveCommentId, setIsShowModal]);

    return (
        <>
            <CommonBox>
                <CommentTitleBox onClick={() => setIsOpenCommentInput(!isOpenCommentInput)}>
                    <CommonTitleText>댓글작성</CommonTitleText>
                    <img src={isOpenCommentInput ? UPBUTTON : DOWNBUTTON} />
                </CommentTitleBox>
                {/* 댓글 작성칸 열기 */}
                {isOpenCommentInput && (
                    <>
                        <CommentInputTitle>전시에 대한 공감 표시를 선택해주세요</CommentInputTitle>
                        <Emotion
                            selectedFaceId={selectedFaceId}
                            setFace={setFace}
                        />
                        <CommentInput
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onSubmit={addComment}
                        />
                    </>
                )}
            </CommonBox>
            {/* 댓글 리스트 */}
            <CommonBox>
                <CommentListContainer>
                    {
                        commentList.map((data, i) => (
                            <CommentItem
                                key={data.아이디}
                                id={data.아이디}
                                authorId={data.작성자아이디}
                                profile={data.프로필}
                                userName={data.작성자}
                                emoji={data.이모지}
                                comment={data.댓글}
                                reply={data.대댓글}
                                commentItem={data}
                                setIsShowModal={setIsShowModal}
                                setSaveCommentId={setSaveCommentId}
                                isClickDelete={isClickDelete}
                                setIsClickDelete={setIsClickDelete}
                            />
                        ))
                    }
                </CommentListContainer>
            </CommonBox>
        </>
    )
}

const CommonBox = styled.div`
box-shadow: 1px 2px 8px #f3f3f3;
border: none;
font-size: small;
font-weight: 600;
padding: 14px;
height: fit-content;
margin-bottom: 16px;

`;

const CommonTitleText = styled.h3`
font-weight: 700;
`;

const CommentTitleBox = styled.div`
display: flex;
gap: 7px;
cursor: pointer;
`;

const CommentListContainer = styled.div`
display:flex;
flex-direction: column;
gap: 36px;
height: 629px;
overflow-y: auto; /* 높이가 넘칠 때 스크롤 생성 */
overflow-x: hidden; /* 가로 스크롤 숨김 */
`;

const CommentInputTitle = styled.div`
color: #5A5C62;
fontSize: 0.6rem;
margin-bottom: 13px;
`;