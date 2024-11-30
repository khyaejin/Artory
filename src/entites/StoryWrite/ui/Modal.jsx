import React, { useEffect } from 'react'
import ReactModal from 'react-modal';
import styled from 'styled-components';
import StandardButton from '../../../shared/components/StandardButton';
import { useNavigate } from 'react-router-dom';
export default function Modal({ isShowModal, setIsShowModal,date,title }) {
    const navigate = useNavigate();
    useEffect(()=>{
        console.log(date);
    },[date])
    return (
        <ReactModal
            isOpen={isShowModal}
            onRequestClose={() => setIsShowModal(false)}
            style={StyledModal}
        >
            <StyledText>
                저장하시겠습니까?
            </StyledText>

            <StandardButton text="네" width="11rem" height="3rem" onClick={ ()=>navigate('/mystory', { state: { date, title} })}/>

        </ReactModal>
    )
}

const StyledModal = ReactModal.Styles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        width: "100%",
        height: "100vh",
        zIndex: 10,
    },
    content: {
        width: "30rem",
        height: "20rem",
        zIndex: 150,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent : "center",
        overflow: "auto",
        paddingLeft: "1.44rem",
        paddingRight: "1.44rem"
    },
};

const StyledText = styled.div`
color: var(--2, #28292A);
text-align: center;
font-family: Pretendard;
font-size: 1.875rem;
font-style: normal;
font-weight: 600;
line-height: 131%; /* 2.45625rem */
letter-spacing: 0.06563rem;
margin-bottom : 10%;
`