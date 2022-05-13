import './TopSellers.scss'
import Data from '../../json/Data.json'

const RenderSellers = () => {
    const template = Data.sellers.map(item=>
        <div className='gridSellers__item'>
            <div className='gridSellers__item__number'>
                <p>{item.id}</p>
            </div>
            <div className='gridSellers__item__wrapperProfile'>
                <div className='gridSellers__item__wrapperImg'>
                    <img alt='#' src={item.img}/> 
                </div>
                <img alt='#' src={item.verified} className='gridSellers__item__mark'/>
                <p>{item.nickname}</p>
                <p>{item.balance} ETH</p>
            </div>
        </div>
    )
    return(
        <div className='gridSellers'>
            {template}
        </div>
    )
}

const TopSellers = () => {
  return (
    <section>
        <div className='sectionInfo'>
            <h2>Top Sellers</h2>
            <p>The leading top-selling NFT artist in the top 5 list this year.<br/>
               Examining Some of the Most Popular NFT projects</p>
        </div>
        {RenderSellers()}
    </section>
  )
}

export default TopSellers