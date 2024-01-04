import React, { useEffect, useState } from 'react'
import { useCreateUserDataMutation } from '../redux/api/userapi'
import { useNavigate } from 'react-router-dom'
const initialState = {firstName:'',lastName:'',email:'',home:''}
const PostTodo = () => {
    const[userData,setUserData]=useState(initialState)
    const[postData,{isLoading,isSuccess}]=useCreateUserDataMutation();
    const navigate = useNavigate();
    const chang=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }
    const click=async()=>{
      try {
        await postData(userData);
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
        if(isSuccess){
            navigate('/todo')
        }
    },[isSuccess])
  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='bg-gray-300 p-8 rounded-md'>
    <div>
        <div className="text-2xl text-blue-500 text-center m-4">Create User</div>
        <div>First Name</div>
        <input type="text" placeholder='First Name' className='my-input' name='firstName' value={userData.firstName} onChange={chang}/>
        </div>
        <div>
        <div>Last Name</div>
        <input type="text" placeholder='Last Name' className='my-input' name='lastName' value={userData.lastName} onChange={chang}/>
        </div>
        <div>
        <div>Email</div>
        <input type="email" placeholder='Enter your email' className='my-input' name='email' value={userData.email} onChange={chang}/>
        </div>
        <div>
        <div>Home</div>
        <input type="text" placeholder='Enter your home' className='my-input' name='home' value={userData.home} onChange={chang}/>
        </div>
        <button className='btn-primary' onClick={click} disabled={isLoading}>Create User</button>
    </div>
    </div>
  )
}

export default PostTodo