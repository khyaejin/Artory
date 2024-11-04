import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Banner from '../entites/StoryWrite/ui/Banner';
import WritingSection from '../entites/StoryWrite/ui/WritingSection';

export default function StoryWrite() {
  const location = useLocation();
  const { exhibition } = location.state || {};  //location.state로 전달된 데이터 받기

  useEffect(() => {
    if (exhibition) {
      console.log(exhibition);  //exhibition 객체 출력
    }
  }, [exhibition]);

  return (
    <MainLayout>

      <Banner image={exhibition.포스터} title={exhibition.제목}/>

      <WritingSection/>
      
    </MainLayout>
  );
}

const MainLayout = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
`