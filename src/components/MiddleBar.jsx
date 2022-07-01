import React from 'react'
import DailyGoal from './DailyGoal'
import HoursSpent from './HoursSpent'
import './MiddleBar.css'

const MiddleBar = () => {
  return (
    <div className='MiddleBar'>
        <div><DailyGoal/></div>
        <div className='laal'><HoursSpent/></div>
    </div>
  )
}

export default MiddleBar