import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import LandHome from './Component/LandHome/LandHome'
import Login from './Component/Login/Login'
import Home from './Pages/Home/Home'
import Earn from './Pages/Earn/Earn'
import Invest from './Pages/Invest/Invest'
import SidebarHome from './Component/SidebarHome/SidebarHome'
import Airtime from './Component/Airtime/Airtime'
import Data from './Component/Data/Data'
import Send from './Component/Send/Send'

const App = () => {
  return (
    <Router className="app">
      <Routes>
        <Route path="/" element={<LandHome />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/invest" element={<Invest />} />
        </Route>
        <Route path='/airtime' element={<Airtime />} />
        <Route path='/data' element={<Data />} />
        <Route path='/send' element={<Send />} />
      </Routes>
    </Router>
  );
}

function PrivateLayout() {
  return (
    <div className="flex h-screen">
      <SidebarHome />
      <div className="flex-1 ">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>
      </div>
    </div>
  );
}

export default App