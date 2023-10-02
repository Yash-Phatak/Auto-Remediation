import {React, useEffect} from 'react'
import 'aos/dist/aos.css'
import AOS from "aos"

function Fcard({ img, head, detail }) {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <>
      <div className='p-8 h-[600px]' >
        <div data-aos="fade-out" className='flex justify-center items-center mb-3'><img src={img} loading='lazy' alt="profile" className='max-w-[230px] max-h-[230px]' /></div>
        <div data-aos="fade-out" className='flex flex-col'>
          <h1 className='text-4xl p-3 text-yellow-500 font-bold max-w-[350px]' style={{ "fontFamily": "var(--font1)" }}>{head}</h1>
          <p className='text-justify max-w-[350px]' style={{ "fontFamily": "var(--font2)" }}>{detail}</p>
        </div>
      </div>
    </>
  )
}

export default Fcard
