import React from 'react';
import styled from 'styled-components';
import Emotion from './Emotion';

function CommentInput({ value, onChange, onSubmit, height, type, onSetFace, selectedFaceId}) {
    return (
        <CommentInputBox height={height}>
            {type === 'commentEdit' ? (
                <Emotion
                size={'22px'}
                setFace={onSetFace}
                margin={'3px'}
                selectedFaceId={selectedFaceId}
                />
                
            ) : (null)}
            <CommentTextArea
                value={value}
                onChange={onChange}
                placeholder='댓글을 입력해주세요'
            />
            <SubmitButton onClick={onSubmit}>완료</SubmitButton>
        </CommentInputBox>
    );
}

export default CommentInput;

const CommentInputBox = styled.div`
box-sizing: border-box;
width: 100%;
height: ${props => props.height || '130px'};
padding: 14px;
position: relative;
background-color: #f4f5f7;
display: flex;
flex-direction: column;
gap: 8px; 
`;

const CommentTextArea = styled.textarea`
resize: none;
color: #28292a;
font-weight: 500;
background-color: #f4f5f7;
border: none;
outline: none;
width: 100%;
height: 100%;
box-sizing: border-box;
flex-grow: 1;
padding: 8px; 
`;

const SubmitButton = styled.button`
position: absolute;
bottom: 8px;
right: 8px;
font-weight: 600;
font-size: medium;
border: none;
background-color: black;
color: white;
padding: 5px 32px;
cursor: pointer;

`;

