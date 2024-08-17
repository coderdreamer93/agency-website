// import React from 'react'
// import HeroSection from './HeroSection'
// import ServiceSection from './ServiceSection'
// import AboutUs from './AboutUs'
// import Blog from './Blogs'
// import ContactForm from './ContactForm'
// import Footer from './Footer'
// const Home = () => {
//   return (
//     <div>
//       <HeroSection/>
//       <ServiceSection />
//       <AboutUs/>
//       <Blog/>
//       <ContactForm/>
//       <Footer/>
//     </div>
//   )
// }

// export default Home

import React from 'react'
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import AboutUs from './AboutUs'
import Blog from './Blogs'
import ContactForm from './ContactForm'
import Footer from './Footer'
import '../../Style/Home.css'

const Home = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      <nav>
        <button onClick={() => scrollToSection('hero')}>Hero</button>
        <button onClick={() => scrollToSection('services')}>Services</button>
        <button onClick={() => scrollToSection('about')}>About Us</button>
        <button onClick={() => scrollToSection('blog')}>Blog</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </nav>
      <div id="hero">
        <HeroSection/>
      </div>
      <div id="services">
        <ServiceSection />
      </div>
      <div id="about">
        <AboutUs/>
      </div>
      <div id="blog">
        <Blog/>
      </div>
      <div id="contact">
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home

