import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import ShowData from '../Components/ShowData.'
import Crud_api from '../Components/Crud_api'

export default function Navigation() {
  return (
    <div>
      
        <Routes>
          <Route path='/' element={<Crud_api/>}/>
          <Route path="/Showdata" element={<ShowData/>} />
        </Routes>
     
    </div>
  )
}
