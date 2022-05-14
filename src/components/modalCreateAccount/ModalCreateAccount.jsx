import React from 'react'
import { useEffect, useState } from 'react'
import ModalReset from '../modalReset/ModalReset'
import './ModalCreateAccount.scss'

const ModalCreateAccount = ({activeModalCreateAccount, CloseModalCreateAccount, setShow}) => {

  const [activeModalReset, setActiveModalReset] = useState(false)

  useEffect(()=>{
    
      const CloseModalEsc = (e) => {
        if (e.code === "Escape") CloseModalCreateAccount()
      } 

      document.addEventListener('keydown',CloseModalEsc)

      return () => document.removeEventListener('keydown', CloseModalEsc)
      
  },[]);

  useEffect(()=>{
    activeModalCreateAccount === true ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
  },[activeModalCreateAccount])


  return (
    <div className={`modal ${activeModalCreateAccount ? 'show' : ''}`} onClick={CloseModalCreateAccount}>
      <div className='wrapperContent' onClick={e => e.stopPropagation()}>
        <span>Create account</span>
        <input placeholder='NickName'/>
        <input placeholder='Email'/>
        <input placeholder='Password'/>
        <input placeholder='Password confirmation'/>
        <div className='wrapperContent__ConnectAndReset'>
          <ul>

            <li>You already have an account?</li>
            <li onClick={()=>setActiveModalReset(true)}>Forgot your password?</li>
          </ul>
        </div>
        <div>
          <button className='button_fill_pink'>Create</button>
          <button className='button_fill_black' onClick={CloseModalCreateAccount}>Close</button>
          <ModalReset activeModalReset={activeModalReset} CloseModalReset={()=>setActiveModalReset(false)}/>
        </div>
      </div>
    </div>
  )
}

export default ModalCreateAccount