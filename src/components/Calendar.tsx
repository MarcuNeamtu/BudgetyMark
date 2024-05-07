import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import ChevronLeft from '../assets/ChevronLeft'
import ChevronRight from '../assets/ChevronRight'

import freelancer from '../assets/freelancer.png'

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const renderDays = useCallback(() => {
    const days = []

    const today = new Date()
    const isToday = (date: Date) =>
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()

    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    )
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    )

    const startFrom = firstDayOfMonth.getDay()
    const daysInLastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate()

    for (let i = startFrom - 1; i >= 0; i--) {
      days.push(
        <Day key={`lastMonth-${i}`} isOtherMonth>
          {daysInLastMonth - i}
        </Day>
      )
    }

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const hasDot = Math.random() < 0.3
      const day = new Date(currentDate.getFullYear(), currentDate.getMonth(), i)
      days.push(
        <Day
          key={i}
          isCurrentDay={isToday(day)}
          isPast={today > day}
          hasDot={hasDot}
        >
          {i}
        </Day>
      )
    }

    const nextMonthDays = 7 - lastDayOfMonth.getDay() - 1
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push(
        <Day key={`nextMonth-${i}`} isOtherMonth>
          {i}
        </Day>
      )
    }

    return days
  }, [currentDate])

  const onPrev = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1))
  }

  const onNext = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1))
  }

  return (
    <Card
      title={
        <Header>
          <CurrentDate>
            {currentDate.toLocaleString('default', { month: 'long' })}{' '}
            {currentDate.getFullYear()}
          </CurrentDate>
          <button onClick={onPrev}>
            <ChevronLeft width={16} />
          </button>
          <button onClick={onNext}>
            <ChevronRight width={16} />
          </button>
        </Header>
      }
    >
      <Weekdays>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <Weekday key={day}>{day}</Weekday>
        ))}
      </Weekdays>
      <Days>{renderDays()}</Days>

      <Divider />

      <GraphicSection>
        <img src={freelancer} width={150} alt="Freelancer" />
        <span>Your monthly insights</span>
      </GraphicSection>
    </Card>
  )
}

export default Calendar

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  button {
    border: none;
    background: none;
    margin: 0;
    padding: 0;
    line-height: 0;
    cursor: pointer;
  }
`

const CurrentDate = styled.span`
  margin-right: auto;
`

const Weekdays = styled.div`
  display: flex;
  padding-bottom: 10px;
`

const Weekday = styled.div`
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: ${(p) => p.theme.colors.textSecondary};
`

const Days = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Day = styled.div<{
  hasDot?: boolean
  isOtherMonth?: boolean
  isCurrentDay?: boolean
  isPast?: boolean
}>`
  width: 14.28%;
  height: 60px;
  padding: 10px 0;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 5px;

  background-color: ${(p) =>
    p.isCurrentDay
      ? `${p.theme.colors.primary}1E`
      : p.isPast
      ? '#F8FAFB'
      : '#FFFFFF'};
  color: ${(p) =>
    p.isCurrentDay
      ? p.theme.colors.primary
      : p.isOtherMonth
      ? p.theme.colors.textSecondary
      : 'inherit'};
  font-size: 14px;
  border-radius: 4px;
  border: 2px solid ${(p) => p.theme.contentBackground};
  position: relative;

  &::after {
    ${(p) => (p.hasDot ? 'content: "";' : '')}
    width: 5px;
    height: 5px;
    background-color: ${(p) => p.theme.colors.primary};
    border-radius: 50%;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Divider = styled.div`
  border-bottom: 1px solid #e9eef2;
  margin: 20px 0;
`

const GraphicSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: 14px;
`