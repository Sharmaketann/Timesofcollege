import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

const featuresData = [
  {
    title: 'Learn real skills from top tech instructors.',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'A structured, flexible & guided learning program.',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Tried and tested curriculum, trusted by thousands of students.',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title:
      'Curriculum is designed to make you great at what you want to Become!',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
]

const Features = () => (
  <div className='features section__padding' id='features'>
    <div className='features-heading'>
      <h1 className='gradient__text'>
        The Future is Now and You Just Need to Realize It. Learn and build your
        career from our top-educators | instructors.
      </h1>
      <p>Come help us build the education the world deserves.</p>
    </div>
    <div className='features-container'>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
)

export default Features
