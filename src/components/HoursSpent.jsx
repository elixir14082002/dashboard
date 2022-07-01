import React from 'react'
import './HoursSpent.css'

const HoursSpent = () => {
    return (
        <div className='HoursSpent'>
        <div>
        <div className='HS'>Hours Spent</div>
        <div className='VA'>View All</div>
        <div className='time'>3hr 25min</div>
        </div>
        
        
            <div className='Topg'>
            <div className='graph'>
            <div className='graph__in'>
                <div>2</div>
                <div>15</div>
                <div>1</div>
                <div>0</div>
            </div>
                <div className="mm"><div></div></div>
                <div className="mm"><div style={{width: "50%"}}></div></div>
                <div className="mm"><div style={{width: "60%"}}></div></div>
                <div className="mm"><div></div></div>
                <div className="mm"><div style={{width: "50%"}}></div></div>
                <div className="mm"><div></div></div>
                <div className="mm"><div style={{width: "20%"}}></div></div>
            </div>
            </div>
        
            <br></br>
            <div className='graph'>
                
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>M</div>
                <div>S</div>
                <div>S</div>
            </div>
        </div>
    )
}

export default HoursSpent