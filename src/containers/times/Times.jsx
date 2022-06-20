import React from 'react'
import Feature from '../../components/feature/Feature'
import './times.css'

const WhatGPT3 = () => (
  <div className='timesofcollege section__margin' id='timesofcollege'>
    <div className='feature'>
      <Feature
        title='What is Times of College?'
        text='We are the leading educational institutes that provides guidance and career path to students from top tech educators/instructors. This platform is built for students to interact with the entire institute, sharing all the information related to their interest.'
      />
    </div>
    <div className='heading'>
      <h1 className='gradient__text'>
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Institute</p>
    </div>
    <div className='container'>
      <Feature
        title='Students Portfolios'
        text='Reach out to your classmates with similar interest, break the barrier and explore the endless possibility.'
      />
      <Feature
        title='Placements'
        text='Discover & connect with Alumni who have walked the same path as you.'
      />
      <Feature
        title='Career Transformation'
        text='Learn from industry leaders. Collaborate with a global community.'
      />
    </div>
  </div>
)

export default WhatGPT3
