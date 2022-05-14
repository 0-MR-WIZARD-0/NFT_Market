import React from 'react'
import { useEffect } from 'react';
import './AddNewItem.scss'

const AddNewItem = ({ activeModal, CloseModalNFT }) => {

    useEffect(() => {

        const closeModalNewNft = (e) => {
            if (e.code === "Escape") {
                CloseModalNFT() 
            }
        }

        document.addEventListener('keydown', closeModalNewNft)

        return () => document.removeEventListener('keydown', closeModalNewNft)
        
    }, []);

    useEffect(()=>{
        activeModal === true ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
    },[activeModal])

    return (
        <div className={`modal ${activeModal ? 'show' : ''}`} onClick={CloseModalNFT}>
            <div className='wrapperAddNewItem' onClick={e => e.stopPropagation()}>
                <div>
                    <label className='label'>
                        <span className='title'>Download NFT</span>
                        <input type='file' />
                    </label>
                </div>
                <div className='wrapperAddNewItem__form'>
                    <input placeholder='Title' />
                    <input placeholder='Price' />
                    <select value="A">
                        <option value="A">Choose a currency</option>
                        <option value="B">ETH</option>
                        <option value="C">BTH</option>
                    </select>
                    <button className='button_fill_pink'>Add NFT</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewItem