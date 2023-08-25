import React from 'react'
import { Link } from 'react-router-dom'
import fpc from '../astylus/fp.module.css'
import Fcard from './Fcard'
import i1 from '../img/b1.png'
import i4 from '../img/b4.png'
import i3 from '../img/b3.png'

function Fp({ open }) {
  return (
    <>
      <div className={`${fpc.bdy}`}>
        <div className={fpc.heading}>
          <h1 className={fpc.h}>New to the <span className='text-yellow-400'>Crypto</span> World?</h1>
          <h2 style={{ fontFamily: "var(--font2)", fontSize: "1.2rem" }}>Your Trustworthy Partner in Crypto Investment!</h2>
          {!open && (<div className='flex justify-center items-center'>
            <Link to='/chat' className={fpc.btn} >
              <Link to='/chat' className='text-yellow-400 text-lg'>Chat now<i className={`fa-solid fa-arrow-right fa-lg ${open ? "" : "fa-fade"} pl-3 text-yellow-400 z-0`}></i></Link>
            </Link>
          </div>)}
        </div>
        <div className='flex justify-around items-center flex-1 mt-10 max-lg:flex-col'>
          <Fcard img={i1} head={"Lorem Ipsum"} detail={"Velit anim anim voluptate incididunt sint sint est. Laborum qui sint ullamco non labore. Et nulla eu aute aliqua ea deserunt irure voluptate adipisicing. Amet qui labore velit culpa."}/>
          <Fcard img={i4} head={"Lorem Ipsum"} detail={"Velit anim anim voluptate incididunt sint sint est. Laborum qui sint ullamco non labore. Et nulla eu aute aliqua ea deserunt irure voluptate adipisicing. Amet qui labore velit culpa."}/>
          <Fcard img={i3} head={"Lorem Ipsum"} detail={"Velit anim anim voluptate incididunt sint sint est. Laborum qui sint ullamco non labore. Et nulla eu aute aliqua ea deserunt irure voluptate adipisicing. Amet qui labore velit culpa."}/>
        </div>

      </div>

    </>
  )
}

export default Fp
