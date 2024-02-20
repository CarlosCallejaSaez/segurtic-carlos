import React from 'react'
import Navbar from './components/NavBar/NavBar'
import CTA from './components/CTA/CTA'
import About from './components/About/About'
import Services from './components/Services/Services'
import Experience from './components/Experience/Experience'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


export default function App() {
  return (
    <div>
      <Navbar/>
      <CTA/>
      <About/>
      <Services/>
      <Experience/>
      <Team/>
      <Contact/>

      <Footer/>
      </div>
  )
}
