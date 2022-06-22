import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navbar-links_container'>
          <p>
            <a href='#home'>Home</a>
          </p>
          <p>
            <a href='#timesofcollege'>About Us</a>
          </p>
          <p>
            <a href='#placements'>Placements</a>
          </p>
          <p>
            <a href='#features'>Learnings</a>
          </p>
          <p>
            <a href='#blog'>Blogs</a>
          </p>
          <p>
            <a href='#possibility'>Mission</a>
          </p>
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <p>
                <a href='#home'>Home</a>
              </p>
              <p>
                <a href='#timesofcollege'>About Us</a>
              </p>
              <p>
                <a href='#placements'>Placements</a>
              </p>
              <p>
                <a href='#features'>Learnings</a>
              </p>
              <p>
                <a href='#blog'>Blogs</a>
              </p>
              <p>
                <a href='#possibility'>Mission</a>
              </p>
            </div>
            <div className='navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
