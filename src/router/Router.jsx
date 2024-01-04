import React from 'react'
import { Navbar } from '../layout/Navbar'
import { Footer } from '../layout/Footer'
import { Outlet } from 'react-router-dom'

export const Router = () => {
  return (
    <div>
        <Navbar/>
          <Outlet/>
        <Footer/>
    </div>
  )
}
