import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='bg-slate-200 flex justify-between py-4 fixed top-0 w-full'>
        <div className='ml-4 cursor-pointer'>Shaber ahmad</div>
        <div className=''>
            <NavLink className={({isActive})=>`${isActive?'text-red-800 mx-5':'text-slate-900 mx-5'}`} to='/'>Home</NavLink>
            <NavLink className={({isActive})=>`${isActive?'text-red-800 mx-5':'text-slate-900 mx-5'}`} to='/weather'>Weather</NavLink>
            <NavLink className={({isActive})=>`${isActive?'text-red-800 mx-5':'text-slate-900 mx-5'}`} to='/country'>Country</NavLink>
            <NavLink className={({isActive})=>`${isActive?'text-red-800 mx-5':'text-slate-900 mx-5'}`} to='/todo'>Show Todo</NavLink>
            <NavLink className={({isActive})=>`${isActive?'text-red-800 mx-5':'text-slate-900 mx-5'}`} to='/postTodo'>Post Todo</NavLink>
            <NavLink className={({isActive})=>`${isActive?'text-red-800 mx-5 bg-green-400 px-4 py-2 rounded':'text-slate-900 mx-5'}`} to='/signIn'>SignIn</NavLink>
        </div>
    </div>
  )
}
