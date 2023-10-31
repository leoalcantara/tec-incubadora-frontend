import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { ContactPage } from './pages/ContactPage'
import { PageNotFound } from './pages/PageNotFound'

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
