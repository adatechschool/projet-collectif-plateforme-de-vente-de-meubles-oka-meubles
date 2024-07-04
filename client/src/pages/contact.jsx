import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function Contact() {
  return (
    <>
    <Navbar/>
    <div className='ml-20 min-h-screen'>
    <h2 className='mt-20 text-xl font-semibold'>NOUS CONTACTER</h2><br/>

    <p>Par téléphone : +33614586456<br/>
    Par email : oka.meuble@gmail.com<br/>
    Par courrier : 2 avenue Victor Hugo</p><br/><br/>
      
    </div>
    <Footer/>
    </>
  )
  
}

export default Contact
