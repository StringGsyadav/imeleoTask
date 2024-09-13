import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Solutions from './Components/Solutions'
import Services from './Components/Services'
import Blogs from './Components/Blogs'
import WhyChoose from './Components/WhyChoose'
import AboutImeleo from './Components/AboutImeleo'
import Founder from './Components/Founder'
import Contactus from './Components/Contactus'

const App = () => {
  return (
   <div className='container'>
    <Header/>
    <Hero/>
    <Solutions/>
    <Services/>
    <Blogs/>
    <AboutImeleo/>
    <Founder/>
    <WhyChoose />
    <Contactus/>
    </div>
  )
}

export default App