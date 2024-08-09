import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import LandHome from './Component/LandHome/LandHome'
import Login from './Component/Login/Login'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <Router className="app">
      <Routes>
        <Route path="/" element={<LandHome />} />
        <Route path="/login" element={<Login />} />
        <Route path='/home'  element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App