import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Article from './Pages/Article'
import Destination from './Pages/Destination'
import YourOrders from './Pages/YourOrders'
import DetailPage from './Pages/DetailPage'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><Home/></div>}/>
        <Route path="/Article" element={<div><Article/></div>}/>
        <Route path="/Destination" element={<div><Destination/></div>}/>
        <Route path="/YourOrders" element={<div><YourOrders/></div>}/>
        <Route path="/DetailPage/:id" element={<div><DetailPage/></div>}/>  
      </Routes>
    </BrowserRouter>
  )
}

export default App