import React from 'react'
import Navbar from '../COMPONENTS/NAVBAR/Navbar'
import Banner from '../BANNERS/Banner'
import Login from '../COMPONENTS/Pages/Login'
import SignUp from '../COMPONENTS/Pages/SignUp'
import ForgetPassword from '../COMPONENTS/Pages/ForgetPassword'
import HomeCategoryies from '../COMPONENTS/Category/HomeCategoryies'

const Home = () => {
  return (
    <div>
      
      <Navbar/>
      <Banner/>
      <HomeCategoryies/>
      Home
    </div>
  )
}

export default Home
