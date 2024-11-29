import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal'

export default function DeleteModal({ isShowModal, setIsShowModal, setIsClickDelete }) {
    const handleYes = () => {
        setIsShowModal(false);
        setIsClickDelete(true);
    }
    return (
        <ReactModal
            isOpen={isShowModal}
            onRequestClose={() => setIsShowModal(false)}
            style={StyledModal}
            ariaHideApp={false}
        >
            <h2>댓글을 삭제하시겠습니까?</h2>
            <ConfirmBtnContainer>
                <ConfirmBox onClick={handleYes}>예</ConfirmBox>
                <ConfirmBox onClick={() => setIsShowModal(false)}>아니요</ConfirmBox>
            </ConfirmBtnContainer>
        </ReactModal>
    )
}

const StyledModal = ReactModal.Styles = {
    overlay: {
        backgroundColor: " rgba(0, 0, 0, 0.4)",
        width: "100%",
        height: "100vh",
        zIndex: "10",
    },
    content: {
        width: "562px",
        height: "191px",
        zIndex: "150",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
    },
};

const ConfirmBtnContainer = styled.div`
display:flex;
gap: 8px;
`;

const ConfirmBox = styled.button`
border: none;
background-color: #0E0E0F;
width: 127px;
height: 36px;
color: white;
cursor: pointer;
`;
