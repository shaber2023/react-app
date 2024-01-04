import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Router } from './router/Router'
import { Home } from './page/Home'
import { Weather } from './page/Weather'
import Country from './page/Country'
import { Error } from './page/Error'
import Todo from './page/Todo'
import Signup from './page/Signup'
import SignIn from './page/SignIn'
import Edit from './page/Edit'
import PostTodo from './page/PostTodo'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Router/>,
      children:[
        {
          path:'',
          element:<Home/>
        },{
          path:'/weather',
          element:<Weather/>
        },{
          path:'/country',
          element:<Country/>
        },
        {
          path:'/*',
          element:<Error/>
        },
        {
          path:'/todo',
          element:<Todo/>
        },
        {
          path:'/signUp',
          element:<Signup/>
        },
        {
          path:'/signIn',
          element:<SignIn/>
        },{
          path:`/edit/:id`,
          element:<Edit/>
        },{
          path:'/postTodo',
          element:<PostTodo/>
        }
      ]
    }
  ])
  return (
    <div>
     <RouterProvider router={router}/>  
    </div>
  )
}

export default App