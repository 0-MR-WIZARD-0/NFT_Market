import React from 'react'
import { useEffect } from 'react'
import './Modal.scss'

const Modal = (props) => {

  useEffect(()=>{
      document.body.addEventListener('keydown',CloseModalEsc)
      return function clear(){
        document.body.removeEventListener('keydown', CloseModalEsc)
      }
  },[]);

  const CloseModalEsc = (e) => {
    if ((e.charCode || e.keyCode) === 27){
      props.CloseModal()
    }
  } 

  // document.body.style.overflowY = 'hidden'


  return (
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.CloseModal}>
      <div className='wrapperContent' onClick={e => e.stopPropagation()}>
        <span>Create account</span>
        <input placeholder='NickName'/>
        <input placeholder='Email'/>
        <input placeholder='Password'/>
        <input placeholder='Password>2'/>
        <div>
          <button className='button_fill_pink'>Create</button>
          <button className='button_fill_black' onClick={props.CloseModal}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal