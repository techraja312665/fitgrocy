import React from 'react'
import './Login.Css'
import logo from '../../src/ASSEST/logo.png'
import login from '../ASSEST/login.png'
import user from '../ASSEST/user.png'
const Login = () => {
  return (
   <div className='container'>
    <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
    </div>
    <div className='inputs'>

        <div className='input'>
            <img src={ logo}alt=''/>
            <input type='Name'/>
        </div>

        <div className='input'>
            <img src={login} alt=''/>
            <input type='Email Id'/>
        </div>
        <div className='input'>
            <img src={user} alt=''/>
            <input type='Password'/>
        </div>
         </div>

        </div>
      
    


  )
}

export default Login
