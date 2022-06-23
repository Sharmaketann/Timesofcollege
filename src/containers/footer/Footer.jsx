import React from 'react'
import times from '../../assets/times.png'
import './footer.css'

const Footer = () => (
  <div className='footer section__padding'>
    <div className='footer-heading'>
      <h1 className='gradient__text'>
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className='footer-btn'>
      <a href='#home'>Get Quote for your complete course.</a>
    </div>

    <div className='footer-links'>
      <div className='footer-links_logo'>
        <img src={times} alt='gpt3_logo' />
        <p>
          TimesOfCollege, Maharashtra, India <br /> All Rights Reserved
        </p>
      </div>
      <div className='footer-links_div'>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className='footer-links_div'>
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className='footer-links_div'>
        <h4>Get in touch</h4>
        <p>Antillia, Bandra East</p>
        <p>020-9211420786</p>
        <p>info@timesofcollege.com</p>
      </div>
    </div>

    <div className='footer-copyright'>
      <p>@2022 TimesOfCollege. All rights reserved.</p>
    </div>
  </div>
)

export default Footer
