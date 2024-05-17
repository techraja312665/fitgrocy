import React from 'react'
import Homecategories from "../Category/Homecategories.css"
import img1 from '../../ASSEST/image/1.png'
import img2 from '../../ASSEST/image/png.2.png'
import img3 from '../../ASSEST/image/png.3.png'
import img4 from '../../ASSEST/image/png.4.png'

const HomeCategoryies = () => {
  return (
    <div className='Homecategories'>

        <div className='cantainer'>
          <img src={img1} alt='img1'></img>
          <div className='content'>
            <h1>Vagitables for a doorstep</h1>
            <p>Shop for vagitables</p>
          </div>
        </div>
        <div className='cantainer'>
          <img src={img2} alt='img2'></img>
          <div className='content'>
            <h1>Vagitables for a doorstep</h1>
            <p>Shop for vagitables</p>
          </div>
        </div>
        <div className='cantainer'>
          <img src={img3} alt='img3'></img>
          <div className='content'>
            <h1>Vagitables for a doorstep</h1>
            <p>Shop for vagitables</p>
          </div>
        </div>
        <div className='cantainer'>
          <img src={img4} alt='img4'></img>
          <div className='content'>
            <h1>Vagitables for a doorstep</h1>
            <p>Shop for vagitables</p>
          </div>
        </div>
      
    </div>
  )
}

export default HomeCategoryies

