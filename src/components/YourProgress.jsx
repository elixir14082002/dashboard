import React from 'react'
import './YourProgress.css'
import Pentagon from '../images/Pentagon.jpeg'

const YourProgress = () => {
  return (
    <div className='YourProgress'>
        <div>
            <div>Your Progress</div>
            <div>Digital Tools</div>
            <div>Given is your progress for the course of Digital Tools.</div>
            <div>Here you can identify where you need to put in more time.</div>
        </div>
        <div>
            <img src={Pentagon} alt="pentagon"></img>
        </div>
    </div>
  )
}

export default YourProgress