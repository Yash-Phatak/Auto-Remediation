import React from 'react'
import { Link } from 'react-router-dom'
import nc from '../astylus/Nav.module.css'
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <div className={`py-4 ${nc.navbar} px-36 max-md:px-16`}>
      <div className='max-sm:mx-auto'>
        <i className="fa-solid fa-robot fa-xl mr-3"></i>
        <HashLink smooth to="#top">Krypto Bot</HashLink>
      </div>
      <div className='ml-auto max-sm:mx-auto'>
        <HashLink smooth to="#feat" className='mr-2'>Features</HashLink>
        <HashLink smooth to="#dev" className='m-2'>About Us</HashLink>
      </div>
    </div>
  )
}

export default Navbar
