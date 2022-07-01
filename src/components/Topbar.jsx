import React from 'react'
import './Topbar.css'
import VerbalComm from '../images/VerbalComm.avif'
import { SiEightsleep } from "react-icons/si";
import { BsChevronRight, BsFillFileEarmarkTextFill, BsVinyl } from "react-icons/bs";

const Topbar = () => {
    return (
        <div className='Topbar'>
            <div className='Topbar__parts'>
                <div className='Topbar__one'>
                    <img src={VerbalComm} alt="Verbal Communication"></img>
                    <div className='Topbar__one__contents'>
                        <span>Current Course</span>
                        <span>Verbal Communication</span>
                        <span>Continue<BsChevronRight /></span>
                    </div>
                </div>
                <div className='Topbar__toggler'>
                    <span>40%</span>
                    <div><span></span></div>
                    <span>4/10</span>
                </div>
            </div>


            <div className='Topbar__two Topbar__parts'>
                 <div>
                 <div className='eight'><div className='eightIn'><div><SiEightsleep/></div></div></div>
                 <div className='cr'>Current Rank</div>
                 </div>
                <div className='Topbar__two__contents'>
                    <span>Weekly Leaderboard</span>
                    <span>Growth Points: 90/120</span>
                    <span>View Rank List<BsChevronRight /></span>
                </div>
            </div>

            <div className='Topbar__three Topbar__parts'>
                <div className='PendingA'>Pending Assignments</div>
                <div className='Topbar__three__contents'>
                    <div>
                        <div className='instaIcon'><BsVinyl /></div>
                        <div className='AssignmentsInfo'>
                            <span>Assignment 4</span>
                            <span>Verbal Communication&nbsp;&nbsp;.&nbsp;&nbsp;6mins</span>
                        </div>
                        <BsChevronRight />
                    </div>
                    <div>
                        <div className='instaIcon'><BsFillFileEarmarkTextFill /></div>
                        <div className='AssignmentsInfo'>
                            <span>Assignment 2</span>
                            <span>GoogleDocs&nbsp;&nbsp;.&nbsp;&nbsp;8mins</span>
                        </div>
                        <BsChevronRight />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Topbar