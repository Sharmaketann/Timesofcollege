import React from 'react'
import { google, slack, atlassian, dropbox, shopify } from './imports'
import './placement.css'
const Placement = () => {
  return (
    <div className='section__padding' id='placements'>
      <h1 className='placement__heading gradient__text'>
        Students Working At Tech Companies | StartUps | Unicorns
      </h1>
      <div className='placement'>
        <div>
          <img src={google} alt='google' />
        </div>
        <div>
          <img src={slack} alt='slack' />
        </div>
        <div>
          <img src={atlassian} alt='atlassian' />
        </div>
        <div>
          <img src={dropbox} alt='dropbox' />
        </div>
        <div>
          <img src={shopify} alt='shopify' />
        </div>
      </div>
    </div>
  )
}

export default Placement
