import React from 'react';
import styled from 'styled-components';

function CommentInput({ value, onChange, onSubmit, height }) {
    return (
        <CommentInputBox height={height}>
            <CommentTextArea
                value={value}
                onChange={onChange}
                height={height}
                placeholder='댓글을 입력해주세요'
            />
            <SubmitButton onClick={onSubmit}>완료</SubmitButton>
        </CommentInputBox>
    );
}

export default CommentInput;

const CommentInputBox = styled.div`
min-height: ${props => props.height || '130px'};
padding: 14px;
position: relative;
background-color: #f4f5f7;
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
min-height: ${props => props.height || '120px'};
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
`;

