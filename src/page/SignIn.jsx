import React, { useEffect, useState } from 'react'
import { useSignInMutation } from '../redux/api/authapi';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
    const[signInUser,{isLoading,isSuccess}]=useSignInMutation();

    const[user,setUser]=useState({email:'',password:''});
    const chang=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    };
    const click=async()=>{
      try {
        await signInUser(user);
        setUser({email:'',password:''});
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(()=>{
      if(isSuccess){
       navigate('/todo')
      }
     },[isSuccess,navigate])

  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='bg-gray-300 p-8 rounded-md'>
    <div>
    <div className="text-2xl text-blue-500 text-center m-4">Interested to join?</div>
        <div>Email : </div>
        <input type="text" placeholder='Enter your email' className='my-input' name='email' value={user.email} onChange={chang}/>
        </div>
        <div>
        <div>password : </div>
        <input type="password" placeholder='Enter your password' className='my-input' name='password' value={user.password} onChange={chang}/>
        </div>
    <button type='submit' onClick={click} className='btn-primary' disabled={isLoading}>Sign In User</button>
    <div className='pt-3 text-center'>
        Don’t have account? <Link to='/signUp' className='text-green-500 hover:text-gray-800'>Sign Up</Link>
    </div>
    </div>
    </div>
  )
}

export default SignIn