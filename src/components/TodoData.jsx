import React from 'react'
import { useDeleteUserDataMutation, useGetUserDataQuery } from '../redux/api/userapi'
import { HashLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const TodoData = () => {
   const [deleteUser]=useDeleteUserDataMutation();
   const click=async(id)=>{
    try {
      await deleteUser(id)
    } catch (error) {
      console.log(error)
    }
   }
  const{data,isLoading}= useGetUserDataQuery();
  return (
    <div>
    {isLoading?<div className='grid items-center justify-center h-screen'>
       <HashLoader loading={isLoading} color={'green'} size={100}/>
    </div>:
    <div className='mt-16 h-screen'>
      <section className='grid grid-cols-3 '>
        {data?.fulldata.map((value,index)=>(
        <article className='bg-zinc-500 m-2 rounded p-4' key={index}>
          <p>Name : {value.firstName} {value.lastName}</p>
          <p>Email : {value.email}</p>
          <p>Home : {value.home}</p>
          <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to={`/edit/${value._id}`} >Edit User</Link>
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5" 
                    onClick={()=>click(value._id)} >Delete Data</button>
        </article>))}
      </section>
      </div>}
    </div>
    
  )
}

export default TodoData