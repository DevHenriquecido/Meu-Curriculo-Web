import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './assets/pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)