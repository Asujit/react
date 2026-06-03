import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PostsComments from './pages/PostsComments'

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/posts",
        element:<Posts/>
      },
      {
        path: "/posts/:postid",
        element:<PostsComments/>
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App