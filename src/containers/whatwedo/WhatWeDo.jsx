import { gsap } from 'gsap'
import React from 'react'
import { useEffect, useRef } from 'react'
import possibilityImage from '../../assets/equality.svg'
import './whatwedo.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const WhatWeDo = () => {
  let leftimage = useRef(null)
  let rightText = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to(leftimage, {
      scrollTrigger: {
        trigger: leftimage,
        start: '50px 80%',
        end: 'top 100px',
        scrub: true,
        toggleActions: 'restart none restart reverse',
      },
      opacity: 1,
      y: -30,
      duration: 4,
    })

    gsap.to(rightText, {
      scrollTrigger: {
        trigger: rightText,
        start: '50px 80%',
        end: 'top 100px',
        scrub: true,
        toggleActions: 'restart none restart reverse',
      },
      opacity: 1,
      y: -50,
      duration: 4,
    })
  }, [])

  return (
    <div className='possibility section__padding' id='possibility'>
      <div className='possibility-image'>
        <img
          src={possibilityImage}
          alt='possibility'
          ref={(el) => {
            leftimage = el
          }}
        />
      </div>
      <div
        className='possibility-content'
        ref={(el) => {
          rightText = el
        }}
      >
        <h4>What we want?</h4>
        <h1 className='gradient__text'>
          We want to create a world where anyone can build something meaningful
          with technology, and everyone has the learning tools, resources, and
          opportunities to do so.
        </h1>
        <p>
          {' '}
          We teach our students all the relevant skills needed in software jobs,
          mentor them to crack recruitment processes and also provide them with
          referrals to the best opportunities in the software industry across
          the globe. Students in the Academy spend an average of 3-5 hours daily
          on the platform, learning and practising their skills. We provide our
          students access of over 400 working professionals from top software
          companies including Facebook, Amazon, Google, Directi and Microsoft
          among others who act as instructors, mentors, teaching assistants and
          career coaches.{' '}
        </p>

        <h4>Join us! To see us in Action.</h4>
      </div>
    </div>
  )
}

export default WhatWeDo
