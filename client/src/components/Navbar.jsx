import React from 'react'
import { Link} from 'react-router-dom'
import nc from '../astylus/Nav.module.css'

function Navbar() {
  return (
    <div className={nc.navbar}>
      <Link className='' to='/'>Krypto Bot</Link>
      <Link className='' to='/chat'>Try Now!</Link>
    </div>
  )
}

export default Navbar
