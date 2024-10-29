import React from 'react'
import styled from 'styled-components'
import Calendar from '../entites/MyStory/ui/Calendar'
import ProfileSection from '../entites/MyStory/ui/ProfileSection'
import CalendarAndMemo from '../entites/MyStory/ui/CalendarAndMemo'
import SavedExhibitionList from '../entites/MyStory/ui/SavedExhibitionList'

export default function MyStory() {
  return (
    <MainLayout>

        {/* 프로필과 버튼 섹션 */}
        <ProfileSection/>

        {/* 메모와 캘린더 섹션 */}
        <CalendarAndMemo/>

        {/* 저장한 전시 리스트 */}
        <SavedExhibitionList/>

    </MainLayout>
  )
}

const MainLayout = styled.div`
display : flex;
flex-direction : column;
align-items : center;
`