import React from 'react'
import { Blog, Footer, Header, Hero, Packages, Admin } from './components';


const Home = () => {
  return (
    <div className="p-0 m-0">
    <Header/>
    <Hero/>
    <Packages/>
    <Blog/>
    <Footer/>
  </div>
  )
}

export default Home