import React, {useEffect} from 'react'

//Imported Image Assets

import gridImage  from '../../assets/gridImage.png'
//Import AOS

import Aos from 'aos';
import 'aos/dist/aos.css';

const Support = () => {

  useEffect(() => {
    Aos.init({duration:3000}) 
  },[])

  return (
    <div className='support container section'>
      <div className="sectionContainer">
        <div className="tittlesDiv">
          <small>Travel Support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find your help with booking and travel plane,
             see what to expect along the journey</p>
        </div>
        <div className="infoDiv grid">
          <div className="textDiv grid">
            
            <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
              <span className='number'>01</span> 
              <h4>Travel requirements for International Travel</h4>
              <p>
              <ul> <li>Passport: A valid passport that will not expire within the next 6 months</li>
               <li>Visa: Check visa requirements for your destination country and obtain if necessary</li> 
               <li>Travel Insurance: Comprehensive travel insurance covering medical emergencies, trip cancellations, lost baggage, etc.</li> 
               <li>Return or Onward Ticket: Proof of a return or onward ticket, if required by the destination country</li> </ul>
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
              <span className='number colorOne'>02</span> 
              <h4>Chauffeur services at your arrival</h4>
              <p>
                Experience a seamless arrival with our premium chauffeur services. A professional driver will greet you at the airport, assist with your luggage, 
                and whisk you away in a luxurious vehicle to your destination.
              </p>
              <p>
                Avoid the hassle of navigating an unfamiliar city or waiting for taxis.
                Our chauffeur services ensure a comfortable and stress-free start to your journey, 
                allowing you to relax and enjoy the ride
              </p>
            </div>

         </div>

          <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
            <img src={gridImage} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support