import React from 'react'
import style from '../Css/choose.module.css'
import webDev from '../assets/Images/web-dev.svg'
import appDev from '../assets/Images/app-dev.svg'
import itCon from '../assets/Images/it-cun.svg'
import softDev from '../assets/Images/software-dev.svg'
import cloudService from '../assets/Images/cloud-services.svg'
import dataEng from '../assets/Images/data-eng.svg'

const WhyChoose = () => {
    let cardContent=[
        {
            id:1,
            src:webDev,
            title:"Web App Development",
            description:"Building cutting-edge, high-performing web apps tailored to your business needs. Our solutions ensure seamless user experiences,"
        },

        {
            id:2,
            src:appDev,
            title:"App Development",
            description:"Crafting exceptional mobile experiences that revolutionize user engagement on the go. Our solutions deliver intuitive, high-performanc.e "
        },

        {
            id:3,
            src:itCon,
            title:"IT Consulting",
            description:"Strategic IT consulting services to guide businesses through the dynamic technology landscape. We provide expert insights and solutions to optimize."
        },

        {
            id:4,
            src:softDev,
            title:"Software Development",
            description:"Enterprise-grade, bespoke solutions that perfectly align with your business needs and goals."
        },

        {
            id:5,
            src:cloudService,
            title:"Cloud Services",
            description:"Empower businesses to harness the full potential of cloud computing with solutions that ensure flexibility, scalability, "
        },

        {
            id:6,
            src:dataEng,
            title:"Data Engineering",
            description:"Robust data pipelines, ensuring the seamless collection, storage, and management of your data, no matter the scale."
        },
    ]
  return (
    <div className={style.servicesContainer}>
        <h1 className='commonHeading'>Why Choose Us</h1>
        <p className='commonPara'>rusted expertise, cutting-edge technology, and a customer-<br />first approach to drive your success.</p>
            <div className={`${style.CardContainer} px-100`}>
                {cardContent.map((card)=>{
                    return(
                        <section key={card.id} className={style.serviceCard}>
                            <img src={card.src} alt="Image not found" />
                            <h3 className={style.serviceTitle}>{card.title}</h3>
                            <p className={style.serviceDescripion}>{card.description}</p>
                        </section>
                    )
                })}
            </div>
    </div>
  )
}

export default WhyChoose