import Ghost from '../../img/Ghost.svg'
import './HotBids.scss'
import Data from '../../json/Data.json'

const RenderBids = () => {
    const template = Data.bids.map(item=>
        <div className='gridBids__item' id={item.id}>
            <div className='gridBids__item__wrapperProfile'>
                <div className='gridBids__item__wrapperImg'>
                    <img alt='#' src={item.img}/> 
                </div>
                <div className='gridBids__item__information'>
                    <div>
                        <p>{item.title}</p>
                        <p>{item.price} ETH</p>
                    </div>
                    <div>
                        <div alt='#' className='gridBids__item__mark'></div>
                        <div alt='#' className='gridBids__item__mark'></div>
                        <div alt='#' className='gridBids__item__mark'></div>
                    </div> 
                </div>
            </div> 
         </div>
    )
    return(
        <div className='gridBids'>
            {template}
        </div>
    )
}

const HotBids = () => {
  return (
    <section>
        <div className='sectionInfo'>
            <h2>Hot Bids</h2>
            <p>Non-Fungible Tokens (NFTs) are virtual tokens minted on the blockchain<br/>
               for digital scarcity, security, and authenticity.</p>
        </div>  
        {RenderBids()}
        {/* <div className='gridBids'>
           <div className='gridBids__item'>
                <div className='gridBids__item__wrapperProfile'>
                    <div className='gridBids__item__wrapperImg'>
                       <img alt='#' src={Ghost}/> 
                    </div>
                    <div className='gridBids__item__information'>
                        <div>
                            <p>Brian</p>
                            <p>21.05 ETH</p>
                        </div>
                        <div>
                            <div alt='#' className='gridBids__item__mark'></div>
                            <div alt='#' className='gridBids__item__mark'></div>
                            <div alt='#' className='gridBids__item__mark'></div>
                        </div> 
                    </div>
                </div> 
            </div>
        </div> */}
        <div className='WrapperButtonLoadMore'>
            <button className='buttonLoadMore'>Load More</button>
        </div>
        
    </section>
  )
}

export default HotBids