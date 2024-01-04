import React from 'react'
import TodoData from '../components/TodoData'
import useAuthCheck from '../redux/hooks/useAuthCheck'

const Todo = () => {
  const authcheck = useAuthCheck();
  return !authcheck?(<div className='flex justify-center items-center h-screen'>
    checking your authentication</div>)
    :
    (
    <div>
      <TodoData/>
    </div>
  )
}

export default Todo