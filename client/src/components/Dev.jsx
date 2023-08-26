import {React , useEffect} from 'react'
import 'aos/dist/aos.css'
import AOS from "aos"


function Dev({ nam, role, img, ld, gh, ma }) {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div data-aos="fade-out" className='flex flex-shrink relative h-[250px] w-[480px] bg-white/10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl max-sm:w-[300px] max-sm:flex-col max-sm:h-[400px]'>

      <div className='flex flex-col justify-center items-center m-4'>
        <img src={img} alt="dev" className='rounded-full w-[200px] h-[200px]' />
      </div>
      <div className='flex flex-col justify-around px-4 max-sm:items-center'>
        <div className='text-left max-sm:text-center pt-8 max-sm:pt-4'>
          <h1 className='text-3xl text-yellow-400' style={{ "fontFamily": "var(--font1" }}>{nam}</h1>
          <h1 style={{ "fontFamily": "var(--font2" }} >{role}</h1>
        </div>
        <div className='flex gap-5 pb-10 max-sm:pt-5'>
          <a href={ld}><i className="fa-brands fa-linkedin fa-2xl" style={{ "color": "#000000" }}></i></a>
          <a href={gh}><i className="fa-brands fa-github fa-2xl" style={{ "color": "#000000" }}></i></a>
          <a href={ma}><i className="fa-solid fa-envelope fa-2xl" style={{ "color": "#000000" }}></i></a>
        </div>
      </div>
    </div>
  )
}

export default Dev
