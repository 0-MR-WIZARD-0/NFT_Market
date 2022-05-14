import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/Logo.svg'
import ModalCreateAccount from '../modalCreateAccount/ModalCreateAccount'
import ModalConnect from '../modalConnect/ModalConnect'
import './Navbar.scss'

const Navbar = () => {

  const [activeModalCreateAccount,setActiveModalCreateAccount] = useState(false)
  const [activeModalConnect, setActiveModalConnect] = useState(false)

  return (
    <nav className='wraperNavbar'>
        <div className='LogoAndSearch'>
          <img src={Logo} alt="#"/>
          <Link to="/"><h3>NFT ART</h3></Link>
          <input placeholder='Search to item here'/>
        </div>
        <ul className='wraperNavbar__ul'>
            <Link to="/Explore"><li className='li'>Explore</li></Link>
            <Link to="/MyItems"><li className='li'>My items</li></Link>
            <Link to="/Following"><li className='li'>Following</li></Link>
        </ul>
        <div className='wraperNavbar__buttons'>
          <button className='button_fill_pink' onClick={()=>setActiveModalCreateAccount(true)}>Create</button>
          <ModalCreateAccount CloseModalCreateAccount={()=>setActiveModalCreateAccount(false)} activeModalCreateAccount={activeModalCreateAccount}/>
          <button className='button_fill_black' onClick={()=>setActiveModalConnect(true)}>Connect</button>
          <ModalConnect CloseModalConnect={()=>setActiveModalConnect(false)} activeModalConnect={activeModalConnect}/>
        </div>
    </nav>
  )
}

export default Navbar