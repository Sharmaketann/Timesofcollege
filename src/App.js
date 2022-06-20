import React from 'react'

import { Footer, Blog, WhatWeDo, Features, Times, Header } from './containers'
import { CTA, Placement, Navbar } from './components'

import './App.css'

const App = () => (
  <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
    <Placement />
    <WhatWeDo />
    <Features />
    <Times />
    <Blog />
    <CTA />
    <Footer />
  </div>
)

export default App
