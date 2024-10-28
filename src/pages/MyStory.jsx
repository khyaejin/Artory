import React from 'react'
import styled from 'styled-components'
import Calendar from '../entites/MyStory/ui/Calendar'

export default function MyStory() {
  return (
    <MainLayout>

        {/* 캘린더 */}
        <Calendar/>
        
    </MainLayout>
  )
}

const MainLayout = styled.div`
display : flex;
justify-content : center;
align-items: center;
`