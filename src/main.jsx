import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageWelcome from './pages/PageWelcome.jsx'
import PageToDoList from './pages/PageToDoList.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <PageWelcome/>
      },
      {
        path: "/PageTodoList",
        element: <PageToDoList/>
      }
    ]
    },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
