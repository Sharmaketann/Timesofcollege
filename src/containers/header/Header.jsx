import React, { useEffect, useState, useRef } from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/hero.png'
import './header.css'
import emailjs from '@emailjs/browser'
import axios from 'axios'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import party from 'party-js'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'

const Header = () => {
  // Quotable API function

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

  // GSAP animation for different sections
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

  // Confetti function

  // const confetti = (e) => {
  //   e.preventDefault()
  //   party.confetti(document.getElementById('send'), {
  //     count: party.variation.range(50, 100),
  //   })
  // }

  // Toast for successful email sent using react-toastify
  const toaster = (e) => {
    toast.success('🦄 Email Sent!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  // Form submit and send to mail function using emailjs
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_p79t9es',
        'template_r0xrtha',
        e.target,
        'BtmRBNyTQyC4aqlWS'
      )
      .then(
        (result) => {
          console.log(result.text)
          toaster()
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='header section__padding' id='home'>
        <div className='header-content' ref={(el) => (heading = el)}>
          <h1 className='gradient__text'>{quote}</h1>

          <p className='quote'></p>
          <p className='author'>~{author}</p>

          <form
            id='form'
            onSubmit={sendEmail}
            className='header-content__input'
            ref={form}
          >
            <input
              type='email'
              name='email'
              placeholder='Your Email Address'
              required
            />
            <button id='send' type='submit'>
              Get Started
            </button>
          </form>

          <div className='header-content__people'>
            <img src={people} alt='people' />
            <p>Thousands of seats open for all courses every year.</p>
          </div>
        </div>

        <div className='header-image'>
          <img src={ai} alt='ai' ref={(el) => (rightImage = el)} />
        </div>
      </div>
    </>
  )
}

export default Header
