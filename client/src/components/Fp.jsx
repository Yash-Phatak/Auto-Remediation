import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import fpc from '../astylus/fp.module.css'
import Fcard from './Fcard'
import Dev from './Dev'
import i1 from '../img/b2.png'
import i4 from '../img/b4.png'
import i3 from '../img/b3.png'
import img from '../img/boy.png'
import mit from '../img/Mit.jpg'
import yash from '../img/yash.jpg'
import 'aos/dist/aos.css'
import AOS from "aos"


function Fp({ open }) {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <>
      <div className={`${fpc.bdy} max-w-[100%]`} id="top">
        <div className={`${fpc.heading} flex flex-row max-md:flex-col`}>

          <div className='flex flex-col items-start m-5 pr-7 justify-center max-md:items-center md:text-left max-md:pr-0'>
            <h1 className={fpc.h}>New to the <span className=' text-yellow-400 '>Crypto</span> World?</h1>
            <h2 style={{ fontFamily: "var(--font2)", fontSize: "1.2rem" }}>Your Trustworthy Partner in Crypto Investment!</h2>

            {!open && (<div className='flex justify-center items-center'>
              <Link to='/chat' className={fpc.btn} >
                <Link to='/chat' className='text-yellow-400 text-lg'>Chat now<i className={`fa-solid fa-arrow-right fa-lg ${open ? "" : "fa-fade"} pl-3 text-yellow-400 z-0`}></i></Link>
              </Link>
            </div>)}
          </div>
          <img src={img} alt="main" className='max-w-[450px] max-h-[450px] p-2 m-auto max-md:max-w-[350px] max-sm:max-w-[300px] max-sm:mt-10' />
        </div>
        
        <div id="feat"></div>
        
        <div className='flex justify-around items-center flex-1 mt-24 max-lg:flex-col gap-5 lg:mx-10'>
          <Fcard img={i1} head={"Crypton"} detail={"🤖 Unravel the answers you seek! Engage with Crypton, a digital companion designed to swiftly address your queries. No more hunting for information – just ask and enlighten yourself effortlessly. "} />
          <Fcard img={i4} head={"Data Dynamo"} detail={"📊 Dive into the world of Data Dynamo! From insightful trends to comprehensive analysis, empower your decision-making with real-time data analytics. Unleash the potential of information and transform it into actionable wisdom. "} />
          <Fcard img={i3} head={"Market Pulsebeat"} detail={"💹Stay ahead with Market Pulsebeat! Instantly access real-time prices and trends for your essential assets. Seize the rhythm of the crypto market at your fingertips."} />
        </div>
        <div id="vid" className='relative bottom-[100px]'></div>
        <div className='flex justify-center items-center'>
          <iframe crossorigin="anonymous" className='w-[930px] h-[500px] max-lg:w-[770px] max-lg:h-[400px] max-md:w-[600px] max-md:h-[300px] max-sm:w-[320px] max-sm:h-[180px]' src="//www.youtube.com/embed/jJD1UnciHfA?si=0PkFEaJNFWrRmE8J" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        <div id="dev" className='text-yellow-400 text-5xl font-semibold mt-16 max-sm:text-4xl tracking-wider' style={{ "fontFamily": "var(--font1" }}>Meet the Devs!</div>

        <div className='relative flex gap-8 mt-20 mb-12 justify-around items-center max-lg:flex-col pb-8'>
          <div className='bg-purple-700 rounded-full absolute w-[180px] h-[180px] bottom-[22%] left-[20%] max-lg:bottom-[62%] max-lg:left-[40%] max-sm:bottom-[60%] max-sm:left-[25%] ' />
          <div className='bg-purple-700 rounded-full absolute w-[180px] h-[180px] bottom-[22%] left-[70%] max-lg:bottom-[12%] max-lg:left-[40%] max-sm:bottom-[10%] max-sm:left-[25%]' />
          <Dev nam={"Mitansh Patel"} role={"MERN developer"} img={mit} ld={"https://www.linkedin.com/in/mitansh-patel-32a065259/"} gh={"https://github.com/MitanshPatel"} ma={"mailto:mitanshpatel8@gmail.com"} />
          <Dev nam={"Yash Phatak"} role={"ML Enthusiast"} img={yash} ld={"https://www.linkedin.com/in/yash-phatak-b82931227/"} gh={"https://github.com/Yash-Phatak"} ma={"mailto:jayphatak21@gmail.com"} />
        </div>

      </div>

    </>
  )
}

export default Fp
