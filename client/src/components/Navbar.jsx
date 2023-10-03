import React from 'react'
import nc from '../astylus/Nav.module.css'
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import icon from '../img/icon.png'

function Navbar() {
  const [drop, setDrop] = useState(true);
  return (
    <div className={`py-4 ${nc.navbar} px-36 max-md:px-16 ${drop ? "" : "flex flex-col flex-1"}`}>
      <div className='max-sm:mx-auto flex flex-1 justify-between items-center relative'>
        <div>
          <img src={icon} alt="icon" className='h-[40px] w-[40px] mr-2 inline'></img>
          <HashLink className='tracking-wider' smooth to="#top">Crypton</HashLink>
        </div>
        
      </div>
      <div className='absolute sm:hidden right-5 top-3'>
          <button onClick={() => setDrop(!drop)}><i className={`fa-solid  ${drop ? "" : "rotate-180 ml-20"} transition ease-out delay-100 fa-circle-arrow-down fa-xl sm:hidden`} style={{ color: "#f7e22b" }}></i></button>
        </div>

      <div className={`${drop ? "max-sm:hidden " : "flex flex-col gap-4 mt-2"}`}>
        <HashLink smooth to="#vid" className='sm:mr-6 border-2 border-solid border-yellow-400 rounded-lg p-[6px] hover:bg-yellow-500/20'>Demo Video</HashLink>
        <HashLink smooth to="#feat" className='sm:mr-3 hover:text-yellow-500'>Features</HashLink>
        <HashLink smooth to="#dev" className='sm:ml-5 hover:text-yellow-500'>About Us</HashLink>
      </div>

    </div>
  )
}

export default Navbar
