import React from 'react'
import './UpcomingClasses.css'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const UpcomingClasses = () => {
  return (
    <div className='UpcomingClasses'>
        <div>
        Upcoming Classses
    </div>
    <div>
        <div className="bodycomp">
            <div className="dates">
                <div className="year">JANUARY 22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsChevronLeft/><BsChevronRight/></div>
                <hr width="95%"></hr>
                <div className="dates__row">
                    <div>SUN</div>
                    <div>MON</div>
                    <div>TUE</div>
                    <div>WED</div>
                    <div>THR</div>
                    <div>FRI</div>
                    <div>SAT</div>
                </div>
                <div className="dates__row">
                    <div className="circle" style={{background: "#F2D7D9", color:"#06283D"}}>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                    <div>07</div>
                </div>
                <div className="dates__row">
                    <div>08</div>
                    <div>09</div>
                    <div>10</div>
                    <div className="circle" style={{background: "#F2D7D9", color:"#06283D"}}>11</div>
                    <div>12</div>
                    <div>13</div>
                    <div>14</div>
                </div>
                <div className="dates__row">
                    <div>15</div>
                    <div>16</div>
                    <div>17</div>
                    <div>18</div>
                    <div>19</div>
                    <div className="circle" style={{background: "#E8A0BF", color:"#06283D"}}>20</div>
                    <div>21</div>
                </div>
                <div className="dates__row">
                    <div>22</div>
                    <div>23</div>
                    <div>24</div>
                    <div>25</div>
                    <div>26</div>
                    <div>27</div>
                    <div>28</div>
                </div>
                <div className="dates__row">
                    <div>29</div>
                    <div className="circle" style={{background: "#CED89E", color:"#06283D"}}>30</div>
                    <div>31</div>
                    <div>&nbsp;&nbsp;&nbsp;</div>
                    <div>&nbsp;&nbsp;&nbsp;</div>
                    <div>&nbsp;&nbsp;&nbsp;</div>
                    <div>&nbsp;&nbsp;&nbsp;</div>
                </div>
        
            </div>
            <div className="cardstr">
                <div className="card">
        
        
                    <div>Live Presentation</div>
                    <div>09:00-11:00</div>
        
                </div>
                <div className="card" style={{background: "#F2D7D9"}}>
                    <div>Excel Workshop</div>
                    <div>02:00-04:00</div>
                </div>
                <div className="card" style={{background: "#CED89E"}}>
                    <div>Document Review</div>
                    <div>09:00-11:00</div>
                </div>
                <div className="card" style={{background: "#E8A0BF"}}>
                    <div>Trello Workshop</div>
                    <div>09:00-11:00</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default UpcomingClasses