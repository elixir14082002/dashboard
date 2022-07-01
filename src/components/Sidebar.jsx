import React from 'react'
import './Sidebar.css'
import GirlProfile from '../images/GirlProfile.avif'
import { BsFillFileEarmarkFill, BsBoxArrowRight, BsFillGearFill, BsFillArchiveFill, BsFillGridFill, BsFillChatLeftDotsFill, BsBarChartLine } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <div className='Sidebar__options'>
            <div><BsFillGridFill/>Dashboard</div>
            <div><BsFillArchiveFill/>Courses</div>
            <div><BsFillFileEarmarkFill/>Assignments</div>
            <div><BsBarChartLine/>Tests</div>
            <div><BsFillChatLeftDotsFill/>Feedback</div>
        </div>
        <div className='Sidebar__name'>
            <img src={GirlProfile} alt="girl"></img>
            <div className='Sidebar__nameContents'>
                <span>Ayushi Shah</span>
                <span>Regulatory</span>
                <span><BsFillGearFill/> <BsBoxArrowRight/></span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar