import React, {useEffect} from 'react'

//Imported icons ======>

import { RxCalendar } from 'react-icons/rx'
import { BsBookmarkCheck , BsShieldCheck } from 'react-icons/bs'
//Import AOS

import Aos from 'aos';
import 'aos/dist/aos.css';

const Info = () => {
  useEffect(() => {
    Aos.init({duration:3000}) 
  },[])
  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2 data-aos='fade-right' data-aos-duration='2500' className="sectionContainer gird">Travel to make memories all around the world</h2>
          <button data-aos='fade-left' data-aos-duration='2500' className='btn'>
            View All
          </button>
        </div>

        <div className="cardsDiv grid">

          <div data-aos='fade-up' data-aos-duration='2500' className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className='icon'/>
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>You can also call airlines from your phone
               and book a flight ticket</p>

          </div>

          <div data-aos='fade-up' data-aos-duration='3500' className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsShieldCheck className='icon'/>
            </div>
            <span className="cardTitle">Smart Checklist</span>
            <p>VISA Passport eturn Tickets</p>

          </div>

          <div data-aos='fade-up' data-aos-duration='4500' className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsBookmarkCheck className='icon' />
            </div>
            <span className="cardTitle">Save More</span>
            <p>You can also call airlines from your phone
               and book a flight ticket</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Info