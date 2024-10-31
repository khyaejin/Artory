import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import StandardInput from '../../../shared/components/StandardInput';

//이미지
import GLASSES from '../../../assets/searchicon.svg'

export default function Modal({isShowModal, setIsShowModal}) {
    const [isInputClick, setIsInputClick] = useState(false);
  return (
        <ReactModal 
            isOpen={isShowModal}
            onRequestClose={() => setIsShowModal(false)}
            style={StyledModal}
        >
            <StandardInput 
                placeholder="전시 검색" 
                width="34.89513rem"
                height="3.69913rem"
                marginTop="0"
                isInputClick={isInputClick} 
                onFocus={()=>setIsInputClick(true)}
                onBlur={()=>setIsInputClick(false)}
            />
            <StyledImg src={GLASSES}/>
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
      width: "46.625rem",
      height: "28.375rem",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection : "column",
      alignItems: "center",
      overflow: "auto",
    },
  };

const StyledImg = styled.img`
width: 3.75rem;
height: 3.75rem;
margin-top : 8rem;
`
