import React from 'react'
import style from '../Css/about.module.css';
import aboutImage from '../assets/Images/AboutImeleo/aboutImage.svg'
import checkIcon from '../assets/Images/AboutImeleo/check.svg'
const AboutImeleo = () => {
  return (
    <div className={style.aboutContainer}>
         <h1 className='commonHeading'>About Imeleo</h1>
         <p className='commonPara'>Imeleo provides cutting-edge solutions and expert insights to <br /> drive your business success in the digital age.</p>
         <div className={style.aboutContentContainer}>
                <figure>
                    <img src={aboutImage} alt="Image not found" />
                </figure>
                <div className={style.aboutContentRight}>
                    <h1>
                    We Are Increasing <span>Business</span> Success With <span>Technology</span>
                    </h1>
                    <p>At Imeleo, we use technology to help businesses grow, work smarter, and get better results. Our goal is to make it easier for companies to succeed in today's digital world.</p>
                    <div>
                        <ul>
                            <li>
                                <img src={checkIcon} />
                                Problem Solving</li>
                            <li>
                                <img src={checkIcon} />
                                Strategic Growth</li>
                            <li>
                                <img src={checkIcon} />
                                Enhanced Performance</li>
                        </ul>
                    </div>
                        <button style={{
                            marginTop:'30px'
                            }
                        } class="btn-element btn-primary">View More <i className="fa-solid fa-chevron-right"></i></button>
                </div>
         </div>
    </div>
  )
}

export default AboutImeleo