import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useLocation } from 'react-router-dom'; // useLocation 훅 추가
import ProfileSection from '../entites/MyStory/ui/ProfileSection';
import CalendarAndMemo from '../entites/MyStory/ui/CalendarAndMemo';
import SavedExhibitionList from '../entites/MyStory/ui/SavedExhibitionList';
import Modal from '../entites/MyStory/ui/Modal';
import Footer from '../shared/components/Footer';

export default function MyStory() {
  const location = useLocation(); 
  const [isShowModal, setIsShowModal] = useState(false);
  
  // undefined일 때 그대로 undefined로 유지
  const date = location.state?.date;
  const data = location.state?.data;
  const title = location.state?.title;
  const exhibitionTitle = location.state?.exhibitionTitle;
  const poster = location.state?.poster;
  const viewingTime = location.state?.viewingTime;
  const satisfactionLevel = location.state?.satisfactionLevel;
  const weather = location.state?.weather;
  const companion = location.state?.companion;
  const genre = location.state?.genre;
  const keyword = location.state?.keyword;

  useEffect(() => {
    console.log("받은 date:", date);
    console.log("받은 title:", title); 
  }, [date],title);

  return (
    <MainLayout>
      {/* 프로필과 버튼 섹션 */}
      <ProfileSection setIsShowModal={setIsShowModal} />

      {/* 메모와 캘린더 섹션 */}
      <CalendarAndMemo 
        date={date} 
        data={data}
        title={title} 
        exhibitionTitle={exhibitionTitle}
        poster={poster}
        viewingTime={viewingTime} 
        satisfactionLevel={satisfactionLevel}
        weather={weather} 
        companion={companion} 
        genre={genre} 
        keyword={keyword} />
      {/* 저장한 전시 리스트 */}
      <SavedExhibitionList />

      {/* 모달 */}
      {isShowModal && (
        <Modal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
      )}

      <Footer/>

    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
