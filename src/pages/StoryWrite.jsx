import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Banner from '../entites/StoryWrite/ui/Banner';
import WritingSection from '../entites/StoryWrite/ui/WritingSection';
import StandardButton from '../shared/components/StandardButton';
import Modal from '../entites/StoryWrite/ui/Modal';

export default function StoryWrite() {
  const location = useLocation();
  const { exhibition } = location.state || {};  //location.state로 전달된 데이터 받기
  const [isShowModal,setIsShowModal] = useState(false);

  useEffect(() => {
    if (exhibition) {
      console.log(exhibition);  //exhibition 객체 출력
    }
  }, [exhibition]);

  return (
    <MainLayout>

      <Banner image={exhibition.포스터} title={exhibition.제목}/>

      <WritingSection/>

      <StandardButton text="저장" width="15rem" height="2.5rem" onClick={()=>setIsShowModal(true)} marginBottom="5rem"/>

      <Modal isShowModal={isShowModal} setIsShowModal={setIsShowModal}/>
      
    </MainLayout>
  );
}

const MainLayout = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
`