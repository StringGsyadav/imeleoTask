import React from 'react'
import style from '../Css/contact.module.css';
import phone from '../assets/Images/ContactUs/phone.svg'
import email from '../assets/Images/ContactUs/email.svg'
import humanImg from '../assets/Images/ContactUs/humanImg.svg'
const Contactus = () => {
    return (
        <div className={style.contactUsContainer}>
            <h1 className='commonHeading'>Contact Us</h1>
            <p className='commonPara'> Reach out to discuss how we can transform your business with <br /> tailored solutions and expert support.</p>
            <div className={style.contactSection}>
                <div className={style.contactSectionLeft}>
                    <img className={style.contactLeftImg} src={humanImg}/>
                </div>
                <div className={style.contactSectionRight}>
                    <h1>
                    We help you to grow your business faster & easier.
                    </h1>
                    <p className={style.paraContact}>Partner with us to simplify the path to your success. We'll make reaching your business goals faster and easier than ever</p>
                    <p className={style.paralist}>
                        <img src={phone} /> <span>+91-8873-33-8873</span>
                    </p>
                    <p className={style.paralist}>
                        <img src={email}  /> <span>contact@imeleo.com</span>
                    </p>

                    <button className="btn-element" style={{marginTop:"20px",color:"#1E40AE"}}>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Contactus