import './Items.scss'
import AddNewItem from '../addNewItem/AddNewItem'
import { useState } from 'react'
import Filters from '../filters/Filters'

const Items = () => {

  const [activeModal, setActiveModal] = useState(false)

  return (
    <section className='wrapperSearchAndFilter'>
      <h2>My NFT</h2>
        <div className='wrapperSearchAndFilter__searchAndAdd'>
            <input placeholder='Search by created NFT'/>
            <button className='button_fill_pink' onClick={()=>setActiveModal(true)}>Add New NFT</button>
            <AddNewItem CloseModalNFT={()=>setActiveModal(false)} activeModal={activeModal}/>
        </div>
        
        <section className='wrapperDefault'>
            <div className='default' onClick={()=>setActiveModal(true)}>
                <span>Click Me</span>
            </div>
            <div><Filters/></div>
        </section>
    </section>
  )
}

export default Items