import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useNavigate } from 'react-router-dom';
import ReactModal from 'react-modal';
import StandardInput from '../../../shared/components/StandardInput';
import { Exhibitions } from '../../../shared/dummy/ExhibitionDummy';

import GLASSES from '../../../assets/searchicon.svg';

export default function Modal({ isShowModal, setIsShowModal, setExhibition }) {
  const [isEnter, setIsEnter] = useState(false);
  const [searchExhibition, setSearchExhibition] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (input === '') {
      setIsEnter(false);
      setSearchExhibition([]);
    }
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (input === '') {
        setSearchExhibition([]);
      } else {
        const filteredData = Exhibitions.filter(exhibition => exhibition.제목.includes(input));
        setSearchExhibition(filteredData);
      }
      setIsEnter(true);
    }
  };

  const onClickPoster = (exhibition) => {
    navigate('/mystory/storywrite', { state: { exhibition } });
  };

  return (
    <ReactModal
      isOpen={isShowModal}
      onRequestClose={() => setIsShowModal(false)}
      style={StyledModal}
    >
      <InputContainer>
        <StandardInput
          placeholder="전시 검색"
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          marginLeft="13%"
        />
      </InputContainer>
      {
        isEnter ?
          <Result>
            {searchExhibition.map((e, i) => (
              <PosterImg key={i} src={e.포스터} onClick={() => onClickPoster(e)} />
            ))}
          </Result>
          :
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
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: 10,
  },
  content: {
    width: "46.625rem",
    height: "28.375rem",
    zIndex: 150,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto",
    paddingLeft : "1.44rem",
    paddingRight : "1.44rem"
  },
};

const StyledImg = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  margin-top: 8rem;
`;

const Result = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top : 5.61rem;
  gap : 1rem;
`;

const PosterImg = styled.img`
  width: 10.25rem;
  height: 14.9375rem;

`;

const InputContainer = styled.div`
  width: 100%;
   height: 4vw;
`
