"use client"
import React from 'react'
import HomePage from './home/page'
import Nav from './components/Nav'
import { useState } from 'react'
import Footer from './components/Footer'
import CategoryPage from './category/page'
import CartPage from './cart/page'


const Home = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
        <Nav open={open} setOpen={setOpen} ></Nav>
        <HomePage onButtonClick={() => setOpen(!open)}></HomePage>
        <Footer></Footer>
    </div>
  )
}

export default Home
