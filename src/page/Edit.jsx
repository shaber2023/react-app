import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingelUserDataQuery, useUpdateUserDataMutation } from '../redux/api/userapi';
const initialState = {firstName:'',lastName:'',email:'',home:''}
const Edit = () => {
    const[getData,setGetData]=useState(initialState)
    const {id}=useParams();
     const{data}=useGetSingelUserDataQuery(id);
      const [editUser,{isLoading}]=useUpdateUserDataMutation()
    useEffect(()=>{
        if(data){
            setGetData({firstName:data.singaldata.firstName,lastName:data.singaldata.lastName,email:data.singaldata.email,home:data.singaldata.home})
        }else{
            setGetData(initialState)
        }
    },[data]);
    const chang=(e)=>{
        setGetData({...getData,[e.target.name]:e.target.value})
    }

    const editData=async()=>{
       try {
       const mydata = await editUser({id,getData});
       console.log(mydata)
       } catch (error) {
        console.log(error)
       }
    }

  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='bg-gray-300 p-8 rounded-md'>
    <div>
        <div className="text-2xl text-blue-500 text-center m-4">Update your info</div>
        <div>First Name</div>
        <input type="text" placeholder='First Name' className='my-input' name='firstName' value={getData.firstName} onChange={chang}/>
        </div>
        <div>
        <div>Last Name</div>
        <input type="text" placeholder='Last Name' className='my-input' name='lastName' value={getData.lastName} onChange={chang}/>
        </div>
        <div>
        <div>Email</div>
        <input type="email" placeholder='Enter your email' className='my-input' name='email' value={getData.email} onChange={chang}/>
        </div>
        <div>
        <div>Home</div>
        <input type="text" placeholder='Enter your home' className='my-input' name='home' value={getData.home} onChange={chang}/>
        </div>
        <button className='btn-primary' onClick={editData} disabled={isLoading}>Update User</button>
    </div>
    </div>
  )
}

export default Edit