import React from 'react'
import { useEffect } from 'react';
import './ModalConnect.scss'

const ModalConnect = ({activeModalConnect, CloseModalConnect}) => {

  useEffect(()=>{
    
      const CloseModalEsc = (e) => {
        if (e.code === "Escape") CloseModalConnect()
      } 

      document.addEventListener('keydown',CloseModalEsc)

      return () => document.removeEventListener('keydown', CloseModalEsc)
      
  },[]);

  useEffect(()=>{
    activeModalConnect === true ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
  },[activeModalConnect])

  return (
    <div className={`modal ${activeModalConnect ? 'show' : ''}`} onClick={CloseModalConnect}>
      <div className='wrapperContent' onClick={e => e.stopPropagation()}>
        <span>Connect</span>
        <input placeholder='Email'/>
        <input placeholder='Password'/>
        <div>
          <button className='button_fill_pink'>Create</button>
          <button className='button_fill_black' onClick={CloseModalConnect}>Close</button>
        </div>
      </div>
    </div>
  )
}
export default ModalConnect