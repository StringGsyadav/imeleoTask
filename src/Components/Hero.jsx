import React from 'react'
import styledata from '../Css/hero.module.css';
// import HeroImages from '../assets/Images/HeroImage.svg'
const Hero = () => {
  return (
    <div className={styledata.heroContainer}>
        <h1>Business Software</h1>
        <span className={styledata.firstSpan}>Solution And Services</span>
        <span className={styledata.secondSpan}>Software services and solutions to take your Business to the next level 🚀</span>
        <div className={styledata.btngrp}>
            <button>Know More</button>
            <button>Contact Us</button>
        </div>
    </div>
  )
}

export default Hero