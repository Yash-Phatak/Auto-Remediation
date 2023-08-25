import React from 'react'
import { Link } from 'react-router-dom'
import fpc from '../astylus/fp.module.css'
import Fcard from './Fcard'
import i1 from '../img/b2.png'
import i4 from '../img/b4.png'
import i3 from '../img/b3.png'
import img from '../img/boy.png'

function Fp({ open }) {
  return (
    <>
      <div className={`${fpc.bdy} max-w-[100%]`} id="top">
        <div className={`${fpc.heading} flex flex-row max-md:flex-col`}>

          <div className='flex flex-col items-start m-5 pr-7 justify-center max-md:items-center md:text-left max-md:pr-0'>
            <h1 className={fpc.h}>New to the <span className='text-yellow-400'>Crypto</span> World?</h1>
            <h2 style={{ fontFamily: "var(--font2)", fontSize: "1.2rem" }}>Your Trustworthy Partner in Crypto Investment!</h2>

            {!open && (<div className='flex justify-center items-center'>
              <Link to='/chat' className={fpc.btn} >
                <Link to='/chat' className='text-yellow-400 text-lg'>Chat now<i className={`fa-solid fa-arrow-right fa-lg ${open ? "" : "fa-fade"} pl-3 text-yellow-400 z-0`}></i></Link>
              </Link>
            </div>)}
          </div>
          <img src={img} alt="main" className='max-w-[450px] max-h-[450px] m-auto max-md:max-w-[350px]' />
        </div>

        <div className='flex justify-around items-center flex-1 mt-24 max-lg:flex-col gap-5' id="feat">
          <Fcard img={i1} head={"Lorem Ipsum"} detail={"Velit anim anim voluptate incididunt sint sint est. Laborum qui sint ullamco non labore. Et nulla eu aute aliqua ea deserunt irure voluptate adipisicing. Amet qui labore velit culpa."} />
          <Fcard img={i4} head={"Lorem Ipsum"} detail={"Velit anim anim voluptate incididunt sint sint est. Laborum qui sint ullamco non labore. Et nulla eu aute aliqua ea deserunt irure voluptate adipisicing. Amet qui labore velit culpa."} />
          <Fcard img={i3} head={"Lorem Ipsum"} detail={"Velit anim anim voluptate incididunt sint sint est. Laborum qui sint ullamco non labore. Et nulla eu aute aliqua ea deserunt irure voluptate adipisicing. Amet qui labore velit culpa."} />
        </div>

      </div>

    </>
  )
}

export default Fp
