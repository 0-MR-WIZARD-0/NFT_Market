import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/Logo.svg'
import Modal from '../modal/Modal'
import './Navbar.scss'

const Navbar = () => {

  useEffect(()=>{
    console.log(show);
  })

  const [show,setShow] = useState(false)

  return (
    <nav className='wraperNavbar'>
        <div className='LogoAndSearch'>
          <img src={Logo} alt="#"/>
          <Link to="/"><h3>NFT ART</h3></Link>
          <input placeholder='Search to item here'/>
        </div>
        <ul className='wraperNavbar__ul'>
            <Link to="/MyItems"><li className='li'>Explore</li></Link>
            <Link to="/MyItems"><li className='li'>My items</li></Link>
            <Link to="/MyItems"><li className='li'>Following</li></Link>
        </ul>
        <div className='wraperNavbar__buttons'>
          <button className='button_fill_pink' onClick={()=>setShow(true)}>Create</button>
          <Modal CloseModal={()=>setShow(false)} show={show}/>
          <button className='button_fill_black'>Connect</button>
        </div>
    </nav>
  )
}

export default Navbar