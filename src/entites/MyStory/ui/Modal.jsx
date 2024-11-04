import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import ReactModal from 'react-modal'
import StandardInput from '../../../shared/components/StandardInput';
import { Exhibitions } from '../../../shared/dummy/ExhibitionDummy'

// 이미지
import GLASSES from '../../../assets/searchicon.svg'
import StandardPoster from '../../../shared/components/StandardPoster';

export default function Modal({ isShowModal, setIsShowModal }) {
  const [isInputClick, setIsInputClick] = useState(false);
  const [isEnterClick, setIsEnterClick] = useState(false);
  const navigate = useNavigate();

  const onKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      setIsEnterClick(true);
    }
  };

  const onClickPoster = (exhibition) => {
    console.log(exhibition);
    navigate('/mystory/storywrite', { state: { exhibition } });  // state로 exhibition 객체 전달
  };

  return (
    <ReactModal
      isOpen={isShowModal}
      onRequestClose={() => setIsShowModal(false)}
      style={StyledModal}
    >
      <StandardInput
        placeholder="전시 검색"
        isInputClick={isInputClick}
        onFocus={() => setIsInputClick(true)}
        onBlur={() => setIsInputClick(false)}
        onKeyDown={(e) => onKeyDownEnter(e)}
      />
      {!isEnterClick && <StyledImg src={GLASSES} />}
      {
        isEnterClick &&
        <Result>
          {Exhibitions.map((e, i) => (
            <PosterImg key={i} src={e.포스터} onClick={() => onClickPoster(e)} />
          ))}
        </Result>
      }
    </ReactModal>
  );
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
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto",
  },
};

const ResultSection = styled.div`
  border: 1px solid;
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  margin-top: 8rem;
`;

const Result = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const PosterImg = styled.img`
  width: 10.25rem;
  height: 14.9375rem;
  margin-top: 0.88rem;
  margin-right: 0.88rem;
`;
