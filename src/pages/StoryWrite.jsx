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
  const [date,setDate] = useState();
  const [data, setData] = useState('');
  const [title, setTitle] = useState(''); //제목
  const [viewingTime, setViewingTime] = useState(''); //시간
  const [satisfactionLevel, setSatisfactionLevel] = useState(''); //만족도
  const [weather, setWeather] = useState(''); //날씨
  const [companion, setCompanion] = useState(''); //동반인
  const [genre, setGenre] = useState(''); //장르1
  const [keyword, setKeyword] = useState(''); //키워드

  useEffect(() => {
    // console.log(viewingTime)
    if (exhibition) {
      console.log(exhibition);  //exhibition 객체 출력
    }
  }, [exhibition,date,viewingTime]);

  return (
    <MainLayout>

      <Banner image={exhibition.포스터} title={exhibition.제목}/>

      <WritingSection 
        setDate={setDate} 
        data={data} 
        setData={setData} 
        title={title}
        setTitle={setTitle}
        setViewingTime={setViewingTime}
        setSatisfactionLevel={setSatisfactionLevel}
        setWeather={setWeather}
        setCompanion={setCompanion}
        setGenre={setGenre}
        setKeyword={setKeyword}
        />

      <StandardButton text="저장" width="15rem" height="2.5rem" onClick={()=>setIsShowModal(true)} marginBottom="5rem"/>

      <Modal 
        isShowModal={isShowModal} 
        setIsShowModal={setIsShowModal} 
        date={date} 
        data={data}
        title={title}
        poster={exhibition.포스터}
        exhibitionTitle={exhibition.제목}
        viewingTime={viewingTime}
        satisfactionLevel={satisfactionLevel}
        weather={weather}
        companion={companion}
        genre={genre}
        keyword={keyword}
        />
      
    </MainLayout>
  );
}

const MainLayout = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
`