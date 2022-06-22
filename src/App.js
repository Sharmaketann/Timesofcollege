import React from 'react'

import { Footer, Blog, WhatWeDo, Features, Times, Header } from './containers'
import { CTA, Placement, Navbar, Students } from './components'
import data from '../src/components/student/data'
import './App.css'

const App = () => {
  const cards = data.map((travel) => {
    return <Students key={travel.id} {...travel} />
  })
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Placement />
      <section className='cards--list'>{cards}</section>
      <WhatWeDo />
      <Features />
      <Times />
      <Blog />
      <CTA />

      <Footer />
    </div>
  )
}

export default App
