import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import 'moment/locale/ko';

export default function Calendar() {
    useEffect(() => {
        moment.locale('ko');
    }, []);

    const startDay = moment().clone().startOf("month").startOf("week");
    const endDay = moment().clone().endOf("month").endOf("week");
    const day = startDay.clone().subtract(1, "day");
    const calendar = [];
    const weeks = ['일', '월', '화', '수', '목', '금', '토'];

    while (day.isBefore(endDay, "day")) {
        calendar.push(
            Array(7)
                .fill(0)
                .map(() => day.add(1, "day").clone())
        );
    }

    return (
        <MainLayout>

            {/* 헤더 */}
            <Header>
                {/* 일단 하드코딩 해둠 */}
                10월  
            </Header>

            {/* 요일 */}
            <WeekContainer>

                {weeks.map((day, dayIndex) => (
                    <WeekDay dayIndex={dayIndex}>{day}</WeekDay>
                ))}

            </WeekContainer>

            {/* 날짜 */}
            {calendar.map((week, weekIndex) => (

                <DayRow>
                    {week.map((date, dayIndex) => {
                        return (
                            <Day>{date.format('D')}</Day>
                        );
                    })}
                </DayRow>

            ))}
        </MainLayout>
    );
}

const MainLayout = styled.div`
width: 45.9375rem;
height: 32.625rem;
flex-shrink: 0;
background: #FFF;
box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.10);
margin-right : 13.38rem;
`

const Header = styled.div`
color: var(--Label-Colors-LC-L-Primary, #000);
font-feature-settings: 'liga' off, 'clig' off;
font-family: Pretendard;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: 1.5rem; /* 100% */
letter-spacing: 0.125rem;
display : flex;
justify-content : center;
margin-bottom : 2.87rem;
`

const WeekContainer = styled.div`
display : flex;
justify-content : space-around;
text-align: center;
font-feature-settings: 'liga' off, 'clig' off;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: 1rem; /* 100% */
margin-bottom : 1.44rem;
`;

const WeekDay = styled.span`
color : ${({ dayIndex }) => (dayIndex === 0 ? "#F85835" : "#3C3C4399")};
`;

const DayRow = styled.div`
height: 3.875rem;
display : flex;
justify-content : space-around;
margin-bottom : 1.2rem;
margin-left : 2rem;
`;

const Day = styled.div`
width: 4.875rem;
height: 3.875rem;
padding-left : 1rem;
padding-top : 0.5rem;
flex-shrink: 0;
color: var(--2, #28292A);
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 1.3125rem; /* 150% */
letter-spacing: -0.02rem;
&:hover {
    background-color: #F4F5F7;
  }
`;

