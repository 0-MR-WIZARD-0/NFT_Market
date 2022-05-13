import React from 'react'
import MainImg from '../../img/Brain.png'
import './Header.scss'

const Header = () => {
  return (
      <section className='wrapperHeader'>
        <div className='wrapperHeader__content'>
            <h1>Discover, collect, and sell<br/> extraordinary NFTs</h1>
            <p>Explore the upcoming NFT projects, get all the info you<br/>
                need to help you decide if that is the right project for you.<br/>
                Don’t forget to check the additional info in the project<br/>
                page, including relevant tips per project.</p>
            <div className='wraperNavbar__buttons'>
                    
                <button className='button_fill_pink wraperNavbar__buttons__first'>Explore</button>
                <button className='button_fill_black wraperNavbar__buttons__second'>Create</button>
            </div>
        </div>
        <div>
            <img src={MainImg} alt="#"/>
        </div>    
      </section>
    
  )
}

export default Header