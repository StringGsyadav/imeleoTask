import React from 'react'
import style from '../Css/header.module.css';
const Header = () => {
  return (
    <div className={style.HeaderContainer}>
        <div className={style.logo}>Imeleo</div>
        <nav className={style.links}>
            <ul>
                <li>Solutions</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Career</li>
                <li>Why Us</li>
                <li>Blogs</li>
            </ul>
        </nav>

        <div className={style.serachBar}>
        <i className="fa-solid fa-magnifying-glass"></i>
           <input type="text" placeholder='Search'/>
        </div>
    </div>
  )
}

export default Header