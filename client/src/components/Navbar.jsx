import React from 'react'
import { Link} from 'react-router-dom'
import nc from '../astylus/Nav.module.css'

function Navbar() {
  return (
    <div className={nc.navbar}>
      <i class="fa-solid fa-robot fa-xl"></i>
      <Link to='/'>Krypto Bot</Link>
      <Link to='/chat'>Try Now!</Link>
    </div>
  )
}

export default Navbar
