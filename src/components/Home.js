import React, { useState } from 'react'
import Navbar from './Navbar'
import mainImg from "./images/main-img.png"
import logoBlack from "./images/Logo-black.svg.png"
import paymentImg from "./images/payment.png.png"
import Waiting from './Waiting'

function Home() {
  const [show , setShow] = useState(false)

  const timer = setTimeout(() => {
    setShow(true)
    console.log(timer)
  }, 2000);
  
  return (
    <>
    <Navbar/>
    {show===true ? <Waiting /> : <div className='home-first'>
                <img className='home-first-img' src={mainImg} alt="main" />
                <p>Good things come to those who wait...</p>
        </div>}

        <div className='bg-color'>
            <div className='home-center'>
            <div className='home-second'>
        <h1 className='second-h1-first'>6000+ Users trust StarClinch.</h1>
        <p className='second-p'>Booking Terms & Conditions</p>
        <h1 className='second-h1-second'>BOOKING TERMS & CONDITIONS FOR CLIENT</h1>
        <h3 className='second-h3'>Advance Fee and Payment Terms</h3>
        </div>
        <div className='home-second-left'>
        <p className='second-para'>All acts are subject to availability</p>
        <p className='second-para'>GST @18% will be applicable</p>
        <p className='second-para'>We take an advance of 50% to confirm a show</p>
        <p className='second-para'>Quotation is valid for 14 days and subject to change</p>
        <p className='second-para'>The balance amount needs to be paid 7 days before the show</p>
        <p className='second-para'>TBL (Travel, Boarding & Lodging) will be arranged by the organizer</p>
        <p className='second-para'>Tech-Rider (sound, stage & lighting) will be arranged by the organizer</p>
        <p className='second-para'>EMI is applicable for payments made by Credit Cards only</p>
        </div>
        </div>
        </div>
     
        <div className="home-third home-center">
            <div>
            <img className='logo-black' src={logoBlack} alt="logo-black" />
              </div>
              <div className='social-icons'>
            <a className='icons'  href="/"><i className="fa-brands fa-facebook"></i></a>
            <a className='icons' href="/"><i className="fa-brands fa-instagram"></i></a>
            <a className='icons' href="/"><i className="fa-brands fa-twitter"></i></a>
            <a className='icons' href="/"><i className="fa-brands fa-youtube"></i></a>
            </div>
        </div>

          <div className='home-forth-container'>
            <div>
              <h3 className='forth-h3'>FOR BUYERS</h3>
              <ul className='forth-ul-home'>
                <li><a href="/">Our Buyers</a></li>
                <li><a href="/">Browse</a></li>
                <li>  <a href="/">Post Your Requirement</a></li>
                <li><a href="/">Entertainment on EMI</a></li>
              </ul>
              <h3 className='forth-h3'>ABOUT US</h3>
            <ul className='forth-ul-home'>
              <li> <a href="/">Our Story</a></li>
              <li><a href="/">Careers</a></li>
            </ul>
            </div>

            <div>
              <h3 className='forth-h3'>FOR ARTISTS</h3>
              <ul className='forth-ul-home'>
                <li><a href="/">Login</a></li>
                <li><a href="/">Artist SignUp</a></li>
                <li><a href="/">Artist Subscriptions</a></li>
              </ul>
              <h3 className='forth-h3'>POLICY</h3>
              <ul className='forth-ul-home'>
                <li>  <a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms of Use</a></li>
                <li><a href="/">Disclaimer</a></li>
                <li><a href="/">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h3 className='forth-h3'>REGISTERED OFFICE ADDRESS:</h3>
              <p style={{marginTop:"1rem" , marginBottom:"1rem" , fontSize:"0.9rem"}}>VINSM Globe Private Limited <br />
                Percept House, Ground Floor <br />
                East of Kailash, New Delhi <br />
                CIN: U52605DL2012PTC236944 <br />
                Phone: +91 11 498 498 01
                </p>
                <ul  className='forth-ul-home'>
                  <li> <a href="/"> Contact Us</a></li>
                </ul>
            </div>
          </div>
          <div className='home-fifth'>
              <img src={paymentImg} alt="" />
              <p>© Copyright 2015-2023 | VINSM Globe Pvt. Ltd. | All Rights Reserved.</p>
            </div>

    </>
  )
}

export default Home