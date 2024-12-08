import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Browse from './Browse'
import Products from './Products'
import Rooms from './Rooms'
import Furniture from './Furniture'
import Footer from './Footer'


function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Browse/>
        <Products/>
        <Rooms/>
        <Furniture/>
        <Footer/>
    </div>
  )
}

export default LandingPage