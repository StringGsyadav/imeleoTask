import React from 'react'
import style from '../Css/solutions.module.css';
import image from '../assets/Images/Image.svg';
import image1 from '../assets/Images/Image1.svg';
import image2 from '../assets/Images/Image2.svg';
import image3 from '../assets/Images/Image3.svg';
import image4 from '../assets/Images/Image4.svg';
import image5 from '../assets/Images/Image5.svg';
const Solutions = () => {
    let cardContent=[
        {
            id:1,
            src:image,
            content:"Content Management",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu"
        },

        {
            id:2,
            src:image1,
            content:"Employee Management",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu"
        },

        {
            id:3,
            src:image2,
            content:"Vehicle Management",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu"
        },

        {
            id:4,
            src:image3,
            content:"Lead Management",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu"
        },

        {
            id:5,
            src:image4,
            content:"Inventory Management",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu"
        },

        {
            id:6,
            src:image5,
            content:"Hospital Management",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu"
        },
    ]
  return (
    <div className={style.solutionContainer}>
        <h1 className="commonHeading">Solutions</h1>
        <p className='commonPara'>
        Innovative software solutions tailored to streamline your <br />business operations and maximize efficiency.
        </p>
        <div className={`${style.solutionContainerInner} px-100`}>
            <div className={style.solutionContent}>
                {cardContent.map((values)=>{
                    return(
                        <section key={values.id} className={style.cardContainer}>
                            <figure>
                            <img className={style.cardImg} src={values.src} alt="Image not found" />
                            <figcaption className='commonCardHeading'>{values.content}</figcaption>
                            </figure>
                            {/* <h2>{values.content}</h2> */}
                            <p className='commonCardPara'>{values.text}</p>
                        </section>
                    )
                })}
            </div>
        </div>
        <div className="btn">
                    <button>View More <i className="fa-solid fa-chevron-right"></i></button>
                </div>
    </div>
  )
}

export default Solutions