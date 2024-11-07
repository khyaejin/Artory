import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { comments } from '../../shared/dummy/CommentDummy';
import { Stories } from '../../shared/dummy/StoryDummy';

// image
import DOWNBUTTON from '../../assets/downbutton-black.svg';
import UPBUTTON from '../../assets/upbutton-black.svg';

import FACE_G1 from '../../assets/face/face_g1.svg';
import FACE_G2 from '../../assets/face/face_g2.svg';
import FACE_G3 from '../../assets/face/face_g3.svg';
import FACE_G4 from '../../assets/face/face_g4.svg';
import FACE_G5 from '../../assets/face/face_g5.svg';
import FACE_G6 from '../../assets/face/face_g6.svg';
import FACE_G7 from '../../assets/face/face_g7.svg';
import FACE_G8 from '../../assets/face/face_g8.svg';
import FACE_G9 from '../../assets/face/face_g9.svg';

import FACE_B1 from '../../assets/face/face_b1.svg';
import FACE_B2 from '../../assets/face/face_b2.svg';
import FACE_B3 from '../../assets/face/face_b3.svg';
import FACE_B4 from '../../assets/face/face_b4.svg';
import FACE_B5 from '../../assets/face/face_b5.svg';
import FACE_B6 from '../../assets/face/face_b6.svg';
import FACE_B7 from '../../assets/face/face_b7.svg';
import FACE_B8 from '../../assets/face/face_b8.svg';
import FACE_B9 from '../../assets/face/face_b9.svg';
// 유저 이미지
import USER1 from '../../assets/user/1.svg';

import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import Emotion from './Emotion';

export default function Comment({ storyId, setIsShowModal, isClickDelete, setIsClickDelete }) {
    const [isOpenComment, setIsOpenComment] = useState(false);
    const [selectedFaceId, setSelectedFaceId] = useState(null);
    const [selectedFace, setSelectedFace] = useState(null);
    const [input, setInput] = useState('');
    const [userId, setUserId] = useState(1);
    //const [commentList, setCommentList] = useState(comments);
    const [commentList, setCommentList] = useState(Stories[storyId]?.댓글 || []); 
    const [saveCommentId, setSaveCommentId] = useState(null);

    // 감정 이모티콘 목록
    const faces = [
        { id: 1, src: FACE_G1, selectedSrc: FACE_B1, label: "Happy" },
        { id: 2, src: FACE_G2, selectedSrc: FACE_B2, label: "Satisfied" },
        { id: 3, src: FACE_G3, selectedSrc: FACE_B3, label: "Neutral" },
        { id: 4, src: FACE_G4, selectedSrc: FACE_B4, label: "Sad" },
        { id: 5, src: FACE_G5, selectedSrc: FACE_B5, label: "Crying" },
        { id: 6, src: FACE_G6, selectedSrc: FACE_B6, label: "Love" },
        { id: 7, src: FACE_G7, selectedSrc: FACE_B7, label: "Sweat" },
        { id: 8, src: FACE_G8, selectedSrc: FACE_B8, label: "Sleepy" },
        { id: 9, src: FACE_G9, selectedSrc: FACE_B9, label: "Sleepy" },
    ];

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
                "작성자아이디": userId,
                "프로필": USER1,
                "작성자": "나야나",
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
            console.log(saveCommentId);

            setSaveCommentId(null); // 다음 호출을 방지하기 위해 ID 초기화
            setIsShowModal(false); // 모달 닫기
            setIsClickDelete(false); // 다시 삭제 모달이 뜨도록. 이렇게 설정하지 않으면 삭제 버튼 누를시 모달창이 뜨지 않고 바로 삭제된다.
        }
    }, [isClickDelete, saveCommentId, setIsShowModal]);

    return (
        <>
            <CommonBox>
                <CommentTitleBox onClick={() => setIsOpenComment(!isOpenComment)}>
                    <CommonTitleText>댓글작성</CommonTitleText>
                    <img src={isOpenComment ? UPBUTTON : DOWNBUTTON} />
                </CommentTitleBox>
                {isOpenComment ? (
                    <>
                        <div style={{ color: '#5A5C62', fontSize: '0.6rem', marginBottom: '13px' }}>전시에 대한 공감 표시를 선택해주세요</div>
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
                ) : (
                    <></>
                )}

            </CommonBox>
            {/* 댓글 리스트 */}
            <CommonBox>
                <CommentContainer>
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
                </CommentContainer>

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

const CommentContainer = styled.div`
display:flex;
flex-direction: column;
gap: 36px;
height: 629px;
overflow-y: auto; /* 높이가 넘칠 때 스크롤 생성 */
overflow-x: hidden; /* 가로 스크롤 숨김 */
`;