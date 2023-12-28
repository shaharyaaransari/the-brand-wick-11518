import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Register } from '../Register/Register'
import { Login } from '../Login/Login'
import Homepage from '../Homepage'

export const Allroutes = () => {
  return (
    <div>
     <Routes>
     <Route path='/' element={<Register/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/home' element={<Homepage/>}/>
       
     </Routes>

    </div>
  )
}
