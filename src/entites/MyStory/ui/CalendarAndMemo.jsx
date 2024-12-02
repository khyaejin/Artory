import React from 'react'
import styled from 'styled-components'
import Calendar from './Calendar'
import Memo from './Memo'
export default function CalendarAndMemo({date,data,title,exhibitionTitle,poster,viewingTime, satisfactionLevel,weather,companion,genre,keyword}) {
  return (
    <MainLayout>

        <Memo/>
        
        <Calendar date={date} data={data} title={title} exhibitionTitle={exhibitionTitle} poster={poster}  viewingTime={viewingTime} satisfactionLevel={satisfactionLevel} weather={weather} companion={companion} genre={genre} keyword={keyword}/>
      
    </MainLayout>
  )
}

const MainLayout = styled.div`
width : 100%;
margin-top : 1.19rem;
display : flex;
justify-content : space-between;
`