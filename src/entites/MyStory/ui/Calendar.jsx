import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import 'moment/locale/ko';

// 이미지
import PREV from '../../../assets/prevarrow.svg';
import NEXT from '../../../assets/nextarrow.svg';

export default function Calendar({currentYear,setCurrentYear}) {
    const [currentMonth, setCurrentMonth] = useState(moment());

    useEffect(() => {
        moment.locale('ko');
    }, []);

    const startDay = currentMonth.clone().startOf("month").startOf("week");
    const endDay = currentMonth.clone().endOf("month").endOf("week");
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

    const handlePrevMonth = () => {
        setCurrentMonth(currentMonth.clone().subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setCurrentMonth(currentMonth.clone().add(1, 'month'));
    };

    return (
        <MainLayout>
            {/* 헤더 */}
            <Header>
                <img src={PREV} onClick={handlePrevMonth} alt="이전 달" />
                <div>
                    {currentMonth.format("M월")} 
                </div> 
                <img src={NEXT} onClick={handleNextMonth} alt="다음 달" />
            </Header>

            {/* 요일 */}
            <WeekContainer>
                {weeks.map((day, dayIndex) => (
                    <WeekDay key={dayIndex} dayIndex={dayIndex}>{day}</WeekDay>
                ))}
            </WeekContainer>

            {/* 날짜 */}
            <DayContainer>
                {calendar.map((week, weekIndex) => (
                    <DayRow key={weekIndex}>
                        {week.map((date, dayIndex) => (
                            <Day key={dayIndex}>
                                <span>{date.format('D')}</span>
                            </Day>
                        ))}
                    </DayRow>
                ))}
            </DayContainer>
        </MainLayout>
    );
}

const MainLayout = styled.div`
    width: 45.9375rem;
    height: 32.625rem;
    background: #FFF;
    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.10);
    margin-right: 13.38rem;
`;

const Header = styled.div`
    color:  #000;
    font-family: Pretendard;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.125rem;
    display: flex;
    justify-content: space-between;
    margin: 1.62rem 4rem 2.88rem 4rem;
    div {
        width: 13%;
        display: flex;
        justify-content: space-between;
    }
`;

const WeekContainer = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1rem;
    margin: 0 6.6rem 1.44rem 3rem;
    width: 80%;
`;

const WeekDay = styled.span`
    color: ${({ dayIndex }) => (dayIndex === 0 ? "#F85835" : "#3C3C4399")};
`;

const DayContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 2.5rem;
    margin-right: 2rem;
`;

const DayRow = styled.div`
    height: 3.875rem;
    display: flex;
    gap: 0.5rem;
    margin-right: 1%;
`;

const Day = styled.div`
    width: 20rem;
    height: 4rem;
    color:  #28292A;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3125rem;
    letter-spacing: -0.02rem;
    padding-left: 1%;
    padding-top: 0.5%;
    &:hover {
        background-color: #F4F5F7;
    }
`;
