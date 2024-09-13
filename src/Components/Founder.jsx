import React from 'react'
import style from '../Css/founder.module.css'
import founder from '../assets/Images/AboutImeleo/founder.svg'
import founderLinkedIn from '../assets/Images/AboutImeleo/linkedInFounder.svg'
import founderStar from '../assets/Images/AboutImeleo/starfounder.svg'
const Founder = () => {
  return (
    <div className={style.founderContainer}>
        <div className={style.leftSection}>
            <p className={style.founderHeading}> <img src={founderStar} /> Meet our <span>Founder</span></p>
            <p className={style.founderPara}>
            With decades of industry experience, <b>Mayank</b> is a highly skilled software developer, solution architect and technology entrepreneur. He specializes in building modular and scalable cross platform software solutions.
            </p>
            <p className={style.founderPara}>
            Over the past, he has worked with numerous business, helping them overcome complex business challenges by building innovative technology solutions.
            </p>
            <p className={style.founderPara}>
            Admired by clients, developers and designers alike, his entrepreneurial vision drives <b>Imeleo</b>, empowering businesses with cutting-edge technology solutions, thus fueling growth and innovation.
            </p>
        </div>
        <div className={style.rightSection}>
            <figure>
                <img src={founder}/>
            </figure>
            <p className={style.founderName}>Mayank Mahajan <img src={founderLinkedIn} /></p>
            <span className={style.founderPosition}>Founder Imeleo</span>
        </div>
    </div>
  )
}

export default Founder