import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../pages/Product'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Singlepage from '../pages/Singlepage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Product />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Product/:id" element={<Singlepage/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes