import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../ASSEST/logo.png'

import Dropdown from 'react-bootstrap/Dropdown';
import '../../App.css'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';


const Navbar = () => {
    const[cartquantity,setquantity]=useState(0)
  return (
    <nav>
       
       <div className='S1'>
        <img src={logo} alt='logo' className='logo'/>

        <div className='searchbar'>
            <input type='text' placeholder='search for product and category'className='search'/>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

            </button>

        </div>
        <div className='right'>
            <div className='cart'>
                <span className='qty'>{cartquantity}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            </div>
        </div>
        <Dropdown>
          
          <Dropdown.Toggle variant='' id='dropdown-basic'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
             </svg>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href='/login'>Login</Dropdown.Item>
            <Dropdown.Item href='/signup'>signup</Dropdown.Item>
            <Dropdown.Item href='#'>Profile</Dropdown.Item>
            <Dropdown.Item href='#'>Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
       
         

       </div>
      

      
      <div className='s2'>

      <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Fresh Vagatables</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Fresh fruits</Dropdown.Item>
        <Dropdown.Item href="#/action-3">House clening</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      <a>About Us</a>
      <a>Contact Us</a>

      <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        More
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">FAQ</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Privacy Policy</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Terems of conditions</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      
      
    
        </div>
    </nav>
  )
}

export default Navbar
