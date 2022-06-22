import React from 'react'
import './student.css'

function Card(props) {
  return (
    <div className='card'>
      <img src={props.imageUrl} alt='Location' className='card--image' />
      <div className='card--stats'>
        <div className='top-head'>
          <span className='card--company'>{props.company}</span>
          <a className='card--linkedin' href={props.linkedin}>
            View Linkedin Profile
          </a>
        </div>
        <h1>{props.title}</h1>
        <span className='bold thin'>
          {props.startDate} - {props.endDate}
        </span>
        <p className='card--desc'>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
