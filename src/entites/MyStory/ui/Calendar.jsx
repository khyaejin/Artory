import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import 'moment/locale/ko';

import PREV from '../../../assets/prevarrow.svg';
import NEXT from '../../../assets/nextarrow.svg';
import { useNavigate } from 'react-router-dom';

export default function Calendar({ date,data, title,exhibitionTitle,poster,viewingTime, satisfactionLevel,weather,companion,genre,keyword }) {
    const navigate = useNavigate()
    const [currentMonth, setCurrentMonth] = useState(moment());
    const [markDates, setMarkDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
      console.log(date)
      console.log(data)
      console.log(title)
      console.log(exhibitionTitle)
      console.log(poster)
      console.log(viewingTime)
      console.log(satisfactionLevel)
      console.log(weather)
      console.log(companion)
      console.log(genre)
      console.log(keyword)
        moment.locale('ko');
        if (date) {
            const formattedDate = moment(date).format('YYYY-MM-DD');
            setMarkDates([formattedDate]);
        }
    }, [date]);

    const startDay = currentMonth.clone().startOf('month').startOf('week');
    const endDay = currentMonth.clone().endOf('month').endOf('week');
    const day = startDay.clone().subtract(1, 'day');
    const calendar = [];
    const weeks = ['일', '월', '화', '수', '목', '금', '토'];

    while (day.isBefore(endDay, 'day')) {
        calendar.push(
            Array(7)
                .fill(0)
                .map(() => day.add(1, 'day').clone())
        );
    }

    const handlePrevMonth = () => {
        setCurrentMonth(currentMonth.clone().subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setCurrentMonth(currentMonth.clone().add(1, 'month'));
    };

    const handleDayClick = (currentDate, isCurrentMonth) => {
        if (!isCurrentMonth) return; // 현재 달이 아니면 클릭 불가
        const formattedDate = currentDate.format('YYYY-MM-DD');
        setSelectedDate(formattedDate === selectedDate ? null : formattedDate);
    };

    const strFormat = (str) => {
        if (str.length > 5) {
            const result = str.substr(0, 6);
            return result + '...';
        }
        return str;
    };

    return (
        <MainLayout>
            {/* 헤더 */}
            <Header>
                <img src={PREV} onClick={handlePrevMonth} alt="이전 달" />
                <div>{currentMonth.format('M월')}</div>
                <img src={NEXT} onClick={handleNextMonth} alt="다음 달" />
            </Header>

            {/* 요일 */}
            <WeekContainer>
                {weeks.map((day, dayIndex) => (
                    <WeekDay key={dayIndex} dayIndex={dayIndex}>
                        {day}
                    </WeekDay>
                ))}
            </WeekContainer>

            {/* 날짜 */}
            <DayContainer>
                {calendar.map((week, weekIndex) => (
                    <DayRow key={weekIndex}>
                        {week.map((currentDate, dayIndex) => {
                            const isCurrentMonth = currentDate.isSame(currentMonth, 'month');
                            return (
                                <Day
                                    key={dayIndex}
                                    onClick={() => handleDayClick(currentDate, isCurrentMonth)}
                                    isSelected={selectedDate === currentDate.format('YYYY-MM-DD')}
                                    isCurrentMonth={isCurrentMonth}
                                >
                                    <DayText
                                        isMarked={markDates.includes(currentDate.format('YYYY-MM-DD'))}
                                        isCurrentMonth={isCurrentMonth}
                                    >
                                        <span>{currentDate.format('D')}</span>
                                    </DayText>
                                    {markDates.includes(currentDate.format('YYYY-MM-DD')) && isCurrentMonth && (
                                        <Title>{strFormat(exhibitionTitle)}</Title>
                                    )}
                                    {selectedDate === currentDate.format('YYYY-MM-DD') &&
                                        markDates.includes(currentDate.format('YYYY-MM-DD')) &&
                                        isCurrentMonth && (
                                            <Story onClick={()=>navigate('/mystory/story')}>
                                                <span>{exhibitionTitle}</span>
                                            </Story>
                                        )}
                                </Day>
                            );
                        })}
                    </DayRow>
                ))}
            </DayContainer>
        </MainLayout>
    );
}

const MainLayout = styled.div`
  width: 50vw;
  height: 68vh;
  background: #fff;
  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1);
  margin-right: 13.38rem;
`;

const Header = styled.div`
  color: #000;
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
  color: ${({ dayIndex }) => (dayIndex === 0 ? '#F85835' : '#3C3C4399')};
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
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3125rem;
  letter-spacing: -0.02rem;
  padding: 1% 1% 0 1%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ isSelected, isCurrentMonth }) =>
    isSelected && isCurrentMonth ? '#f4f5f7' : 'transparent'};
  color: ${({ isCurrentMonth }) => (isCurrentMonth ? '#28292A' : '#D1D3D9')};
  pointer-events: ${({ isCurrentMonth }) => (isCurrentMonth ? 'auto' : 'none')}; /* 클릭 방지 */
  &:hover {
    background-color: ${({ isCurrentMonth }) => (isCurrentMonth ? '#f4f5f7' : 'transparent')};
  }
`;

const DayText = styled.div`
  background-color: ${({ isMarked, isCurrentMonth }) =>
    isMarked && isCurrentMonth ? '#0E0E0F' : 'transparent'};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ isMarked, isCurrentMonth }) =>
    isMarked && isCurrentMonth ? '#FFFFFF' : isCurrentMonth ? '#28292A' : '#D1D3D9'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Story = styled.div`
  width: 10rem;
  height: 2.4375rem;
  background-color: #fff;
  box-shadow: 0px 30px 84px 0px rgba(19, 10, 46, 0.08),
    0px 8px 32px 0px rgba(19, 10, 46, 0.07),
    0px 3px 14px 0px rgba(19, 10, 46, 0.03),
    0px 1px 3px 0px rgba(19, 10, 46, 0.13);
  position: absolute;
  left: 100%;
  z-index: 10;
  color: #505154;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 133.072%;
  letter-spacing: -0.045rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: #28292A;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 800;
  line-height: 133.072%;
  letter-spacing: -0.045rem;
  margin-left: 6%;
  margin-top: 8%;
  width: 4rem;
`;
