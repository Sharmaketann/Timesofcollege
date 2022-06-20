import React, { useEffect, useState, useRef } from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/hero.png'
import './header.css'
import axios from 'axios'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Header = () => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  const quoteAPI = async () => {
    let arrayOfQuotes = []
    try {
      const data = await axios.get(
        'https://api.quotable.io/random?minLength=100&maxLength=140'
      )
      arrayOfQuotes = data
      console.log(data)
      arrayOfQuotes = data.data
    } catch (error) {
      console.log(error)
    }

    try {
      setQuote(arrayOfQuotes.content)
      setAuthor(arrayOfQuotes.author)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    quoteAPI()
  }, [])
  gsap.registerPlugin(ScrollTrigger)
  let heading = useRef(null)
  let rightImage = useRef(null)

  useEffect(() => {
    gsap.to(heading, {
      scrollTrigger: {
        trigger: heading,
        toggleActions: 'restart none none none',
      },
      opacity: 1,
      y: -30,
      duration: 2,
    })

    gsap.to(rightImage, {
      scrollTrigger: {
        trigger: rightImage,
        toggleActions: 'restart none none none',
      },
      opacity: 1,
      y: -50,
      duration: 2,
    })
  }, [])
  return (
    <div className='header section__padding' id='home'>
      <div className='header-content' ref={(el) => (heading = el)}>
        <h1 className='gradient__text'>{quote}</h1>

        <p className='quote'></p>
        <p className='author'>~{author}</p>

        <div className='header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className='header-content__people'>
          <img src={people} alt='people' />
          <p>Thousands of seats open for all courses every year.</p>
        </div>
      </div>

      <div className='header-image'>
        <img src={ai} alt='ai' ref={(el) => (rightImage = el)} />
      </div>
    </div>
  )
}

export default Header
