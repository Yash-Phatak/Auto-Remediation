import React from 'react'
import { Link } from 'react-router-dom'
import fpc from '../astylus/fp.module.css'
import img from '../img/boy.png'

function Fp({ open }) {
  return (
    <>
      <div className={`${fpc.bdy}`}>
        <div className={fpc.heading}>
          <h1 className={fpc.h}>New to the <span className='text-yellow-400'>Crypto</span> World?</h1>
          <h2 style={{ fontFamily: "var(--font2)", fontSize: "1.2rem" }}>Your Trustworthy Partner in Crypto Investment!</h2>
          <div className='flex justify-center items-center'>
            <Link to='/chat' className={fpc.btn} >
              <Link to='/chat' className='text-yellow-400 text-lg'>Chat now<i className={`fa-solid fa-arrow-right fa-lg ${open? "" : "fa-fade"} pl-3 text-yellow-400 z-0`}></i></Link>
            </Link>
          </div>
        </div>
        <div className={fpc.img}><img src={img} alt='err' ></img></div>
      </div>

    </>
  )
}

export default Fp
