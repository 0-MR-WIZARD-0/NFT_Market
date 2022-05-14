import React from 'react'
import { useEffect } from 'react';

const ModalReset = ({activeModalReset, CloseModalReset}) => {
  
    useEffect(()=>{
    
        const CloseModalEsc = (e) => {
          if (e.code === "Escape") CloseModalReset()
        } 
  
        document.addEventListener('keydown',CloseModalEsc)
  
        return () => document.removeEventListener('keydown', CloseModalEsc)
        
    },[]);
  
    useEffect(()=>{
      activeModalReset === true ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
    },[activeModalReset])
  
    return (
      <div className={`modal ${activeModalReset ? 'show' : ''}`} onClick={CloseModalReset}>
        <div className='wrapperContent' onClick={e => e.stopPropagation()}>
          <span>Reset password</span>
          <input placeholder='Email'/>
          <div>
            <button className='button_fill_pink'>Create</button>
            <button className='button_fill_black' onClick={CloseModalReset}>Close</button>
          </div>
        </div>
      </div>
    )
}

export default ModalReset