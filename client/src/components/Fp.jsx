import React from 'react'
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


function Fp({ open }) {
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

        <div className='flex justify-around items-center flex-1 mt-24 max-lg:flex-col gap-5 lg:mx-10' id="feat">
          <Fcard img={i1} head={"Lorem Ipsum"} detail={"Velit anim anim voluptate incididunt sint sint est. Laborum qui sint ullamco non labore. Et nulla eu aute aliqua ea deserunt irure voluptate adipisicing. Amet qui labore velit culpa."} />
          <Fcard img={i4} head={"Lorem Ipsum"} detail={"Velit anim anim voluptate incididunt sint sint est. Laborum qui sint ullamco non labore. Et nulla eu aute aliqua ea deserunt irure voluptate adipisicing. Amet qui labore velit culpa."} />
          <Fcard img={i3} head={"Lorem Ipsum"} detail={"Velit anim anim voluptate incididunt sint sint est. Laborum qui sint ullamco non labore. Et nulla eu aute aliqua ea deserunt irure voluptate adipisicing. Amet qui labore velit culpa."} />
        </div>

        <div  className='text-yellow-400 text-5xl font-semibold mt-24 max-sm:text-4xl tracking-wider' style={{ "fontFamily": "var(--font1" }}>Meet the Devs!</div>
        
        <div id="dev" className='relative flex gap-8 mt-20 mb-12 justify-around items-center max-lg:flex-col pb-8'>
          <div className='bg-purple-700 rounded-full absolute w-[180px] h-[180px] bottom-[22%] left-[20%] max-lg:bottom-[62%] max-lg:left-[40%] max-sm:bottom-[60%] max-sm:left-[25%] '/>
          <div className='bg-purple-700 rounded-full absolute w-[180px] h-[180px] bottom-[22%] left-[70%] max-lg:bottom-[12%] max-lg:left-[40%] max-sm:bottom-[10%] max-sm:left-[25%]'/>
          <Dev nam={"Mitansh Patel"} role={"MERN developer"} img={mit} ld={"https://www.linkedin.com/in/mitansh-patel-32a065259/"} gh={"https://github.com/MitanshPatel"}/>
          <Dev nam={"Yash Phatak"} role={"ML Enthusiast"} img={yash} ld={"https://www.linkedin.com/in/yash-phatak-b82931227/"} gh={"https://github.com/Yash-Phatak"}/>
        </div>

      </div>

    </>
  )
}

export default Fp
