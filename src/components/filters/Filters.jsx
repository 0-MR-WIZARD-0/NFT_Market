import React from 'react'
import './Filters.scss'

const Filters = () => {
  return (
    <div className='wrapperFilters'>
        <span>Sorting</span>
        <select>
            <option>Select sorting</option>
            <option>BTC</option>
            <option>ETH</option>
        </select>
        <span>Filters</span>
            <div className='wrapperRange'>
                <div className='wrapperRange__InputsRange'>
                    
            <input type="range" min="0" step="1" max="10"/>
             <input type="range" min="0" step="1" max="10"/>
                </div>
                    
            <div className='wrapperRange__MinMax'>
                <input placeholder='min'/>
                <input placeholder='max'/>
            </div>
            </div>
                
        
    </div>
  )
}

export default Filters