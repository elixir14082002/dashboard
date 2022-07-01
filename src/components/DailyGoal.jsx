import React from 'react'
import './DailyGoal.css'
import { BsFlagFill, BsArrowClockwise} from "react-icons/bs";

const DailyGoal = () => {
  return (
    <div className='DailyGoal'>
        <div>Daily Goal</div>
        <div>Set a daily goal of how much you would like to learn everyday.</div>
        <div className='DailyGoal__ranks'>
        <div>10 mins a day</div>
        <div>
        <div className='button'>Set a time<BsArrowClockwise /></div>
        <div className='button'>Set a daily goal<BsFlagFill /></div>
        </div>
        </div>
    </div>
  )
}

export default DailyGoal