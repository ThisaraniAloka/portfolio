import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import BackToTop from './Components/BackToTop/BackToTop'

const App = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    AOS.init({ duration: 1000, once: true, offset: 100, })
  }, [])

  return (
    <div>
      
        <div id='top' className="navbar-wrapper">
          <Navbar />
        </div>
      

      <div id="home" data-aos="zoom-in">
        <Hero />
      </div>
      <div id="about" data-aos="fade-up">
        <About />
      </div>
      <div id="services" data-aos="fade-up">
        <Services />
      </div>
      <div id="work" data-aos="fade-up">
        <MyWork />
      </div>
      <div id="contact" data-aos="fade-up">
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
