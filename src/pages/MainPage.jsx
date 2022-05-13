import Header from '../components/header/Header'
import HotBids from '../components/hotBids/HotBids'
import TopSellers from '../components/topSellers/TopSellers'

const MainPage = () => {
  return (
    <main>
   
        <Header/>
        
        <TopSellers/>
        <HotBids/>
    </main>
  )
}

export default MainPage