import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { AboutUs } from '@/pages/AboutUs'
import { ContactPage } from '@/pages/ContactPage/'
import { PageNotFound } from '@/pages/PageNotFound'
import { Companies } from '@/components/Companies/'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App/>,
    errorElement: <PageNotFound/>,
    children:[
      { 
        path: '/', 
        element: <Home/>
      },
      { 
        path: 'sobre', 
        element: <AboutUs/>
      },
      { 
        path: 'empresas', 
        element: <Companies/>
      },
      { 
        path: 'contato', 
        element: <ContactPage/>
      },    
    ]
  },

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
