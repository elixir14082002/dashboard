import React from 'react'
import './Endbar.css'
import UpcomingClasses from './UpcomingClasses'
import YourProgress from './YourProgress'

const Endbar = () => {
  return (
    <div className='Endbar'>
        <UpcomingClasses/>
        <YourProgress/>
    </div>
  )
}

export default Endbar