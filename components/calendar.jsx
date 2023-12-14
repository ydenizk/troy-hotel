"use client"

import React from 'react'
import { DateRange,Range,RangeKeyDict } from 'react-date-range'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Calendar = ({   value,
    onChange,
    disabledDates}) => {
  return (
 <DateRange 
 
 rangeColors={['rgb(137,96,71)']}
 ranges={[value]}
 date={new Date()}
 onChange={onChange}
 direction="vertical"
 showDateDisplay={false}
 minDate={new Date()}
 disabledDates={disabledDates}
 
 
 />
  )
}

export default Calendar