import React from 'react'
import SecFirst from './components/SecFirst'
import SecSec from './components/SecSec'
import SecThird from './components/SecThird'
import SecFour from './components/SecFour'
import SecFive from './components/SecFive'
import Footer from '../components/Footer'

const HomePage = ({ onButtonClick }) => {
  
  return (
    <div>
        <SecFirst onButtonClick={onButtonClick} ></SecFirst>
        <SecSec></SecSec>
        <SecThird></SecThird>
        <SecFour></SecFour>
        <SecFive></SecFive>
    </div>
  )
}

export default HomePage
