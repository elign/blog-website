import { useState } from 'react'
import './css/App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import travelData from './travelData'
import CardWrapper from './components/CardWrapper'
import blogData from './blogData'
import BlogWrapper from './components/BlogWrapper'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header image="logo-white.png"/>
      <Hero />
      <CardWrapper {...travelData} />
      <Header image="logo-white1.png"/>
      <BlogWrapper {...blogData} />
      <Footer />
    </div>
  )
}

export default App
