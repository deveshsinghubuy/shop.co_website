import React from 'react'
import SecFirstPrd from './components/SecFirstPrd'
import SecSecPrd from './components/SecSecPrd'
import SecThirdPrd from './components/SecThirdPrd'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const ProuctDetailPage = () => {
  return (
   <div>
        <Nav></Nav>
        <SecFirstPrd></SecFirstPrd>
        <SecSecPrd></SecSecPrd>
        <SecThirdPrd></SecThirdPrd>
        <Footer></Footer>
   </div>
  )
}

export default ProuctDetailPage
