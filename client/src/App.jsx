import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Program from './components/programs/programs'
import Title from './components/title/title'
import About from './components/about/about'
import Campus from './components/campus/campus'
import Testimonials from './components/testimonials/testimonials'
import Contacts from './components/contact/contact'
import Footer from './components/footer/footer'
import Videoplayer from './components/videoplayer/videoplayer'

const App = () => {

const[playState,setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subTitle='Our PROGRAMS' titles='What we Offer'/>
      <Program/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' titles='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' titles='What student says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' titles='Get in Touch'/>
      <Contacts/>
      <Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
