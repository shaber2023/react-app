import React, { useEffect, useState } from 'react'
import { useSignUpMutation } from '../redux/api/authapi';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [signUpUser,{isLoading,isSuccess}]=useSignUpMutation();
    const[user,setUser]=useState({firstName:'',lastName:'',email:'',password:'',confirmPassword:''});
    const chang=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    };
    const click=async()=>{
       try {
        await signUpUser(user);
        setUser({firstName:'',lastName:'',email:'',password:'',confirmPassword:''})
       } catch (error) {
        console.log(error)
       }
    }
    useEffect(()=>{
      if(isSuccess){
        navigate('/signIn')
      }
    },[isSuccess,navigate])
  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='bg-gray-300 p-8 rounded-md'>
    <div>
        <div className="text-2xl text-blue-500 text-center m-4">Create your account</div>
        <div>First Name</div>
        <input type="text" placeholder='First Name' className='my-input' name='firstName' value={user.firstName} onChange={chang}/>
        </div>
        <div>
        <div>Last Name</div>
        <input type="text" placeholder='Last Name' className='my-input' name='lastName' value={user.lastName} onChange={chang}/>
        </div>
        <div>
        <div>Email</div>
        <input type="text" placeholder='Enter your email' className='my-input' name='email' value={user.email} onChange={chang}/>
        </div>
        <div>
        <div>password</div>
        <input type="password" placeholder='Enter your password' className='my-input' name='password' value={user.password} onChange={chang}/>
        </div>
        <div>
        <div>confirm password</div>
        <input type="password" placeholder='Enter your confirm password' className='my-input' name='confirmPassword' value={user.confirmPassword} onChange={chang}/>
        </div>
    <button type='submit' onClick={click} className='btn-primary' disabled={isLoading}>Sign Up User</button>
    <div >
    Already have account? <Link to='/signIn' className='text-green-500 hover:text-gray-800'>Sign In</Link>
    </div>
    </div>
    </div>
  )
}

export default SignUp