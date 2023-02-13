import React from 'react'
import Footer from '../../Components/Footer'
import Categories from '../../Components/store/Categories'
import Collab from '../../Components/store/Collab'
import HeroSection from '../../Components/store/HeroSection'
import Navbar from '../../Components/store/Navbar'
import Products from '../../Components/store/Products'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Categories/>
        <Products/>
        <Collab/>
        <Footer/>
    </div>
  )
}

export default Home