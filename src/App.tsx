import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import NavBar from './Components/NavBar'
// import FoodSlider from './Components/FoodSlider'
// import Footer from './Components/Footer'
import Home from './Components/Home'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar'
import About from './Components/About'
import Contact from './Components/Contact'
import FoodDesc from './Components/FoodDesc'


function App() {


  return (
    <>

      <Router>
        <NavBar />

        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/food/:id" element={<FoodDesc />} />
          {/*<Route path='/projects' element = {<Projects/>}/> */}
      
          
            
          
          
         
          
          
        </Routes>
      </Router>

      
    </>
  )
}

export default App
