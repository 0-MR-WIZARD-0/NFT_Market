import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Explore from "../pages/Explore";
import Following from "../pages/Following";
import MainPage from "../pages/MainPage";
import MyItems from "../pages/MyItems"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/MyItems" element={<MyItems/>}/>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Following" element={<Following/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
